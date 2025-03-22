import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../hooks/useAxiosFetch'
import { useNavigate } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';

function Classes() {
    const axiosFetch = useAxiosFetch();
    const [Classes, SetClasses] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    useEffect(()=>{
        axiosFetch.get('/classes').then((data)=>{
            // console.log(data.data);
            SetClasses(data.data);
        }).catch((err)=>console.log(err));
    },[])

    const filteredSearch = Classes.filter((eachclass)=> eachclass.name.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <div className='pt-20 pb-72 ml-4 mr-4'>
        <div >
            <h1 className='text-center text-5xl font-bold'>Our <span className='text-blue-500'>Classes</span>  list</h1>
        <div className='relative mt-8'>
          <input type="text" placeholder="Search for classes" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} className="mt-8  border border-blue-100 shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-300 focus:border-blue-300 transtion-all duration-300 ease-in-out overflow-hidden outline-none rounded-lg w-full py-3 pl-12 pr-4" /> 
          <SearchIcon className='absolute right-4 top-1/2  text-blue-500 hover:text-blue-600  cursor-pointer '/>

      </div>
        </div> 
         <div className='py-18 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
       
       { 
    
        filteredSearch.map((eachclass,index)=>(
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
    </div>
   
  )
}

export default Classes