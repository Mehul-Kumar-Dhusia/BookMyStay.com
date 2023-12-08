import { Cancel } from '@mui/icons-material'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'
import { Link } from 'react-router-dom'

const Success = () => {
  const {setShowSuccessBox} = useContext(AuthContext)
  const cancelHandler = () => {
    setShowSuccessBox(false)
  }
  return (
    <div className='absolute border p-2 h-60 w-96 flex justify-center items-center bg-white rounded-lg shadow-lg top-1/4 left-1/3 hover:shadow-2xl'>
    <div onClick={cancelHandler} className='absolute top-0 right-0 cursor-pointer'>
      <Cancel />
    </div>
      <div className='flex flex-col items-center gap-4'>
       <p className='font-semibold text-2xl'>Room Booked SuccessFully 🎉</p>
       <Link to='/profile'>
       <button className='border p-2 rounded-lg w-40 bg-blue-800 text-white text-center hover:bg-blue-700'>Go To Profile</button>
       </Link>
      </div>
    </div>
  )
}

export default Success
 