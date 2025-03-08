import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../hooks/useAxiosFetch'
import Cards from './Cards';


function Popular() {
  const axiosFetch = useAxiosFetch();
  const [classes, setClasses] = useState([]);

  useEffect (()=>{
    const fetchClasses = async ()=>{
      const response = await axiosFetch.get('/classes');
      // console.log(response.data);
      setClasses(response.data);
    }
    fetchClasses();
  },[axiosFetch])
  // console.log(classes);
  return (
    <div className='md:w-[80%] mx-auto my-36'>
        <div>
            <h1 className='text-5xl font-bold text-center dark:text-white'>
                Our <span className=' p-2 text-blue-600'> popular </span>  classes
            </h1>
            <div className='w-[40%] text-center mx-auto my-4'>
                <p className='text-gray-500 dark:text-gray-300'>
                Discover the most sought-after fitness classes on FitFlare! 
                From high-intensity interval training (HIIT) to relaxing yoga sessions,
                our top-rated programs cater to all fitness levels.
                </p>
            </div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {
            classes.map((item, index)=> <Cards key={index} item={item}/>)
          }
        </div>
        
    </div>
  )
}

export default Popular