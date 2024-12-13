"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const FullWidthSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={10}
        className="w-full"
      >
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-[300px] md:h-[500px]">
            <img
              src="/img/slider.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </SwiperSlide>
        <var>
          <SwiperSlide>
            <div className="w-full h-[300px] md:h-[500px]">
              <img
                src="/img/slider.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </var>
      </Swiper>
    </div>
  );
};

export default FullWidthSlider;
