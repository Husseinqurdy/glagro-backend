"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function FarmCarousel() {

  const farms = [
    { src: "/images/farm6.jpeg"},
    { src: "/images/farm2.jpeg"},
    { src: "/images/farm3.jpeg" },
    { src: "/images/farm4.jpg"},
    { src: "/images/farm5.jpg" },
  ];

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="h-full w-full"
      >

        {farms.map((farm, index) => (
          <SwiperSlide key={index} className="h-full">

            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${farm.src})`,
              }}
            >

            </div>

          </SwiperSlide>
        ))}

      </Swiper>

    </section>
  );
}