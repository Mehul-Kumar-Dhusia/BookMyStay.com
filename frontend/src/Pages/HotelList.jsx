import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import HotelListSearch from '../Components/HotelListSearch'
import HotelListSingleHotel from '../Components/HotelListSingleHotel'
import Email from '../Components/Email'
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext'

const HotelList = () => {
  const [hotelList , setHotelList] = useState([]) ;
  const {searchTerm} = useContext(AuthContext)
  useEffect(() => {
    const getHotelsData = async () => {
      const response = await axios.get(`/hotels/city/?city=${searchTerm}`)
      setHotelList(response.data)
    }
    getHotelsData() ;
  } , [])
  return (
    <div>
     <Navbar />
     <Header type = "doNotShow" />
     <div>
      <div className='flex w-10/12 m-auto gap-10'>
        <HotelListSearch />
        <div className='w-9/12'>
          {hotelList.map((item) => (
            <HotelListSingleHotel item = {item} />
          ))}
        </div>
      </div>
     </div>
     <Email />
    </div>
  )
}

export default HotelList

