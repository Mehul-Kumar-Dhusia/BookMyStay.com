import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import axios from "axios";

const HotelListSingleHotel = ({ item }) => {
  const navigate = useNavigate();
  const { setSingleHotelData } = useContext(AuthContext);
  const openSingleHotelHandler = async () => {
    const response = await axios.get("/hotels/find/" + item._id);
    setSingleHotelData(response.data);
    navigate("/hotels/" + item._id);
  };
  return (
    <div
      onClick={openSingleHotelHandler}
      className="border border-gray-200 rounded-lg mb-4 p-4 gap-6 justify-between cursor-pointer hover:shadow-lg"
    >
      <div className="flex gap-10 relative">
        <div className="">
          <img
            className="w-60 rounded-lg object-cover"
            src="https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o="
            alt=""
          />
        </div>
        <div className="">
          <div className="text-blue-800 text-2xl font-medium mb-2">
            {item.name} | 225 Sohabatiya Bagh , Prayagraj , Uttar Pradesh
          </div>
          <div className="mt-3">Best hotel of Prayagraj</div>
          <div className="mt-3">
            <span className="font-semibold">Type - </span>
            {item.type}
          </div>
          {/* <div className="mt-3"><span className="font-semibold">Phone No.</span> - 8874294779</div> */}
          <div className="mt-3">
            Room Price starting from -{" "}
            <span className="font-semibold">Rs. 2345</span> /-
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="border p-2 rounded-md text-white bg-blue-800 w-32 text-center">
          View Details
        </div>
      </div>
    </div>
  );
};

export default HotelListSingleHotel;
