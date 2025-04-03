import React from 'react'
import syronImg from "../../src/assets/syronnlogo.svg";
import { Send } from 'lucide-react';
import { AlignJustify } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { NavLink } from 'react-router';
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";


export default function BottomNavbar() {

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }
  return (
    <div className='bg-gray-800'>
      
        <div className='w-11/12 mx-auto flex items-center justify-between py-4  '>

           <div className='flex items-center'>
            <img src={syronImg} alt="syron logo" className='text-white' height={110} width={110} />
            
           </div>


           <div className='flex items-center text-white space-x-10 font-semibold'>

            <NavLink to="/" className='hidden xl:flex items-center gap-1'>Home <ChevronDown size={16} className='mt-1'/></NavLink>

            <NavLink to="/Lifestyle" className="hidden xl:flex">Lifestyle </NavLink>
            <NavLink to="/Features" className='  hidden xl:flex items-center gap-1'>Features <ChevronDown size={16} className='mt-1'/></NavLink>
          <NavLink to="/login" className='hidden xl:flex items-center gap-1'>Login <ChevronDown size={16} className='mt-1'/></NavLink>
          <NavLink to="/register" className='hidden xl:flex items-center gap-1'>Register <ChevronDown size={16} className='mt-1'/></NavLink>
          
            <NavLink to="/Contact" className="hidden xl:flex">Contact</NavLink>
            <div className='flex items-center space-x-4'>
              <Send size={14} className='hidden sm:block text-white absolute ml-5' />
              <NavLink to="/Join-us">
              <button className='hidden sm:block rounded-sm hover:bg-gray-600 duration-500 cursor-pointer bg-red-400 py-2 pl-10 pr-5 text-sm font-semibold'>Join Us</button>
              </NavLink>

              
              <label  class="switch">
              <input  type="checkbox"/>
               <span  class="slider round"></span>
             </label> 
              
 
               
              <svg className='hidden sm:block' xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"/><path stroke-linecap="round" d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"/></g></svg>

              <div className='block md:hidden'>
          <button  className="" onClick={toggleDrawer}>
            <AlignJustify />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla">
             <div id='drawer' className='bg-gray-800 py-10 h-full  '>

              <div className='space-y-4   w-4/12 mx-auto'>
                <NavLink to="/" className='flex items-center  gap-1 text-xl bg-gradient-to-r from-blue-400 to-pink-500 via-purple-400 bg-clip-text text-transparent w-25'>Home <ChevronDown size={16} className='mt-1'/></NavLink>
                <NavLink to="/Lifestyle" className="flex  text-xl bg-gradient-to-r from-blue-400 to-pink-500 via-purple-400 bg-clip-text text-transparent w-25">Lifestyle </NavLink>
                <NavLink to="/Features" className=' flex items-center gap-1  text-xl bg-gradient-to-r from-blue-400 to-pink-500 via-purple-400 bg-clip-text text-transparent w-25'>Features <ChevronDown size={16} className='mt-1'/></NavLink>
                <NavLink to="/login" className='flex items-center gap-1 text-xl bg-gradient-to-r from-blue-400 to-pink-500 via-purple-400 bg-clip-text text-transparent w-25'>Login <ChevronDown size={16} className='mt-1'/></NavLink>
                <NavLink to="/register" className='flex items-center gap-1 text-xl bg-gradient-to-r from-blue-400 to-pink-500 via-purple-400 bg-clip-text text-transparent w-25'>Register <ChevronDown size={16} className='mt-1'/></NavLink>
                <NavLink to="/Contact" className="flex  text-xl bg-gradient-to-r from-blue-400 to-pink-500 via-purple-400 bg-clip-text text-transparent w-25">Contact</NavLink>
              </div>

             </div>
          </Drawer>
        </div>

            </div>
           </div>
            
        </div>

    </div>
  )
}
