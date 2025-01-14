import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className='bg-cover bg-bottom bg-[url(https://plus.unsplash.com/premium_photo-1731842686156-74895c29a87b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full '>
        <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <div className='bg-white py-4 px-4 pb-7'>
            <h2 className='text-3xl font-bold'>Get started with Uber</h2>    
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5'>Continue</Link>
        </div>
    </div>
  )
}

export default Start