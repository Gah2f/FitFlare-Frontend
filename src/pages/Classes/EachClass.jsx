import React, { useEffect, useState } from 'react'
import useAxiosFetch from '../../hooks/useAxiosFetch'
import { useParams } from 'react-router';

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
    console.log(DispayEach);
  return (
    <div>
        
    </div>
  )
}

export default EachClass