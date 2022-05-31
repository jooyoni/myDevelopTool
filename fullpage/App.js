import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper";
import Info from "./Routes/Info";
import Two from "./Routes/Two";
import styled from "styled-components";

const Container=styled.div`
  .swiper-pagination{
    position:fixed;
    top:0;
    left:0;
    display:flex;
    width:100%;
    height:50px;
    margin:0;
    transform: translateY(0);
  }
  .swiper-pagination-bullet {
    opacity: 1;
    background: rgba(255,255,255,1);
    width:100%;
    height:100%;
    border-radius: 0px;
    padding:0;
    margin:0 !important;
  }
  .swiper-pagination-bullet-active {
    background-color:red;
  }
`;
const menu=['HOME', 'ABOUT ME', 'SKILLS', 'PORTFOLIO']
export default function App() {
  console.log(document.cookie)
  return (
    <Container>
      <Swiper
        direction={"vertical"}
        speed={800}
        spaceBetween={0}
        mousewheel={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + menu[index] + '</span>';
        },
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
        style={{width:"100%", height:"100vh"}}
      >
        <SwiperSlide><Info /></SwiperSlide>
        <SwiperSlide><Two /></SwiperSlide>
        <SwiperSlide><Two /></SwiperSlide>
        <SwiperSlide><Two /></SwiperSlide>
        <div className="swiper-pagination"></div>
      </Swiper>
    </Container>
  );
}
