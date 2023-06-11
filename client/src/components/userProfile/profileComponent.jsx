import React from 'react'

export default function ProfileComponent({name, value}) {
  return (
    <div className='w-5/6 md:w-2/3 mx-auto flex justify-between items-center my-4 bg-white px-5 py-3 rounded-xl text-blue-600
    uppercase font-bold'>
        <div className='md:w-1/3 md:text-start'>
            {name}
        </div>
        <div className='md:w-1/3 md:text-center text-xl font-bold'>
            :
        </div>
        <div className='md:w-1/3 md:text-end'>
            {value}
        </div>
    </div>
  )
}
