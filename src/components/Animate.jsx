import React from 'react'
import ball1Img from "../../src/assets/ball1.webp";
import car1Img from "../../src/assets/car1.webp";
import skateboard1Img from "../../src/assets/skateboard.webp";
import helmet1Img from "../../src/assets/helmet.webp";
import hat1Img from "../../src/assets/hat.webp";
import flower1Img from "../../src/assets/flower.webp";
import cup1Img from "../../src/assets/cup.webp";
import music1Img from "../../src/assets/music.webp";

export default function Animate() {
  return (
    <div>
         <div className='border-none   mx-auto mt-10 mb-10 shadow-xl bg-gray-50  py-10 text-center'>
            <p className='text-xl font-semibold text-gray-600 absolute ml-155 z-1 '>@PrabeshxStudio</p>
            <p className='text-sm opacity-70 font-medium absolute z-1 ml-130 mt-8 font-mono'>Join me on Instagram for a peek into my daily news!</p>
         <button className='border-none rounded-full px-10 py-2 bg-red-400 absolute ml-150 mt-30 z-1 cursor-pointer hover:bg-gray-500'>Follow @Prabesh</button>
        <marquee behavior="animate" direction="left" classname="animate-bounce" >
      <div className='flex items-center space-x-2 '>
           
           <img src={ball1Img} alt="" className='h-50 w-60 object-cover border-none rounded-2xl border-gray-50'/>
           <img src={car1Img} alt="" className='h-50 w-60 object-cover border-none rounded-2xl border-gray-50 mt-30'/>
           <img src={skateboard1Img} alt="" className='h-50 w-50 object-cover border-none rounded-2xl border-gray-50'/>
           <img src={helmet1Img} alt="" className='h-50 w-40 object-cover border-none rounded-2xl border-gray-50 mt-30'/>
           <img src={hat1Img} alt="" className='h-50 w-50 object-cover border-none rounded-2xl border-gray-50 '/>
           <img src={ flower1Img} alt="" className='h-50 w-60 object-cover border-none rounded-2xl border-gray-50 mt-30'/>
           <img src={cup1Img} alt="" className='h-50 w-50 object-cover border-none rounded-2xl border-gray-50 '/>
           <img src={music1Img} alt="" className='h-50 w-40 object-cover border-none rounded-2xl border-gray-50 mt-30'/>
          
      
      </div>
           
        
        </marquee>
        </div>
        
    </div>
  )
}
