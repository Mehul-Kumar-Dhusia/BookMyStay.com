import React from "react";

const Navbar = () => {
  return (
    <div className="px-4 py-3 bg-blue-800 text-white">
      <div className="flex justify-between w-11/12 m-auto">
        <div className="text-3xl">Booking.com</div>
        <div>
          <button className="px-4 py-2 border mr-3 bg-white text-blue-800 font-medium rounded-sm">
            Register
          </button>
          <button className="px-4 py-2 border bg-white text-blue-800 font-medium rounded-sm">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
