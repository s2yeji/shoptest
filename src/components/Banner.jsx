import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import style from '../css/Banner.module.css';

const Banner = () => {
  return (
    <section className={`secBnr ${style.bnrCon}`}>
      <h2 hidden>banner</h2>
      <Swiper
        pagination={true}
        modules={[Pagination]}
        className={style.bnrList}
      >
        <SwiperSlide className={style.slide}>
          <img src="img/img_bg1.jpg" />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src="img/img_bg2.jpg" />
        </SwiperSlide>
        <SwiperSlide className={style.slide}>
          <img src="img/img_bg3.jpg" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
