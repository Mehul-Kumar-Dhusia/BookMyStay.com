import React from 'react'

const Email = () => {
  return (
    <div className='mt-12 border h-80 bg-blue-900 text-white flex items-center justify-center'>
      <div className='w-6/12 text-center'>
        <div className='text-4xl font-medium mb-2'>Save time, save money!</div>
        <div className='mb-8'>Sign up and we'll send the best deals to you</div>
        <div className='w-9/12 m-auto flex gap-2'>
            <input className='w-full py-2 text-black text-xl rounded-md' type="text" placeholder='Your Email Address' />
            <button className='bg-blue-500 p-4 font-medium text-xl rounded-md'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Email
