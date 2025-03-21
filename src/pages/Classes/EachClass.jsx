import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../hooks/useAxiosFetch'
import { useParams } from 'react-router';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function EachClass() {
    const axiosFetch = useAxiosFetch();
    const [DispayEach, setDisplayEach] = useState([]);
    const {id} = useParams();
    // console.log(classID);

    useEffect(() => {
        if (id) {
            axiosFetch.get(`classes/${id}`).then((data) => {
                setDisplayEach(data.data);
            }).catch((err) => console.log(err));
        }
    }, [id]); 
    // console.log(DispayEach);
  return (
    <div className='paddingcontroller'>
        {
          DispayEach.map((detail,index)=>(
            <div key={index}>
              <div className='flex flex-col md:flex-row '>
              <div className='w-1/2'>
              <h1 className='text-5xl font-bold'>{detail?.name}</h1>
              <h3 className='text-lg '>Instructor: {detail?.instructorName}</h3>
              <button className='mt-6 text-xl text-white p-4 bg-blue-500 hover:bg-blue-600 rounded-sm'>Enroll now</button>
              <p className='text-md '> {detail?.totalEnrolled} <span className='text-xl font-bold'>already enrolled  </span> </p>
              </div>

              <div className='w-1/2'>
              <img src={detail?.image} alt="Detail page image" />
              </div>
              </div>

              <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 divide-x divide-gray-300  rounded-2xl shadow-2xl  mt-8 mr-8 h-30'>
                <div className='px-6 py-4 border-r border-gray-300 text-center'>
                  <span className='text-xl font-bold'>{detail?.availableSeats} </span>
                 <p className='text-sm text-gray-600 mt-4'>
                 Seats are limited! Reserve yours before it's too late.
                </p>
                </div>
                <div className='px-6 py-4 border-r border-gray-300 text-center'>
                <span className='text-xl font-bold'>{detail?.Rating}</span>
                <p className='text-sm text-gray-600  mt-4'>
                Loved by students! Check out the top-rated class experience.
                </p>
                </div>
                <div className='px-6 py-4 border-r border-gray-300 text-center'>
                <span className='text-xl font-bold'>{detail?.Level}</span> 
                <p className='text-sm text-gray-600  mt-4'>
                Tailored for your skill! Choose the right level and start learning.
                </p>
                </div>
                <div className='px-6 py-4 border-r border-gray-300 text-center'>
                <span className='text-xl font-bold'>{detail?.Duration}</span>
                <p className='text-sm text-gray-600  mt-4'>
                Stay committed! Complete the course in just a few weeks.
                </p>
                </div>
                <div className='px-6 py-4 text-center'>
                <span className='text-xl font-bold'>{detail?.Liked}</span>
                {/* <ThumbUpOffAltIcon/> */}
                <p className='text-sm text-gray-600  mt-4'>
                Highly recommended! Join the class that everyone loves
                </p>
                </div>
              </div>


            </div>
          ))
        }
    </div>
  )
}

export default EachClass