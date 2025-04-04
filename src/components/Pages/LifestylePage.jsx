import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import PerViewCarousel from "../PerViewCarousel";

export default function LifestylePage() {
  return (
    <div className="space-y-15">
      
      <div>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="h-[80vh] w-full object-cover"
              src="https://swiperjs.com/demos/images/nature-1.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[80vh] w-full object-cover"
              src="https://swiperjs.com/demos/images/nature-2.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[80vh] w-full object-cover"
              src="https://swiperjs.com/demos/images/nature-3.jpg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="h-[80vh] w-full object-cover"
              src="https://swiperjs.com/demos/images/nature-4.jpg"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <PerViewCarousel />
    </div>
  );
}
