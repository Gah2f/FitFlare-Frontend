import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../hooks/useAxiosFetch';

function PopularTa() {
    const axiosFetch = useAxiosFetch();
    const [instructors, setInstructor] = useState([]);
    
    useEffect (()=>{
        axiosFetch.get('/popularinstructors').then((data)=>{
                setInstructor(data.data)
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

     <div> 
        {
            instructors ? 
            <> 
            <div>
                {
                    instructors.map((instructor, index)=>(
                        <div key={index}>
                            <div>
                                <img src={instructor?.photoUrl} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
            </> : <></>
        }
     </div>
    </div>
  )
}

export default PopularTa