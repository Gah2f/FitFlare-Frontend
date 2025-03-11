import React, { useEffect, useState} from 'react'
import useAxiosFetch from '../../hooks/useAxiosFetch'
import { useParams } from 'react-router';

function EachInstructor() {
    const axiosFetch = useAxiosFetch();
    const [EachInstructor, SetEachInstructor] = useState([]);
    const instructorId = useParams();
    console.log(instructorId);
    useEffect(()=>{
        axiosFetch.get(`instructors/${instructorId.id}`).then((data)=>{
            SetEachInstructor(data.data)
        }).catch((err)=> console.log(err))
    },[])
    console.log(EachInstructor); 
  return (
    <div className='pb-72'>
        {
            EachInstructor.map((each,index)=>(
                <div  key={index}>
                    <div>
                        <img src={each?.photoUrl} alt="Picture of the instructors" />
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default EachInstructor