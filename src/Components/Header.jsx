import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-green-600 text-white py-2 z-50"> {/* Make it fixed with higher z-index */}
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <FaPhone className="mr-2" /> +250 788 000 000
          </span>
          <span className="flex items-center">
            <FaEnvelope className="mr-2" /> info@mamaafrica.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
