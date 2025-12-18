import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
     
      <div className='flex flex-col lg:flex-row' >
      <form className='flex flex-col flex-wrap gap-5 p-2 w-1/2 '>
       <h1 className='font-bold'>Enter Notes Details</h1>
        <input type="text" placeholder='Enter topic'
        className='border rounded-sm border-gray-700 w-2/3 h-10 p-2'
        />
        <textarea type="text" placeholder='Enter Details' 
        className='border rounded-sm border-gray-700 w-2/3 h-30 p-2'
        />
        <button className='border rounded-sm border-gray-400 w-2/3 h-8 p-2'>Submit</button>
      </form>
      <div className='mx-2 p-2'>
        <h1 className='font-bold'>Notes Details</h1>
        <div className='flex flex-wrap gap-4 mt-3'>
        <div className='bg-white h-32 w-25 rounded-2xl'></div>
        <div className='bg-white h-32 w-25 rounded-2xl'></div>
        <div className='bg-white h-32 w-25 rounded-2xl'></div>
        <div className='bg-white h-32 w-25 rounded-2xl'></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default App
