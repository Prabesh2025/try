import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

export default function LifestylePage() {
  return (
    <div>
      
         


         
        <div className=' '>
        
          <Swiper
            spaceBetween={30}
            effect={'fade'}
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
          <img className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='h-[80vh] w-full object-cover' src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
       
      </Swiper>
    

        </div>


          <div className=' h-[50vh]'>

          <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>

          </div>

    </div>
  )
}
