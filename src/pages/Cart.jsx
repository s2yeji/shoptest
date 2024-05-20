import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { changeAge, changeName } from '../store/userStore';
import { addCount, minusCount, delPrd } from '../store/cartStore';

const Cart = () => {
  let user = useSelector((state) => state.user); // userStore.js에서 user를 가져온다
  let cart = useSelector((state) => state.cart); // cartStore.js에서 cart를 가져온다

  let dispatch = useDispatch();
  let navigate = useNavigate();

  //   changeName('예지');

  return (
    <main className="mw">
      <h2>
        <span>
          <strong>{user.username}</strong>님의
        </span>{' '}
        장바구니
        <button
          onClick={() => {
            dispatch(changeName('예지'));
          }}
        >
          이름 변경
        </button>
      </h2>
      <p>
        <span>3</span>개의 상품이 담겨있습니다.
      </p>
      <p>
        나이 {user.age}{' '}
        <button
          onClick={() => {
            dispatch(changeAge(1));
          }}
        >
          나이 변경
        </button>
      </p>
      <Table striped bordered hover className="cart">
        <colgroup>
          <col width={'50px'} />
          <col width={'*'} />
          <col width={'150px'} />
          <col width={'100px'} />
          <col width={'100px'} />
          <col width={'150px'} />
          <col width={'70px'} />
        </colgroup>
        <thead>
          <tr>
            <th>id</th>
            <th>상품명 / 이미지 / 옵션</th>
            <th>가격</th>
            <th>할인율</th>
            <th>수량</th>
            <th>결제 금액</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => {
            return (
              <tr key={item.id}>
                <td className="center">{item.id}</td>
                <td
                  onClick={() => {
                    navigate(`/Detail/${item.id}`);
                  }}
                >
                  <div className="img">
                    <div>
                      <img src={`/img/${item.img}`} alt="{item.title}" />
                    </div>
                    <p>{item.title}</p>
                  </div>
                </td>
                <td className="right">
                  {Number(item.price).toLocaleString()}원
                </td>
                <td className="center">{item.discount}%</td>
                <td className="center">
                  {item.count === 1 ? (
                    <button disabled>-</button>
                  ) : (
                    <button
                      onClick={() => {
                        dispatch(minusCount(item.id));
                      }}
                    >
                      -
                    </button>
                  )}
                  <span>{item.count}</span>
                  <button
                    onClick={() => {
                      dispatch(addCount(item.id));
                    }}
                  >
                    +
                  </button>
                </td>
                <td className="right">
                  {Number(
                    item.price * (1 - item.discount / 100) * item.count
                  ).toLocaleString()}
                  원
                </td>
                <td
                  className="center"
                  onClick={() => {
                    dispatch(delPrd(item.id));
                  }}
                >
                  <i className="fa-solid fa-x"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={7} className="right">
              {cart
                .reduce((a, b) => {
                  return a + b.price * (1 - b.discount / 100) * b.count;
                }, 0)
                .toLocaleString()}
              원
            </td>
          </tr>
        </tfoot>
      </Table>
    </main>
  );
};

export default Cart;
