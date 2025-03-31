import React from 'react'
import  useAuth  from '../../hooks/useAuth.jsx';
function Hero() {
  const { user } = useAuth();
  return (
    <div>
      {
        user? (
          <div className='paddingcontroller'>
            <h1 className='text-5xl font-bold text-center'>Welcome, <span className='font-semibold text-blue-500'> {user?.displayName} </span> </h1>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-2xl text-gray-500 border-b-2 border-blue-300 hover:border-b-blue-500 mt-8 '>
              <ul className='flex justify-center gap-4 cursor-pointer'>
                <li className='text-2xl hover:text-blue-400 hover:-translate-y-1 duration-300'>My Courses</li>
                <li className='text-2xl hover:text-blue-400 hover:-translate-y-1 duration-300'>My Progress</li>
                <li className='text-2xl hover:text-blue-400 hover:-translate-y-1 duration-300'>Certificates</li>
              </ul>
            </div>
          </div>
        ) : (
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
    
    </div>
  
  )
}

export default Hero