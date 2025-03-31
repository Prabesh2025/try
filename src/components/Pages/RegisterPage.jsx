import React from 'react'
import { User } from "lucide-react";
import { LockKeyhole } from "lucide-react";

export default function RegisterPage() {
  return (
     <div className=" ">
        <form className="w-8/12 md:w-6/12 lg:w-4/12  mx-auto shadow-xl border rounded-sm bg-white border-gray-200 p-10 space-y-6  mt-20 ">
          <p className=" text-xl sm:text-4xl text-blue-400 font-bold text-center">Login </p>
          <div className=" grid  -ml-4  p-8 space-x-2 space-y-10">
            <div className="flex flex-col  space-y-2">
              <label htmlFor="email" className="text-sm sm:text-lg font-semibold">
               Email Address
              </label>
              <p className="flex items-center  ">
                <User size={18} className="text-gray-400 -mr-5" />
              
              <input
              id='email'
                type="text"
                placeholder="Type your Email "
                className="border-2 border-gray-200 px-4 py-2  w-44 sm:w-70 md:w-80 lg:w-70 xl:w-90   text-gray-500 outline-none text-sm font-semibold"
              />
              </p>
              
            </div>
    
            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-sm sm:text-lg font-semibold">
                Password
              </label>
              <p className='flex items-center'>
              <LockKeyhole size={18} className="text-gray-400 -mr-4.5 " />
              <input
                type="password"
                placeholder="New password"
                className="border-2 border-gray-200 px-4 py-2 w-44 sm:w-70 md:w-80 lg:w-70 xl:w-90  text-gray-500 outline-none  text-sm font-semibold"
              />
              </p>  
              
            </div>


            <div className="flex flex-col space-y-2">
              <label htmlFor="" className="text-sm sm:text-lg font-semibold">
                 Confirm-Password
              </label>
              <p className='flex items-center'>
              <LockKeyhole size={18} className="text-gray-400 -mr-4.5 " />
              <input
                type="password"
                placeholder="Confirm your password"
                className="border-2 border-gray-200 px-4 py-2 w-44 sm:w-70 md:w-80 lg:w-70 xl:w-90  text-gray-500 outline-none  text-sm font-semibold"
              />
              </p>  
              
            </div>


          </div>
          <div id="login_btn" className="flex justify-center items-center  w-30 ml-4 ">
            <button className=" text-white text-sm font-semibold sm:px-10 px:30  py-2 cursor-pointer  ">
              REGISTER
            </button>
          </div>
          
        </form>
      </div>
  )
}
