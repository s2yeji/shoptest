import style from '../css/Detail.module.css';

// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';
import { Tab, Tabs, Button, Modal } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ListCard from '../components/ListCard';
import { addPrd } from '../store/cartStore';
import { useDispatch } from 'react-redux';

const Detail = () => {
  const { id } = useParams();
  console.log('상품 아이디', id);

  const [products, setProducts] = useState(null);
  const [similarerList, setSimilarerList] = useState([]);
  const [count, setCount] = useState(1);

  let navigate = useNavigate();
  let dispatch = useDispatch();

  // id가 일치하는 하나의 상품
  const getProductList = async () => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProducts(data);

    let url2 = `http://localhost:4000/products?category=${data.category}`;
    let response2 = await fetch(url2);
    let data2 = await response2.json();
    setSimilarerList(data2);
  };

  useEffect(() => {
    getProductList();
  }, [id]);

  console.log('상세페이지 상품 정보', products);

  const reduction = () => {
    setCount(count - 1);
  };

  const increase = () => {
    setCount(count + 1);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main className="mw">
      <h2>detail</h2>
      <section className={style.detailCon}>
        <div className={style.imgCon}>
          <img src={`/img/${products?.img}`} alt={products?.title} />
        </div>
        <div className={style.pInfo}>
          <p>{products?.title}</p>
          <p>가격 {Number(products?.price).toLocaleString()}원</p>
          <p>할인율 {Number(products?.discount)}%</p>
          <div className={style.count}>
            <span>수량</span>
            {count === 1 ? (
              <button onClick={reduction} disabled>
                -
              </button>
            ) : (
              <button onClick={reduction}>-</button>
            )}
            <span>{count}</span>
            <button onClick={increase}>+</button>
          </div>
          <button
            onClick={() => {
              handleShow();
            }}
          >
            장바구니
          </button>
        </div>
      </section>
      <section className={style.pDesc}>
        <Tabs
          defaultActiveKey="Description"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="Description" title="Description">
            Description
          </Tab>
          <Tab eventKey="Aditional" title="Aditional information">
            Aditional information
          </Tab>
          <Tab eventKey="Reviews" title="Reviews">
            Reviews
          </Tab>
        </Tabs>
      </section>
      <section>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {/* {similarerList.map((p, i, arr) => {
            return ()
          })} */}
          {similarerList.map((p) => (
            <SwiperSlide key={p.id}>
              <ListCard product={p} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>장바구니에 추가되는 상품 정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{products?.title}</p>
          <p>{products?.price}</p>
          <p>{count}개</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              dispatch(
                addPrd({
                  id: products.id,
                  title: products.title,
                  img: products.img,
                  price: products.price,
                  category: products.category,
                  discount: products.discount,
                  count: count,
                })
              );
              navigate('/Cart');
            }}
          >
            장바구니에 추가
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Detail;
