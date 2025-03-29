import React from 'react'

export default function ContactPage() {
  return (
    <div className='bg-gray-100'>
    <div className=' w-11/12 mx-auto grid lg:grid-cols-2 py-20 '>
     
     <div className='space-y-4' >
      
        <div className='flex items-center border w-70 py-1.5 rounded-full border-white  bg-white gap-2 text-sm  font-medium'>
          <div className='py-1 border rounded-full ml-1 px-4 bg-gradient-to-r from-purple-400 to-pink-300 border-none text-white text-sm font-semibold'>
          Success
          </div>
          <span className='opacity-70'>Our success in numbers</span>
        </div>

        <p className='text-3xl font-semibold opacity-80'>Have a project in mind?<br />
        Let's talk!</p>
        <p className=' font-medium opacity-50 mt-10 lg:mb-0 mb-10'>Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut elit tellus, luctus nec ullamcorper mattis,<br /> pulvinar dapibus leo.</p>

     </div>




   <div className='space-y-10'>                  
      

    <div className='grid grid-cols-2 space-x-2'>
    <div className='flex flex-col  space-y-2'>
      
      <input type="text" placeholder='First Name ' className='border border-gray-100 rounded-sm bg-white px-2 py-3.5 outline-none text-sm font-semibold shadow-md' />
     </div>

     <div className='flex flex-col space-y-2'>
     
      <input type="text" placeholder=' Last Name' className='border border-gray-100  rounded-sm  bg-white  px-2 py-3.5 outline-none text-sm font-semibol shadow-md' />
     </div>
    </div>

     <div className='flex flex-col space-y-2'>
     
      <input type="text" placeholder='Email' className='border border-gray-100  rounded-sm  bg-white  px-2 py-3.5 outline-none text-sm font-semibold shadow-md' />
     </div>              
        

     

     <div className='flex flex-col space-y-1'>
      
      <textarea name="" id="" placeholder='Your Message'  className='border border-gray-100 rounded-sm bg-white px-2 py-1 outline-none h-65 text-sm font-semibold shadow-md'></textarea>
     </div>
     
     <div className='flex items-center mt-10'>
        <button className='bg-red-400 text-white text-sm font-semibold px-7 py-2.5 rounded-sm hover:bg-gray-800 duration-500 cursor-pointer  '>Submit Form</button>
        
     </div>

     

     
     
         
      
</div>




</div>
</div>
  )
}
