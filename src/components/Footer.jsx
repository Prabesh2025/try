import React from 'react'
import syronImg from "../../src/assets/syronnlogo.svg";
import { Send } from 'lucide-react';
import { Tally1 } from 'lucide-react';
import { SquareM } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';


export default function Footer() {
  return (
    <div className='bg-gray-800 '>
      
      <div className='w-11/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-start justify-between mt-5 py-16'>

              {/* first footer-col */}
           <div className='space-y-6 border-b-3 border-orange-400'>

             <p><img src={syronImg} alt="syron logo" className='text-white' height={110} width={110} /></p>

             <p className='text-white opacity-85 mb-15'>This is a great space to write text <span className='font-medium'> about your <br /> company </span> and your services. You can use this <br /> space to go into a little more <span className='underline font-medium'>details</span> about <br /> your company. </p>

           </div>
                     {/* 2nd footer-col */}
           <div className='flex flex-col items-start space-y-3 border-b-3 border-blue-400 '>
            
            <div className='flex items-center ml-15'>
            <span class="relative flex size-2">
             <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
             <span class="relative inline-flex size-2 rounded-full bg-red-400"></span> 
            </span>
            <span className='ml-2 font-semibold text-lg text-white'>Links</span>

            </div>
            
            <p className='text-white font-medium opacity-85 ml-15'>About Us</p>
            <p className='text-white font-medium opacity-85  ml-15'>Our Story</p>
            <p className='text-white font-medium opacity-85  ml-15 mb-20'>Projects</p>
            
            </div>
                    {/* 3rd footer-col */}
           <div className='flex flex-col items-start  space-y-3 border-b-3 border-orange-400'>
           
           <div className='flex items-center  '>
            <span class="relative flex size-2">
             <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
             <span class="relative inline-flex size-2 rounded-full bg-red-400"></span> 
            </span>
            <span className='ml-2 font-semibold text-lg text-white '>Categories</span>

            </div>

            <div className='text-white font-medium opacity-85 space-x-2 mb-23'>

             
                 
                    <span> <span className='text-purple-500 font-semibold text-lg'>#</span> <span className='hover:text-purple-500 hover:border-b-2 border-purple-500'>Entertainment</span> </span>         
                                
                    <span> <span className='text-orange-500 font-semibold text-lg'>#</span> <span className='hover:text-orange-500 hover:border-b-2 border-orange-500'>Gadget</span> </span>
                             
                            
                    <span> <span className='text-blue-500 font-semibold text-lg'>#</span> <span className='hover:text-blue-500 hover:border-b-2 border-blue-500'>Ideas</span> </span> 
              <br />
                    <span> <span className='text-green-400 font-semibold text-lg'>#</span> <span className='hover:text-green-400 hover:border-b-2 border-green-400'>Inspiration</span> </span>  

                    <span> <span className='text-yellow-500 font-semibold text-lg'>#</span> <span className='hover:text-yellow-500 hover:border-b-2 border-yellow-500'>Lifestyle</span> </span>              
                
                    <span> <span className='text-red-500 font-semibold text-lg'>#</span> <span className='hover:text-red-500 hover:border-b-2 border-red-500'>Music</span> </span>
               <br />
                    <span> <span className='text-purple-400 font-semibold text-lg'>#</span> <span className='hover:text-purple-400 hover:border-b-2 border-purple-400'>Travel
                    </span> </span>
               
                    <span> <span className='text-pink-500 font-semibold text-lg'>#</span> <span className='hover:text-pink-500 hover:border-b-2 border-pink-500 '>Trending</span> </span>
               
              
              
              
            </div>

           </div>
              {/* 4th footer-col */}         
           <div className='flex flex-col items-start space-y-4 border-b-3 border-green-400'>

           <div className='flex items-center  '>
            <span class="relative flex size-2">
             <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
             <span class="relative inline-flex size-2 rounded-full bg-red-400"></span> 
            </span>
            <span className='ml-2 font-semibold text-lg text-white '>Newsletter</span>

            </div>

            <p className='text-white font-medium opacity-85 space-x-2'>subscribe newsletter to get latest articles</p>
           <div className='mb-20.5'>
            <div className=' flex items-center'>
             <input type="email" placeholder='Email Address*'  className='text-white opacity-70 border outline-none bg-gray-800 border-gray-700 rounded-4xl py-3.5 px-6 w-80 2xl:w-98 text-sm hover:shadow-md'  />
             
             <div className=' flex items-center  absolute ml-52 2xl:ml-70  cursor-pointer '>
             <Send size={14} className='text-white absolute ml-6' />
              <p className=''>
              <button className='text-white rounded-4xl hover:bg-gray-600 duration-500 cursor-pointer bg-red-400 py-2.5 w-26 pl-6 pr-5 text-sm font-semibold'>Join </button>
              </p>
              </div>
              </div>
            </div>
            

           </div>


      </div>

      
           
           <div className='w-11/12 mx-auto grid md:flex items-start justify-between -mt-5 py-2'>

            <div className='text-white '>
    
                  <p className='text-sm opacity-70'>This website may collect data about you, use cookies, embed additional third-party tracking, and <br/> monitor your interaction with that embedded content</p>
               
                  <div className='text-sm flex items-center gap-2 py-6 opacity-90'> 
                    <p> Privacy Policy</p>  
                    <p><Tally1 size={14} className='ml-2' /></p> 
                    <p> Terms and Conditions</p>
                  </div>

            </div>


            <div className=' flex flex-col gap-2 text-right'>
              <p className='text-sm bg-gradient-to-r  from-red-500 to-blue-500 via-pink-500 bg-clip-text text-transparent'>Follow Us On Socials</p>

              <div className='hidden md:flex items-center space-x-3 ml-40'>
                <SquareM size={28} className=' text-gray-400 '/>
                <Instagram size={28} className=' text-gray-400'/>
                <Twitter size={28} className=' text-gray-400' />
                <Send size={28} className=' text-gray-400' />    
             </div>

             <p className='text-sm text-white mt-2 opacity-90 '>Copyright & Design By @Rivaxstudio - 2025</p>

            </div>

           </div>

     



    </div>
  )
}
