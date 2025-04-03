import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-30 -mt-4 transition-all duration-500 ${isScrolled ? ' bg-green-500 py-1 shadow-lg' : 'bg-green-500 py-0'}`}>
      <nav className="container mx-auto flex items-center justify-between px-6 py-1 relative">
        
      
        <div className=" mt-12 lg:mt-14">
          <img
            src="/img/logo.png"
            alt="Mama Africa Logo"
            className="h-16 lg:h-18 w-auto  transition duration-300 hover:scale-105"
          />
        </div>

        <div className="md:hidden ml-auto">
          <button onClick={toggleMenu} className="text-slate-800 focus:outline-none">
            {isOpen ? (
              <svg className="w-10 h-10 transform transition duration-300 mt-16 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"> 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg className="w-10 h-10 transform transition duration-300 mt-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>

        
        <ul className="hidden md:flex justify-center items-center space-x-6 text-white mt-10 font-coolvetica tracking-wide mx-auto">
          {['', 'Who We Are', 'Services', 'Packages', 'Contact Us'].map((item, index) => (
            <li key={index}>
             <Link 
  to={`/${item.toLowerCase().replace(/ /g, '-')}`} 
  className="relative px-2 py-1 transition duration-300 hover:text-yellow-300
  after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] 
  after:bg-yellow-300 after:transition-all after:duration-300 after:ease-in-out 
  hover:after:w-full hover:after:left-0"
>
  {item === '' ? 'Home' : item}
</Link>

            </li>
          ))}
        </ul>

      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-green-600 font-coolvetica">
              {['', 'Who We Are', 'Services', 'Packages', 'Contact Us'].map((item, index) => (
                <li key={index}>
                  <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} onClick={closeMenu} className="hover:text-green-800 transition duration-300">
                    {item === '' ? 'Home' : item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;
