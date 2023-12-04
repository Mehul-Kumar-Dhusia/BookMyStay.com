import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { DateRange } from "react-date-range";
import { format } from "date-fns";

const HotelListSearch = () => {
  const { setSearchTerm, date, setDate , setText} = useContext(AuthContext);
  const [openDate, setOpenDate] = useState(false);
  return (
    <div className="border p-4 shadow-lg rounded-lg w-auto h-max">
      <div className="text-3xl font-medium">Search</div>
      <div className="mb-8 mt-4">
        <p className="text-sm mb-1">Destination</p>
        <input
          className="focus:ring-0 w-72 rounded-lg border-gray-300"
          type="text"
          placeholder="destination"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="mb-4">
        <p className="text-sm mb-1">Check-in-Date</p>
        <div className="rounded-md cursor-pointer border border-gray-300 py-2 mb-2">
          <span
            className="focus:ring-0 text-gray-500 border-0 px-2"
            onClick={() => {
              setOpenDate(!openDate);
            }}
          >
            {`${format(date[0].startDate, "dd-MM-yyyy")} to ${format(
              date[0].endDate,
              "dd-MM-yyyy"
            )}`}
          </span>
        </div>
        {openDate && (
          <DateRange
            className="border shadow-lg"
            editableDateInputs={true}
            onChange={(item) => {
              setDate([item.selection]);
              setOpenDate(!openDate);
            }}
            moveRangeOnFirstSelection={false}
            ranges={date}
          />
        )}
      </div>
      <div className="mt-3 cursor-pointer border-0 py-3 bg-blue-800 text-white text-xl text-center rounded-md">
        Search
      </div>
    </div>
  );
};

export default HotelListSearch;
