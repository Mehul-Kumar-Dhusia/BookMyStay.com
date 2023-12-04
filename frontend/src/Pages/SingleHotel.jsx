import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { LocationOn } from "@mui/icons-material";
import Email from "../Components/Email";
import { SingleHotelImage } from "../Data";
import { AuthContext } from "../Context/AuthContext";

const SingleHotel = () => {
  const {singleHotelData} = useContext(AuthContext)
  return (
    <div>
      <Navbar />
      <Header type="doNotShow" />
      <div>
        <div className="w-11/12 m-auto p-2">
          <div className="flex justify-between items-center mb-10">
            <div>
              <p className="text-4xl font-medium mb-4">
                {singleHotelData.name}
              </p>
              <p className="mb-1 text-sm">
                <LocationOn />
                <span>Lorem ipsum dolor sit amet consectetur</span>
              </p>
              <p className="text-blue-500 text-lg font-medium">
                Excellent location - 500m from the center
              </p>
              <p className="text-green-500 text-lg font-medium">
                Book a stay over 2302 at this property and get a free airport
                taxi
              </p>
            </div>
            <button className="text-lg px-6 py-4 bg-blue-700 text-white font-medium rounded-md cursor-pointer mr-28">
              Reserve or Book Now
            </button>
          </div>
          <div className="flex flex-wrap gap-10">
            {SingleHotelImage.map((item,i) => (
              <img
                className="w-72 rounded-md cursor-pointer"
                src={item.image}
                alt=""
              />
            ))}
          </div>

          <div className="flex mt-10 gap-20">
            <div className="w-11/12 text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatibus necessitatibus esse obcaecati magni quas ratione
              cumque vero dignissimos distinctio placeat animi ex nulla nisi aut
              eos, amet dolorum, maxime molestiae sint qui ad aperiam! Quisquam
              eaque quia molestiae nobis sit?Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Cumque placeat quis eveniet
              provident error, porro explicabo ipsum aperiam incidunt doloribus.
            </div>
            <div className="bg-blue-100 p-4 rounded-md mr-28 h-72 flex flex-col justify-between">
              <p className="text-3xl font-medium mb-3">
                Perfect for a 9 night Stay
              </p>
              <p className="w-11/12 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ratione, voluptatem.
              </p>
              <div>
                <p className="mt-4 text-2xl mb-4">
                  <span className="font-bold">Rs.9340</span> (9 Nights)
                </p>
                <button className="px-8 py-4 bg-blue-800 text-white rounded-md cursor-pointer w-full">
                  Reserve or Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Email />
    </div>
  );
};

export default SingleHotel;
