import React from 'react'
import { SquareM } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Send } from 'lucide-react';
import { NavLink } from 'react-router';


export default function TopNavbar() {
  return (
    <div className=' bg-gradient-to-r from-blue-500 to-pink-500'>
      
       <div className='w-11/12 mx-auto flex items-center justify-between py-2 '>

       <div className='hidden sm:flex items-center space-x-3'>
       <SquareM size={18} className='bg-white text-gray-500 '/>
       <Instagram size={18} className='text-white'/>
       <Twitter size={18} className='text-white' />
       <Send size={18} className='text-white' />
    
       </div>

       <div className=' flex items-center gap-5 font-semibold text-sm text-white'>
        <NavLink to="/register">About Us</NavLink>
        <p>-</p>
        <NavLink to="/login">Login</NavLink>
        <p>-</p>
        <NavLink to="/contact">Contact</NavLink>
        
       </div>
            
       </div>

    </div>
  )
}
