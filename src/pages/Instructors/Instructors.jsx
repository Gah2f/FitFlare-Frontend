import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../hooks/useAxiosFetch'
import { Link } from 'react-router';
import { useNavigate } from 'react-router';

function Instructors() {
    const axiosFetch = useAxiosFetch();
    const [AllInstructors, setAllInstructors] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        axiosFetch.get('/instructors').then((data)=>{
            setAllInstructors(data.data)
        }).catch((err)=> console.log(err));
        
    },[])
    // console.log(AllInstructors);
  return (
    <div className='pt-20 pb-72'>
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center'>Here is the list of our <span className='text-5xl text-blue-600'>exceptional instructors </span> </h1>
            </div>

            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 '> 
                {
                    AllInstructors.map((instructor,index)=>(
                        <div onClick={()=>{navigate(`${instructor._id}`)}} key={index}>
                            <div  className='items-center p-2 transition duration-300 hover:-translate-y-2'>
                                <img className='w-full max-h-[280px]  rounded-md' src={instructor?.photoUrl} alt="" />
                            </div>
                            <div>
                                <h1 className='text-md  text-gray-500 mb-2 font-bold'> {instructor?.name}</h1>
                                <h1 className='text-sm  text-gray-500 mb-2'> {instructor?.address}</h1>
                                <h1 className='text-sm  text-gray-500 mb-2'> {instructor?.rating}</h1>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Instructors