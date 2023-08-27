import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import HotelListSearch from '../Components/HotelListSearch'
import HotelListSingleHotel from '../Components/HotelListSingleHotel'
import Email from '../Components/Email'

const HotelList = () => {
  return (
    <div>
     <Navbar />
     <Header type = "doNotShow" />
     <div>
      <div className='flex w-10/12 m-auto gap-10'>
        <HotelListSearch />
        <div className='w-9/12'>
          <HotelListSingleHotel />
          <HotelListSingleHotel />
          <HotelListSingleHotel />
          <HotelListSingleHotel />
          <HotelListSingleHotel />
          <HotelListSingleHotel />
          <HotelListSingleHotel />
        </div>
      </div>
     </div>
     <Email />
    </div>
  )
}

export default HotelList

