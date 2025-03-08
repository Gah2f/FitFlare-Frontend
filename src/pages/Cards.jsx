import React from 'react'

function Cards({item}) {
    // console.log(item);
    const {_id, name, image, availableSeats,price,totalEnrolled} = item;
  return (
    <div className='shadow-lg rounded-lg p-3 flex flex-col justify-between border border-blue-600 overflow-hidden m-4  transition duration-300 hover:scale-110'>
        <img src={image} alt="Images of popular classes" />
       <div className='p-4'>
         <h2 className='text-xl font-semibold mb:2 dark:text-white'>
            {name}
         </h2>
         <p className='text-sm text-gray-500 mb-2'> {`Available Seats: ${availableSeats}`}</p>
         <p className='text-sm text-gray-500 mb-2'> {`Price: ${price}`}</p>
         <p className='text-sm text-gray-500 mb-2'> {`Total Students: ${totalEnrolled}`}</p>
         
       </div>

       <div className='p-4 text-center items-center justify-between'>
          <button className='px-2 w-full text-white bg-blue-600 hover:bg-blue-700 rounded-xl font-bold '>
              Select
          </button>
       </div>
    </div>
  )
}

export default Cards