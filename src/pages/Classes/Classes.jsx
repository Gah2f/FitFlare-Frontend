import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../hooks/useAxiosFetch'
import { useNavigate } from 'react-router';

function Classes() {
    const axiosFetch = useAxiosFetch();
    const [Classes, SetClasses] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        axiosFetch.get('/classes').then((data)=>{
            // console.log(data.data);
            SetClasses(data.data);
        }).catch((err)=>console.log(err));
    },[])
  return (
    <div className='py-36 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
       { 
    
        Classes.map((eachclass,index)=>(
            <div onClick={()=>{navigate(`${eachclass._id}`)}} className=' shadow-lg rounded-lg p-3 flex flex-col justify-between border border-blue-600 overflow-hidden m-4  transition duration-300 hover:scale-110'  key={index}>
                <img src={eachclass?.image} alt="" />

                <div>
                    <h2 className='text-2xl mt-4 font-bold'>{eachclass?.name}</h2>
                    <p className='font-semibold mt-4'>Skills you'll gain:</p> 
                   { 
                    eachclass?.Skillsgain.map((skill, index)=>{
                     return <p className='text-sm text-gray-500 flex' key={index}>{skill}</p>
                    
                    })
                   }
                   <p>
                   ⭐ {eachclass?.Rating}
                   </p>
                   <p> 
                    <span className='font-semibold'>Duration: </span>
                    {eachclass?.Duration}
                   </p>
                </div>
            </div>

            
        ))
       }
    </div>
  )
}

export default Classes