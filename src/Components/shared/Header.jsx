import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white text-green-500 z-50 font-coolvetica shadow-md overflow-hidden">
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between items-center w-full px-2 py-2 font-semibold text-xs md:text-sm">
        
   
        <span className="flex items-center whitespace-nowrap">
          <FaEnvelope className="text-sm mr-1" /> mamafricatour1@gmail.com
        </span>

      
        <span className="flex items-center whitespace-nowrap">
          <FaPhone className="text-sm mr-1" /> +250 788 784 023 906
        </span>
      </div>
    </div>
  );
};


export default Header;
