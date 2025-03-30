import React from 'react'

export default function FeaturesPage() {
  return (
    <div>
      <div className='w-8/12 mx-auto border border-gray-300 p-8 mt-20 shadow-xl space-y-4'>

       <p className='text-3xl font-semibold text-center'>Write New Article</p>
      
         <div className='flex flex-col'>
          <label htmlFor="title">Title</label>
          <textarea type="text" name='title' id='title' placeholder='Enter News Title' className='border border-gray-300 px-2 py-1 outline-none'/>
         </div>

         <div className='flex flex-col'>
          <label htmlFor="banner">Banner</label>
          <input type="file" id='banner' className='border border-gray-300 px-2 py-1 outline-none' />

         </div>

         <div className='flex flex-col'>
          <label htmlFor="description">Title</label>
          <textarea type="text" name='description' id='description' placeholder='Enter News Description' className='border border-gray-300 px-2 py-1 outline-none h-50'/>
         </div>

         <button className='bg-blue-500 px-8 py-1.5 text-white duration-500 hover:bg-pink-500'>Create Article</button>

      </div>
    </div>
  )
}
