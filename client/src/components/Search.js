import React, { useContext } from "react";

//import components
import CountyDropdown from "./CountyDropdown";
import PropertyDropdown from "./PropertyDropdown";

//import icons
import { RiSearch2Line } from "react-icons/ri";

//import Context
import { HouseContext } from "./HouseContext";

const Search = () => {

const {handleClick} = useContext(HouseContext)

  return (
    <div className="px-[20px] mt-20 mb-20 py-6 max-w-[950px] mx-auto flex flex-col 
    lg:flex-row justify-between gap-4 lg:gap-x-4 relative lg:-top-4 
    lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
      <CountyDropdown />
      <PropertyDropdown />

      <button onClick={() => handleClick()} className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] 
      h-16 rounded-lg flex justify-center items-center text-white text-lg">
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
