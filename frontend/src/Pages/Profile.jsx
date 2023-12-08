import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { format } from "date-fns";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [bookingRoomsDetail, setBookingRoomsDetail] = useState([]);
  
  useEffect(() => {
    const getBookingDetail = async () => {
      if (currentUser !== null) {
        const response = await axios.get("/booking/" + currentUser._id);
        setBookingRoomsDetail(response.data);
      }
    };
    getBookingDetail();
  }, [bookingRoomsDetail]);
  return (
    <div className="profile">
      <Navbar />
      <div className="w-11/12 m-auto p-2 mt-10">
        <div className="text-2xl font-semibold">Booking History</div>
        <div>
          {bookingRoomsDetail.map((item) => (
            <div className="border p-2 my-4 shadow-md rounded-md flex flex-col gap-3 text-md relative">
              <div className="text-xl font-semibold">{item.HotelName}</div>
              <div>
                <span className="font-semibold">Booking Id : </span> {item._id}
              </div>
              <div>
                <span className="font-semibold">Room Booked : </span>{" "}
                {item.RoomType}
              </div>
              <div>
                <span className="font-semibold">Check In Date : </span>{" "}
                 {item.CheckInDate}
              </div>
              <div>
                <span className="font-semibold">Check Out Date : </span>{" "}
                {item.CheckOutDate}
              </div>
              <div>
                <span className="font-semibold">Amount : </span> Rs. {item.Amount} /-
              </div>
              <div className="mb-1">
                <span className="font-semibold">Status : </span>{" "}
                <span className="border py-1 px-4 bg-green-300 rounded-md text-sm text-green-950">
                  Confirmed
                </span>{" "}
              </div>
              <button className="border bg-black text-white p-2 px-4 rounded-md absolute bottom-0 right-0 m-1 hover:opacity-80 transition-all">Cancel Booking</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
