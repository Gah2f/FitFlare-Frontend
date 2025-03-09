import React from 'react'

function Subscribe() {
  return (
    <div>
        <div className='p-8'>
            <h1 className='text-3xl text-black text-center font-bold '>
               Want to be the first to know about the latest blockbuster releases?
            </h1>
        </div>
    
        <div className='flex  justify-center items-center rounded-lg shadow-sm p-4'>
        <form action="" className='flex items-center space-x-2'>
            <input 
            type="email" 
            placeholder='example@gmail.com'
            className='rounded-md p-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none '/>
            <button type='submit' className='font-bold bg-blue-600 hover:bg-blue-700 rounded-fit text-white rounded-md px-4 py-2 transition duration-300'>
                Subscribe
            </button>
        </form>
        </div>
    </div>
  )
}

export default Subscribe