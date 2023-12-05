import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { LocationOn } from "@mui/icons-material";
import Email from "../Components/Email";
import { SingleHotelImage } from "../Data";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";
import { format } from "date-fns";
import PriceComponent from "../Components/PriceComponent";

const SingleHotel = () => {
  const { singleHotelData, currentUser, date } = useContext(AuthContext);
  const [roomsData, setRoomsData] = useState([]);
  const [currentRoomData, setCurrentRoomData] = useState(null);
  const arr = ["King Size", "Delux", "Ultra Delux"];
  useEffect(() => {
    const getRoomsData = async () => {
      const response = await axios.get("/rooms/" + singleHotelData._id);
      setRoomsData(response.data);
    };
    getRoomsData();
  }, [singleHotelData]);
  return (
    <div>
      <Navbar />
      <Header type="doNotShow" />
      <div className="w-11/12 m-auto p-2 flex gap-5 h-full justify-between">
        <div className="">
          <p className="text-3xl font-semibold">
            {singleHotelData.name} | 225 Sohabaitya Bagh, Prayagraj, Uttar
            Pradesh
          </p>
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
            {roomsData.map((item) => (
              <button
                onClick={() => {
                  setCurrentRoomData(item);
                }}
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

        <PriceComponent item={currentRoomData} />
      </div>
      <Email />
    </div>
  );
};

export default SingleHotel;
