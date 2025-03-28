import React from 'react'
function Hero() {
  return (
    <div className='relative h-screen bg-cover bg-center pt-50' style={{backgroundImage:"url('/imgs/herofitness.jpg')" }}>
{/* Hero texts  */}
     <div className=' absolute inset-0 bg-black/50  flex justify-center  text-center font-mono items-center px-4 '>
     <div>
        <h1 className=' text-3xl text-white' >
          We provide <br /> 
          <span className='text-5xl text-white  font-bold'> Best Fitness Platform </span> 
        </h1>

        <p className='text-xl text-gray-400 mt-4'>
            Join expert-led fitness classes, track your progress, and achieve your health goals with FitFlare
        </p>
           
           <div className='mt-4 flex justify-center items-center space-x-4'>
             <button className='py-2 px-6 rounded bg-blue-600  hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-300'>
               Join today
             </button>
             <button className='py-2 px-6 rounded  hover:bg-blue-700 border-2 border-white text-white focus:outline-none focus:ring-2 focus:ring-blue-300'>
               View Courses
             </button>
           </div>
        
      </div>
     </div>
    </div>
  )
}

export default Hero