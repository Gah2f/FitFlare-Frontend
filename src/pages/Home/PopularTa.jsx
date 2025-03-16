import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../hooks/useAxiosFetch';
import {Link} from 'react-router'

function PopularTa() {
    const axiosFetch = useAxiosFetch();
    const [instructors, setInstructor] = useState([]);
    
    useEffect (()=>{
        axiosFetch.get('/user').then((data)=>{
            const filteredInstructors = data.data.filter(instructors => instructors.rating === 5);
                setInstructor(filteredInstructors)
                // console.log(filteredInstructors);
            }).catch((err)=> {console.log(err);}) ; 
        } 
    ,[])
    // console.log(instructors);

  return (
    <div>
    <div>
            <h1 className='text-5xl font-bold text-center dark:text-white'>
            Top-Rated  <span className=' p-2 text-blue-600'> Instructors </span>  
            </h1>
            <div className='w-[40%] text-center mx-auto my-4'>
                <p className='text-gray-500 dark:text-gray-300'>
                Whether you're looking to build strength, improve endurance, or master new techniques, you'll be guided by the best in the industry. 
                Join us and train with professionals
                who are committed to your success!
                </p>
            </div>
     </div>

     <div > 
        {
            instructors ? 
            <> 
            <div  className='grid md:grid-cols-2 lg:grid-cols-5 gap-4 p-4 '>
                {
                    instructors.map((instructor, index)=>(
                        <Link to={`${instructor._id}`}  key={index} className='shadow-2xl ' >
                            <div className='items-center p-2 transition duration-300 hover:-translate-y-2'>
                                <img className='w-full max-h-[280px]  rounded-md' src={instructor?.photoUrl} alt="" />
                            </div>
                            <div>
                                <h1 className='text-md  text-gray-500 mb-2 font-bold'> {instructor?.name}</h1>
                                <h1 className='text-sm  text-gray-500 mb-2'> {instructor?.address}</h1>
                                <h1 className='text-sm  text-gray-500 mb-2'> {instructor?.rating}</h1>
                            </div>
                        </Link>
                    ))
                }
            </div>
            </> :
            <> 
            <p> No instructor avaliable. </p>
            </>
        }
     </div>
    </div>
  )
}

export default PopularTa