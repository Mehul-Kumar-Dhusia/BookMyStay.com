import React from "react";
import SearchBar from "./SearchBar";

const Header = ({type}) => {
  return (
    <div className="h-52 bg-blue-800 text-white relative mb-10">
      <div className="w-11/12 m-auto flex flex-col justify-end pl-5 h-48 pb-3">
        <div className="font-bold text-5xl">Find your next stay</div>
        <div className="font-normal text-2xl mb-10 mt-6">
          Search deals on hotels, homes, and much more...
        </div>
        {type !== "doNotShow" && <SearchBar />}
      </div>
    </div>
  );
};

export default Header;
