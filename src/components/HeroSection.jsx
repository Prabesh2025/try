import React from 'react'
import ballImg from "../../src/assets/ball1.webp";
import carImg from "../../src/assets/car1.webp";
import skateboardImg from "../../src/assets/skateboard.webp";
import helmetImg from "../../src/assets/helmet.webp";
import hatImg from "../../src/assets/hat.webp";
import flowerImg from "../../src/assets/flower.webp";
import cupImg from "../../src/assets/cup.webp";
import musicImg from "../../src/assets/music.webp";
import { NavLink } from 'react-router';



export default function HeroSection() {
  return (
    <div className='mt-10 '>
          
             {/* 1st feed  */}
       
       <div id="hero" className='border-2 border-gray-100 w-11/12 mx-auto rounded-2xl border-l-amber-500 border-l-6 bg-gray-50 group'>
      
     <div className=' w-11/12 mx-auto flex gap-8 border-b  border-dotted border-gray-400  py-12  '>
      <div >
       <img src={ballImg} alt="ball"  className='rounded-2xl ml-6 h-40 w-40 object-cover group-hover:scale-110 duration-500' />
       </div>

       <div className='space-y-4'>
        <NavLink to="/try/1" className='flex flex-col font-semibold text-2xl border-b-3 border-white hover:text-pink-600  hover:border-pink-600'>The Benefits Of Traveling With A Second Language</NavLink>
        <div className='flex gap-4 font-sm font-semibold opacity-70'>
            <p>By Jessica Smith</p>
            <p>6 Comments</p>
        </div>
        <p className='mt-12 font-sm font-semibold opacity-70'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by...</p>
        </div>  

      </div>
       <div className='flex justify-between items-center py-4'>
        <div className='flex items-center ml-20 gap-4'>

            <p>#Lifestyle</p>
            <p>#Trending</p>

        </div>

        <div className='flex items-center gap-4 mr-20'>
            <p> 291 Views </p>
            <p> 3 Min Read </p>
        </div>

       </div>
       </div>

             {/* 2nd feed  */}
       <div id="hero" className='mt-10 border-2 border-gray-100 w-11/12 mx-auto rounded-2xl border-l-amber-500 border-l-6 bg-gray-50'>
      
      <div className=' w-11/12 mx-auto flex gap-8 border-b  border-dotted border-gray-400  py-10   '>
       <div >
        <img src={carImg} alt="car"  className='rounded-2xl ml-6 h-40 w-40 object-cover' />
        </div>
 
        <div className='space-y-4'>
         <h2 className='font-semibold text-2xl border-b-3 border-white hover:text-pink-600  hover:border-pink-600'>Healthy Cooking Made Easy With Nutritious Recipes</h2>
         <div className='flex gap-4 font-sm font-semibold opacity-70'>
             <p>By Jessica Smith</p>
             <p>6 Comments</p>
         </div>
         <p className='mt-12 font-sm font-semibold opacity-70'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by...</p>
         </div>  
 
       </div>
        <div className='flex justify-between items-center py-4'>
         <div className='flex items-center ml-20 gap-4'>
 
             <p>#Lifestyle</p>
             <p>#Trending</p>
 
         </div>
 
         <div className='flex items-center gap-4 mr-20'>
             <p> 291 Views </p>
             <p> 3 Min Read </p>
         </div>
 
        </div>
        </div>
              
              {/* 3rd feed  */}
        <div id="hero" className=' mt-10 border-2 border-gray-100 w-11/12 mx-auto rounded-2xl border-l-amber-500 border-l-6 bg-gray-50'>
      
     <div className=' w-11/12 mx-auto flex gap-8 border-b  border-dotted border-gray-400  py-10   '>
      <div >
       <img src={skateboardImg} alt="skateboard"  className='rounded-2xl ml-6 h-40 w-40 object-cover' />
       </div>

       <div className='space-y-4'>
        <h2 className='font-semibold text-2xl border-b-3 border-white hover:text-pink-600  hover:border-pink-600'>Shaping Tomorrow’s Landscape Of Intelligent Machines</h2>
        <div className='flex gap-4 font-sm font-semibold opacity-70'>
            <p>By Jessica Smith</p>
            <p>6 Comments</p>
        </div>
        <p className='mt-12 font-sm font-semibold opacity-70'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by...</p>
        </div>  

      </div>
       <div className='flex justify-between items-center py-4'>
        <div className='flex items-center ml-20 gap-4'>

            <p>#Lifestyle</p>
            <p>#Trending</p>

        </div>

        <div className='flex items-center gap-4 mr-20'>
            <p> 291 Views </p>
            <p> 3 Min Read </p>
        </div>

       </div>
       </div>

              {/* 4th feed  */}

       <div id="hero" className=' mt-10 border-2 border-gray-100 w-11/12 mx-auto rounded-2xl border-l-amber-500 border-l-6 bg-gray-50'>
      
     <div className=' w-11/12 mx-auto flex gap-8 border-b  border-dotted border-gray-400  py-10   '>
      <div >
       <img src={helmetImg} alt="helmet"  className='rounded-2xl ml-6 h-40 w-40 object-cover' />
       </div>

       <div className='space-y-4'>
        <h2 className='font-semibold text-2xl border-b-3 border-white hover:text-pink-600  hover:border-pink-600'>Hidden Ways To Save Money That You Might Be Missing</h2>
        <div className='flex gap-4 font-sm font-semibold opacity-70'>
            <p>By Jessica Smith</p>
            <p>6 Comments</p>
        </div>
        <p className='mt-12 font-sm font-semibold opacity-70'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by...</p>
        </div>  

      </div>
       <div className='flex justify-between items-center py-4'>
        <div className='flex items-center ml-20 gap-4'>

            <p>#Lifestyle</p>
            <p>#Trending</p>

        </div>

        <div className='flex items-center gap-4 mr-20'>
            <p> 291 Views </p>
            <p> 3 Min Read </p>
        </div>

       </div>
       </div>
            
            {/* 5th feed  */}

       <div id="hero" className='mt-10 border-2 border-gray-100 w-11/12 mx-auto rounded-2xl border-l-amber-500 border-l-6 bg-gray-50'>
      
     <div className=' w-11/12 mx-auto flex gap-8 border-b  border-dotted border-gray-400  py-10   '>
      <div >
       <img src={hatImg } alt="hat"  className='rounded-2xl ml-6 h-40 w-40 object-cover' />
       </div>

       <div className='space-y-4'>
        <h2 className='font-semibold text-2xl border-b-3 border-white hover:text-pink-600  hover:border-pink-600'>
        Time Management Secrets Of An Efficient Engineer</h2>
        <div className='flex gap-4 font-sm font-semibold opacity-70'>
            <p>By Jessica Smith</p>
            <p>6 Comments</p>
        </div>
        <p className='mt-12 font-sm font-semibold opacity-70'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by...</p>
        </div>  

      </div>
       <div className='flex justify-between items-center py-4'>
        <div className='flex items-center ml-20 gap-4'>

            <p>#Lifestyle</p>
            <p>#Trending</p>

        </div>

        <div className='flex items-center gap-4 mr-20'>
            <p> 291 Views </p>
            <p> 3 Min Read </p>
        </div>

       </div>
       </div>

           {/* 6th feed  */}
       <div id="hero" className='mt-10 border-2 border-gray-100 w-11/12 mx-auto rounded-2xl border-l-amber-500 border-l-6 bg-gray-50'>
      
     <div className=' w-11/12 mx-auto flex gap-8 border-b  border-dotted border-gray-400  py-10   '>
      <div >
       <img src={flowerImg} alt="flower"  className='rounded-2xl ml-6 h-40 w-40 object-cover' />
       </div>

       <div className='space-y-4'>
        <h2 className='font-semibold text-2xl border-b-3 border-white hover:text-pink-600  hover:border-pink-600'>Musical Improvisation Is The Spontaneous Music</h2>
        <div className='flex gap-4 font-sm font-semibold opacity-70'>
            <p>By Jessica Smith</p>
            <p>6 Comments</p>
        </div>
        <p className='mt-12 font-sm font-semibold opacity-70'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by...</p>
        </div>  

      </div>
       <div className='flex justify-between items-center py-4'>
        <div className='flex items-center ml-20 gap-4'>

            <p>#Lifestyle</p>
            <p>#Trending</p>

        </div>

        <div className='flex items-center gap-4 mr-20'>
            <p> 291 Views </p>
            <p> 3 Min Read </p>
        </div>

       </div>
       </div>

            {/* 7th feed  */}
       <div id="hero" className='mt-10 border-2 border-gray-100 w-11/12 mx-auto rounded-2xl border-l-amber-500 border-l-6 bg-gray-50'>
      
     <div className=' w-11/12 mx-auto flex gap-8 border-b  border-dotted border-gray-400  py-10   '>
      <div >
       <img src={cupImg} alt="cup"  className='rounded-2xl ml-6 h-40 w-40 object-cover' />
       </div>

       <div className='space-y-4'>
        <h2 className='font-semibold text-2xl border-b-3 border-white hover:text-pink-600  hover:border-pink-600'>Unprecedented Growth Of Next-gen Intelligent Solutions</h2>
        <div className='flex gap-4 font-sm font-semibold opacity-70'>
            <p>By Jessica Smith</p>
            <p>6 Comments</p>
        </div>
        <p className='mt-12 font-sm font-semibold opacity-70'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by...</p>
        </div>  

      </div>
       <div className='flex justify-between items-center py-4'>
        <div className='flex items-center ml-20 gap-4'>

            <p>#Lifestyle</p>
            <p>#Trending</p>

        </div>

        <div className='flex items-center gap-4 mr-20'>
            <p> 291 Views </p>
            <p> 3 Min Read </p>
        </div>

       </div>
       </div>

             {/* 8th feed  */}
       <div id="hero" className='mt-10 mb-20 border-2 border-gray-100 w-11/12 mx-auto rounded-2xl border-l-amber-500 border-l-6 bg-gray-50'>
      
     <div className=' w-11/12 mx-auto flex gap-8 border-b  border-dotted border-gray-400  py-10   '>
      <div >
       <img src={musicImg} alt="music"  className='rounded-2xl ml-6 h-40 w-40 object-cover' />
       </div>

       <div className='space-y-4'>
        <h2 className='font-semibold text-2xl border-b-3 border-white hover:text-pink-600  hover:border-pink-600'>Computer Filters Noise To Make You A Better Listener</h2>
        <div className='flex gap-4 font-sm font-semibold opacity-70'>
            <p>By Jessica Smith</p>
            <p>6 Comments</p>
        </div>
        <p className='mt-12 font-sm font-semibold opacity-70'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered <br /> alteration in some form, by...</p>
        </div>  

      </div>
       <div className='flex justify-between items-center py-4'>
        <div className='flex items-center ml-20 gap-4'>

            <p>#Lifestyle</p>
            <p>#Trending</p>

        </div>

        <div className='flex items-center gap-4 mr-20'>
            <p> 291 Views </p>
            <p> 3 Min Read </p>
        </div>

       </div>
       </div>


       


    </div>
  )
}
