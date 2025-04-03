import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 mt-10 bg-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo Icon - Aligned Left */}
        <div className="flex items-center">
          <img src="img/logo.png" alt="Mama Africa Logo" className="h-16 w-auto object-cover" />
        </div>

        {/* Hamburger Menu for Mobile - Aligned Right */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-green-600 focus:outline-none">
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Nav Links - Centered on Desktop */}
        <ul className="hidden md:flex justify-center items-center space-x-6 text-green-600 font-coolvetica sm:mr-[50%]">
          <li><Link to="/" className="hover:text-green-800">Home</Link></li>
          <li><Link to="/who-we-are" className="hover:text-green-800">Who We Are</Link></li>
          <li><Link to="/services" className="hover:text-green-800">Services</Link></li>
          <li><Link to="/packages" className="hover:text-green-800">Packages</Link></li>
          <li><Link to="/contact-us" className="hover:text-green-800">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Dropdown Menu for Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-4 text-green-600 font-coolvetica">
            <li><Link to="/" className="hover:text-green-800">Home</Link></li>
            <li><Link to="/who-we-are" className="hover:text-green-800">Who We Are</Link></li>
            <li><Link to="/services" className="hover:text-green-800">Services</Link></li>
            <li><Link to="/packages" className="hover:text-green-800">Packages</Link></li>
            <li><Link to="/contact-us" className="hover:text-green-800">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
