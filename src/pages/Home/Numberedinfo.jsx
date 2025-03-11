import React from 'react'
import Countup from 'react-countup'
import {useInView} from 'react-intersection-observer'

function Numberedinfo() {
    const {ref, inView} = useInView({triggerOnce: true , threshold: 0.3})
  return (
    <div ref={ref} className='flex items-center  justify-between p-28 text-white dark:text-gray-500 bg-blue-600 '>
        {[
            {value: 35000000, label: "Visitors"},
            {value: 5000000, label: "Subsribers"},
            {value: 950000, label: "Students"},
            {value: 90, label: "Success story", suffix: '%'},
        ].map((item,index)=>(
            <div key={index} className='text-center'>
                <h1 className='text-8xl p-2 m-4 font-bold'>
                    <Countup start={0} end={inView ? item.value : 0} duration={3} formattingFn={(num)=> num > 1000000 ? Math.floor(num / 1000000) + 'M' : num > 1000? Math.floor(num / 1000)+ 'K' : num + (item.suffix || "") } />
                </h1>
                <p className='text-xl p-2'>
                    {item.label}
                </p>
            </div>
        ))}
    </div>
  )
}

export default Numberedinfo