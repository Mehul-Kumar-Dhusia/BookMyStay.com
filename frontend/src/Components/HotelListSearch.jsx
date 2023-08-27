import React from "react";

const HotelListSearch = () => {
  return (
    <div className="border bg-yellow-500 p-4 shadow-lg rounded-lg w-80 h-max">
      <div className="text-3xl font-medium">Search</div>
      <div className="mb-8 mt-4">
        <p className="text-sm mb-1">Destination</p>
        <input
          className="focus:ring-0 border-0 w-full rounded-sm"
          type="text"
          placeholder="destination"
        />
      </div>
      <div className="mb-4">
        <p className="text-sm mb-1">Check-in-Date</p>
        <div className="bg-white p-2 text-gray-500 rounded-sm">
          Check-in Date
        </div>
      </div>
      <div>
        <p className="text-sm mt-8">Options</p>
        <div className="flex justify-between items-center mb-4 mt-1">
            <span>Min Price per night</span>
            <button className="bg-white px-8 py-1">1</button>
        </div>
        <div className="flex justify-between items-center mb-4">
            <span>Max Price per night</span>
            <button className="bg-white px-8 py-1">1</button>
        </div>
        <div className="flex justify-between items-center mb-4">
            <span>Adult</span>
            <button className="bg-white px-8 py-1">1</button>
        </div>
        <div className="flex justify-between items-center mb-4">
            <span>Children</span>
            <button className="bg-white px-8 py-1">1</button>
        </div>
        <div className="flex justify-between items-center mb-4">
            <span>Room</span>
            <button className="bg-white px-8 py-1">1</button>
        </div>
      </div>
      <div className="border-0 py-4 bg-blue-800 text-white text-xl text-center rounded-md">Search</div>
    </div>
  );
};

export default HotelListSearch;
