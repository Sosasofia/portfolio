import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper";
import Thumbnail from "./Thumbnail";
// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

export default function Carousel({ projects }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Keyboard]}
      spaceBetween={30}
      loop={true}
      keyboard={{ enabled: true }}
      navigation
      pagination={{ clickable: true }}
      className="mySwiper"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={index}>
          <Thumbnail data={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
