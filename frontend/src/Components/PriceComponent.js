import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { format } from "date-fns";

const PriceComponent = ({ item }) => {
  const {date} = useContext(AuthContext);
  const bookingHandler = async () => {
    
  }
  return (
    <div className="border p-2 px-4 rounded-lg w-96 shadow-lg hover:shadow-xl bg-blue-100 max-h-max">
      <p className="text-3xl">Booking Details</p>
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
      {item !== null ? <div>
        <p className="text-2xl mt-6">Amount</p>
        <div className="border border-gray-300 border-l-0 border-r-0 border-b-0 mt-3 py-3 flex flex-col gap-5">
          <p>
            <span className="font-semibold">Total Days</span> : 4
          </p>
          <p>
            <span className="font-semibold">Rent per Day</span> : Rs.{" "}
            {item.Price} /-
          </p>
          <p className="text-lg font-bold">
            Total Amount : {4 * item.Price} /-
          </p>
        </div>
        <button onClick={bookingHandler} className="border bg-blue-800 p-2 px-10 text-white text-center rounded-md mt-3">
          Pay Now
        </button>
      </div> : (
        <button className="border bg-blue-800 p-2 px-10 text-white text-center rounded-md mt-3">
          See Availability
        </button>
      )}
    </div>
  );
};

export default PriceComponent;
