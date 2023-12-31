import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Navbar = ({show}) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="px-4 py-3 bg-blue-800 text-white">
      <div className="flex justify-between w-11/12 m-auto">
      <Link to='/'>
        <div className="text-3xl">Booking.com</div>
      </Link>
        {currentUser !== null ? (
          <div>

          <Link to='/createHotel'>
          {show && <span className="text-xl cursor-pointer">List Your Property</span>}
          </Link>
          <Link to='/profile'>
          <button className="px-3 py-2 border bg-white text-blue-800 font-medium rounded-full text-2xl ml-5">
            {currentUser.username[0].toUpperCase()}
          </button>
          </Link>



          </div>
        ) : (
          <div>
            <Link to="/register">
              <button className="px-4 py-2 border mr-3 bg-white text-blue-800 font-medium rounded-sm">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="px-4 py-2 border bg-white text-blue-800 font-medium rounded-sm">
                Login
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
