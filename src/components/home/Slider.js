import React from 'react';

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//images slider
import SliderComponent1 from './sliderComponents/SliderComponent1';
import SliderComponent2 from './sliderComponents/SliderComponent2';
import SliderComponent3 from './sliderComponents/SliderComponent3';

//Styles
import styles from "./Slider.module.css";

const Slider = () => {
    return (
        <Swiper className='slider'
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SliderComponent1 />
        </SwiperSlide>

        <SwiperSlide>
          <SliderComponent2 />
          </SwiperSlide>
          
        <SwiperSlide>
          <SliderComponent3 />
        </SwiperSlide>
      </Swiper>
    );
};

export default Slider;