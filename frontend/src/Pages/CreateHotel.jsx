import React from "react";
import Navbar from "../Components/Navbar";

const CreateHotel = () => {
  return (
    <div>
      <Navbar show={false} />
      <div className="w-96 m-auto mt-20">
        <div className="text-2xl mb-5 text-center">Enter Hotel Details</div>
        <form className="flex flex-col gap-3">
          <input type="text" placeholder="Enter Your Hotel Name" />
          <input type="text" placeholder="Enter Your Hotel Type" />
          <input type="text" placeholder="Enter Your Hotel City" />
          <input type="text" placeholder="Enter Your Hotel Address" />
          <input type="text" placeholder="Enter Your Hotel Description" />
          <input type="text" placeholder="Enter Your Hotel Name" />
          <button type="submit" className="border bg-blue-800 text-white py-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateHotel;
