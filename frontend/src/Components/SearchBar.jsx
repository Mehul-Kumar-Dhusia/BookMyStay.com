import { CalendarMonth, HotelOutlined, Person } from "@mui/icons-material";
import { DateRange } from "react-date-range";
import React, { useContext, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const SearchBar = () => {
  const { setSearchTerm, date, setDate } = useContext(AuthContext);
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  // const [openRooms, setOpenRooms] = useState(false);
  const [city, setCity] = useState("");
  // const [roomsOption, setRoomsOption] = useState({
  //   adult: 1,
  //   children: 0,
  //   room: 1,
  // });

  // const handleClick = (name, operation) => {
  //   setRoomsOption((prev) => {
  //     return {
  //       ...prev,
  //       [name]:
  //         operation === "d" ? roomsOption[name] - 1 : roomsOption[name] + 1,
  //     };
  //   });
  // };

  const SearchHandler = async () => {
    setSearchTerm(city);
    navigate("/hotels");
  };
  return (
    <div className="absolute -bottom-7 w-11/12">
      <div className="flex items-center border-4 rounded-md border-amber-400 w-8/12 gap-1 bg-amber-400 text-black h-14 m-auto">
        <div className="bg-white flex-1 flex items-center rounded-md pl-1 w-full h-full">
          <HotelOutlined className="text-gray-500" />
          <input
            className="border-0 w-full focus:ring-0"
            type="text"
            placeholder="Where are you going ?"
            onChange={(e) => {
              setCity(e.target.value);
            }}
          />
        </div>

        <div className="bg-white flex-1 flex items-center rounded-md pl-1 w-full h-full relative cursor-pointer">
          <CalendarMonth className="text-gray-500" />
          <span
            className="w-full focus:ring-0 text-gray-500 border-0 px-2"
            onClick={() => {
              setOpenDate(!openDate);
            }}
          >
            {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
              date[0].endDate,
              "dd/MM/yyyy"
            )}`}
          </span>
          {openDate && (
            <DateRange
              className="absolute w-full top-11 mt-2 left-0 shadow-lg"
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

        {/* <div className="bg-white flex-1 flex items-center rounded-md pl-1 w-full h-full relative cursor-pointer">
          <Person className="text-gray-500" />
          <span
            className="w-full focus:ring-0 text-gray-500 border-0 px-2"
            onClick={() => {
              setOpenRooms(!openRooms);
            }}
          >
            {`${roomsOption.adult} adult - ${roomsOption.children} children - ${roomsOption.room} room`}
          </span>
          {openRooms && (
            <div
              className="absolute w-full top-11 mt-2 left-0 shadow-lg bg-white"
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            >
              <div className="flex justify-between p-4">
                <span>Adults</span>
                <div className="flex justify-between items-center border-2 border-gray-200 rounded-md w-32 px-4 py-2">
                  <span
                    onClick={() => {
                      handleClick("adult", "d");
                    }}
                  >
                    <button
                      disabled={roomsOption.adult <= 1}
                      className="disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                  </span>
                  <span>{roomsOption.adult}</span>
                  <span
                    onClick={() => {
                      handleClick("adult", "i");
                    }}
                  >
                    <button>+</button>
                  </span>
                </div>
              </div>
              <div className="flex justify-between p-4">
                <span>Children</span>
                <div className="flex justify-between items-center border-2 border-gray-200 rounded-md w-32 px-4 py-2">
                  <span
                    onClick={() => {
                      handleClick("children", "d");
                    }}
                  >
                    <button
                      disabled={roomsOption.children <= 0}
                      className="disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                  </span>
                  <span>{roomsOption.children}</span>
                  <span
                    onClick={() => {
                      handleClick("children", "i");
                    }}
                  >
                    <button>+</button>
                  </span>
                </div>
              </div>
              <div className="flex justify-between p-4">
                <span>Rooms</span>
                <div className="flex justify-between items-center border-2 border-gray-200 rounded-md w-32 px-4 py-2">
                  <span
                    onClick={() => {
                      handleClick("room", "d");
                    }}
                  >
                    <button
                      disabled={roomsOption.room <= 1}
                      className="disabled:cursor-not-allowed"
                    >
                      -
                    </button>
                  </span>
                  <span>{roomsOption.room}</span>
                  <span
                    onClick={() => {
                      handleClick("room", "i");
                    }}
                  >
                    <button>+</button>
                  </span>
                </div>
              </div>
            </div>
          )}
        </div> */}

        <div
          onClick={SearchHandler}
          className="bg-blue-500 text-white px-6 py-2 text-center text-xl font-medium rounded-md h-full border border-blue-500 cursor-pointer hover:bg-blue-600"
        >
          Search
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
