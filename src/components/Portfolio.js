import React from 'react'
import '../styles/Portfolio.css'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
function Portfolio() {
  return (
    <div className='portfolio' id='portfolio'>
      <h1 style={{textAlign:"center", color:"white", paddingTop:"52px"}}>Portfolio</h1>
      <Swiper  navigation={true} pagination={{
          clickable: true,
        }} modules={[Navigation,Pagination]} className="mySwiper">      
        <SwiperSlide ><a href='https://zenic-insulation.netlify.app/' target='_blank'><img className='size' src='../assets/h.png'></img></a></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Portfolio