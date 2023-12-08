import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { LocationOn } from "@mui/icons-material";
import Email from "../Components/Email";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import PriceComponent from "../Components/PriceComponent";
import Success from "../Components/Success";

const SingleHotel = () => {
  const { singleHotelData, date , showSuccessBox} = useContext(AuthContext);
  const [roomsData, setRoomsData] = useState([]);
  const [currentRoomData, setCurrentRoomData] = useState(null);
  const [isAvail , setIsAvail] = useState(true)

  useEffect(() => {
    const getRoomsData = async () => {
      if(singleHotelData !== null){
        const response = await axios.get("/rooms/" + singleHotelData._id);
        setRoomsData(response.data);
      }
    };
    getRoomsData();
  }, [singleHotelData]);

  const gettingRoomDetailHandler = async (item) => {
    setIsAvail(true)
    setCurrentRoomData(item);
    let n = item.bookedDate.length ;
    const checkingStartDate = date[0].startDate.getTime() ;
    const checkingEndDate = date[0].endDate.getTime()
    let flag = true ;
    for(let i = 0 ; i < n ; i++){
      const bookedStartDate = item.bookedDate[i].startDate ;
      const bookedEndDate = item.bookedDate[i].endDate ;
      if(checkingEndDate < bookedStartDate || checkingStartDate > bookedEndDate){
        continue ;
      }
      else{
        flag = false ;
        break ;
      }
    }
    setIsAvail(flag)
  }

  return (
    <div className={`relative`}>
      <div className={`${showSuccessBox && "opacity-40"}`}>
      <Navbar />
      <Header type="doNotShow" />
      <div className="w-11/12 m-auto p-2 flex gap-5 h-full justify-between">
        <div className="">
          {singleHotelData && <p className="text-3xl font-semibold">
            {singleHotelData.name} | 225 Sohabaitya Bagh, Prayagraj, Uttar
            Pradesh
          </p>}
          <div className="flex items-center mt-5">
            <LocationOn />
            <span>225 Sohabaitya Bagh, Prayagraj, Uttar Pradesh</span>
          </div>
          <div className="mt-5"></div>
          <div className="mt-5 flex gap-5">
            <img
              className="w-52 object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/196477400.webp?k=61382f88af4813d521868295955dd115c27f3e3fd7fc55dd405e2a295a8bc7dc&o="
              alt=""
            />
            <img
              className="w-52 object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/196477400.webp?k=61382f88af4813d521868295955dd115c27f3e3fd7fc55dd405e2a295a8bc7dc&o="
              alt=""
            />
            <img
              className="w-52 object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/196477400.webp?k=61382f88af4813d521868295955dd115c27f3e3fd7fc55dd405e2a295a8bc7dc&o="
              alt=""
            />
            <img
              className="w-52 object-cover"
              src="https://cf.bstatic.com/xdata/images/hotel/square600/196477400.webp?k=61382f88af4813d521868295955dd115c27f3e3fd7fc55dd405e2a295a8bc7dc&o="
              alt=""
            />
          </div>
          <div className="mt-3">
            <p className="mt-5 mb-2 font-semibold">Room Type</p>
            {roomsData && roomsData.map((item) => (
              <button
                onClick={() => {gettingRoomDetailHandler(item)}}
                className="border border-gray-300 py-1 px-2 mr-2 rounded-lg hover:bg-gray-100"
              >
                {item.name}
              </button>
            ))}
          </div>
          {currentRoomData && (
            <div className="mt-5">
              <span className="font-semibold">Rent per day</span> : Rs.{" "}
              {currentRoomData.Price} /-
            </div>
          )}
        </div>

        <PriceComponent item={currentRoomData} isAvail = {isAvail} />
      </div>
      <Email />
      </div>
      {showSuccessBox && <Success />}
    </div>
  );
};

export default SingleHotel;
