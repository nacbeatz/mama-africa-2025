import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleBookingClick = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email!");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="relative bg-green-800 text-white pt-12 pb-8 inset-x-0">

      <div className="absolute top-20 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 49c120 21 240 49 360 48s240-28 360-28 240 26 360 31 240-5 360-26v50H0z"
            fill="black"
            opacity="0.1"
          />
        </svg>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-16 font-coolvetica text-left md:text-left  items-stretch">

        <div className="flex flex-col items-center md:items-start w-full">
          <h3 className="text-lg mb-2 font-semibold">Subscribe to Our Newsletter</h3>
          <p className="text-sm mb-4 text-gray-300">
            Stay updated with our latest travel offers and news.
          </p>
          <div className="relative w-full">
            <form className="flex flex-col items-center gap-4 w-full">
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg text-black bg-white focus:ring-2 focus:ring-yellow-300 outline-none w-full"
              />


              <motion.button
                onClick={handleBookingClick}
                className="text-gray-800 bg-gradient-to-r from-[#D6ED07] to-yellow-300 
      hover:from-[#EDFF4F] hover:to-[#FFFF99] hover:font-normal font-bold 
      py-2 w-2/4 px-4 rounded-md transition duration-300 transform hover:scale-110 
      hover:shadow-lg shadow-[0_0_15px_#D6ED07] animate-pulse"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                REGISTER
              </motion.button>
            </form>
            {message && <p className="text-yellow-300 text-sm mt-2">{message}</p>}
          </div>

        </div>


        <div className="flex flex-col items-center md:items-center w-full">
          <img src="/img/logo.png" alt="Mama Africa Logo" className="h-16 mb-4" />
          <nav className="mb-4">
            <ul className="flex flex-col space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-yellow-300">About Us</a></li>
              <li><a href="#" className="hover:text-yellow-300">Our Tours</a></li>
              <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
            </ul>
          </nav>
          <div className="flex gap-8">
            <motion.a
              href="#"
              aria-label="Facebook"
              className="text-white hover:text-yellow-300 transition"
              whileHover={{ scale: 1.2 }}
            >
              <FacebookIcon fontSize="large" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/mama_africa_tours/"
              aria-label="Instagram"
              className="text-white hover:text-yellow-300 transition"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
            >
              <InstagramIcon fontSize="large" />
            </motion.a>
            <motion.a
              href="#"
              aria-label="YouTube"
              className="text-white hover:text-yellow-300 transition"
              whileHover={{ scale: 1.2 }}
            >
              <YouTubeIcon fontSize="large" />
            </motion.a>
          </div>
        </div>


        <div className="flex flex-col items-center md:items-end w-full">
          <h2 className="text-yellow-300 text-2xl font-bold mb-2">Get In Touch</h2>
          <h3 className="mb-1 text-lg font-semibold">Address</h3>
          <p className="text-sm">Kigali, Nyarugenge</p>
          <p className="text-sm">KN 254 St.</p>
          <p className="text-sm">info@mamaafrica.com</p>
        </div>
      </div>


      <div className="mt-8 border-t border-white pt-4 text-center font-coolvetica">
        <p className="text-sm">
          Copyrights © 2025 - <span className="text-yellow-300 text-sm">Mama Africa Tours </span>.
          All Rights Reserved . Designed By <span className="text-yellow-300 text-sm">CROX STUDIOS </span>.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
