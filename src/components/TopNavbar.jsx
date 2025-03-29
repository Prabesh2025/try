import React from 'react'
import { SquareM } from 'lucide-react';
import { Instagram } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Send } from 'lucide-react';


export default function TopNavbar() {
  return (
    <div className=' bg-gradient-to-r from-blue-500 to-pink-500'>
      
       <div className='w-11/12 mx-auto flex items-center justify-between py-2 '>

       <div className='flex items-center space-x-3'>
       <SquareM size={18} className='bg-white text-gray-500 '/>
       <Instagram size={18} className='text-white'/>
       <Twitter size={18} className='text-white' />
       <Send size={18} className='text-white' />
    
       </div>

       <div className=' hidden sm:flex items-center gap-5 font-semibold text-sm text-white'>
        <p>About Us</p>
        <p>-</p>
        <p>Our Story</p>
        <p>-</p>
        <p>Projects</p>
        
       </div>
            
       </div>

    </div>
  )
}
