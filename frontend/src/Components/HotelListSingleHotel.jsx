import React from "react";

const HotelListSingleHotel = ({item}) => {
  return (
    <div className="border border-gray-200 rounded-lg flex mb-4 p-4 gap-6 justify-between cursor-pointer">
      <div className="flex gap-10">
        <div className="">
          <img
            className="w-60 rounded-lg"
            src="https://cf.bstatic.com/xdata/images/hotel/square600/477071028.webp?k=c9d87661dfac89970e50379629aa316a4905033f8f4a13cb21fd28484256d626&o="
            alt=""
          />
        </div>
        <div className="mr-10">
          <div className="text-blue-800 text-2xl font-medium mb-2">
            {item.name}
          </div>
          <p className="text-sm mb-2">500m from center</p>
          <button className="p-1 bg-green-600 text-white text-sm mb-2 rounded-sm">
            Free Airport taxi
          </button>
          <div className="text-sm font-medium mb-2">
            Studio Apartment with air contditoning
          </div>
          <p className="text-sm mb-2">Entire studio - something</p>
          <p className="text-sm text-green-600 mb-2">Free Cancellation</p>
          <p className="text-sm text-green-600 mb-2">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex justify-between items-center">
          <span className="font-medium">Excellent</span>
          <button className="py-1 px-2 bg-blue-800 text-white text-sm rounded-sm">
            4.9
          </button>
        </div>
        <div className="text-right">
          <p className="text-2xl mb-2 font-bold">234</p>
          <p className="text-xs mb-2">Included taxes and fees</p>
          <button className="bg-blue-800 text-white px-8 py-3 rounded-md">
            See Availablity
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelListSingleHotel;
