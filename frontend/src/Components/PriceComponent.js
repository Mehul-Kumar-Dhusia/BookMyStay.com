import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { format } from "date-fns";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PriceComponent = ({ item, isAvail }) => {
  const {
    date,
    currentUser,
    showSuccessBox,
    setShowSuccessBox,
    singleHotelData,
  } = useContext(AuthContext);

  const days = date[0].endDate.getDay() - date[0].startDate.getDay();

  const navigate = useNavigate();

  const bookingHandler = async () => {
    if (currentUser === null) {
      navigate("/login");
    } else {
      await axios.put("/rooms/booking/" + item._id, {
        startDate: date[0].startDate.getTime(),
        endDate: date[0].endDate.getTime(),
      });
      await axios.post("/booking/" , {
        userId: currentUser._id,
        HotelName: singleHotelData.name,
        RoomType: item.name,
        CheckInDate: format(date[0].startDate , "dd-MM-yyyy"),
        CheckOutDate: format(date[0].endDate , "dd-MM-yyyy"),
        Amount: ((days + 1) * item.Price),
      });
      setShowSuccessBox(!showSuccessBox);
    }
  };
  return (
    <div
      className={`border p-2 px-4 rounded-lg w-96 shadow-lg ${
        isAvail && "hover:shadow-xl"
      } ${isAvail ? "bg-blue-100" : "bg-gray-100"} max-h-max ${
        isAvail ? "cursor-pointer" : "cursor-not-allowed"
      }`}
    >
      <p className="text-3xl">
        {isAvail ? "Booking Details" : "Sorry Room Not Avialable"}
      </p>
      <div className="border border-gray-300 border-l-0 border-r-0 border-b-0 py-3 mt-5 flex flex-col gap-4">
        <p>
          <span className="font-semibold">Name</span> : Mehul
        </p>
        <p>
          <span className="font-semibold">From Date</span> :{" "}
          {format(date[0].startDate, "dd-MM-yyyy")}
        </p>
        <p>
          <span className="font-semibold">To Date</span> :{" "}
          {format(date[0].endDate, "dd-MM-yyyy")}
        </p>
      </div>
      {item !== null ? (
        <div>
          <p className="text-2xl mt-6">Amount</p>
          <div className="border border-gray-300 border-l-0 border-r-0 border-b-0 mt-3 py-3 flex flex-col gap-5">
            <p>
              <span className="font-semibold">Total Days</span> : {days + 1}
            </p>
            <p>
              <span className="font-semibold">Rent per Day</span> : Rs.{" "}
              {item.Price} /-
            </p>
            <p className="text-lg font-bold">
              Total Amount : {(days + 1) * item.Price} /-
            </p>
          </div>
          <button
            disabled={!isAvail}
            onClick={bookingHandler}
            className={`border ${
              isAvail ? "bg-blue-800" : "bg-gray-600"
            } p-2 px-10 text-white text-center rounded-md mt-3 ${
              isAvail ? "cursor-pointer" : "cursor-not-allowed"
            }`}
          >
            {isAvail ? "Pay Now" : "Not Available"}
          </button>
        </div>
      ) : (
        <button className="border bg-blue-800 p-2 px-10 text-white text-center rounded-md mt-3">
          See Availability
        </button>
      )}
    </div>
  );
};

export default PriceComponent;
