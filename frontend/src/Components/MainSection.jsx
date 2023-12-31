import React, { useContext } from "react";
import { FamousHotel, cityData, propertyType } from "../Data";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const MainSection = () => {
  const {setSearchTerm , typeSearch,
    setTypeSearch} = useContext(AuthContext)
  const navigate = useNavigate()

  const searchCityHandler = (city) => {
    setSearchTerm(city)
    setTypeSearch("")
    navigate('/hotels')
  }
  const searchTypeHandler = (type) => {
    setTypeSearch(type) ;
    setSearchTerm("")
    navigate('/hotels')
  }

  return (
    <div className="w-10/12 ml-20 p-2">
      <div className="text-2xl font-medium mt-4">Explore India</div>
      <div className="whitespace-nowrap overflow-x-auto no-srollbar">
        {cityData.map((item) => (
          <div onClick={() => {searchCityHandler(item.name)}} className="inline-block mt-4 mr-4 cursor-pointer">
            <img className="border rounded-lg" src={item.image} alt="" />
            <div className="font-medium mt-2">{item.name}</div>
          </div>
        ))}
      </div>

      <div className="text-2xl font-medium mt-12 mb-4">Browse by property type</div>
      <div className="whitespace-nowrap overflow-x-auto no-srollbar">
        {propertyType.map((item) => (
          <div onClick={() => {searchTypeHandler(item.name)}} className="inline-block mt-4 mr-4 cursor-pointer">
            <img className="border rounded-lg" src={item.image} alt="" />
            <div className="font-medium mt-2">{item.name}</div>
          </div>
        ))}
      </div>

      {/* <div className="text-2xl font-medium mt-12 mb-4">Explore India</div>
      <div className="whitespace-nowrap overflow-x-auto no-srollbar">
        {FamousHotel.map((item) => (
          <div className="inline-block mt-4 mr-4">
            <img className="border rounded-lg w-72" src={item.image} alt="" />
            <div className="font-medium mt-2">dfjlkdjf</div>
            <div>{item.place}</div>
            <div>{item.price}</div>
            <div>{item.rating}</div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default MainSection;
