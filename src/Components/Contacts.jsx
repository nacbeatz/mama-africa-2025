import React from 'react';
import ContactImage from "./img/contact-us.jpg";

import { motion } from "framer-motion"
function Contacts() {
  return (
    <div className="text-black mt-24 flex flex-col items-center w-full px-4 font-coolvetica bg-slate-200 py-12">
       <motion.div 
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
          
            >
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full max-w-7xl space-y-8 md:space-y-0 md:space-x-12">

    
        <div className="w-full md:w-1/2 justify-center rounded-lg shadow-lg overflow-hidden">
          <img
            src={ContactImage}
            alt="Contact"
            className="w-full h-full object-cover rounded-lg transition-transform transform hover:scale-105"
          />
        </div>

      
        <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
          <h2 className="border border-black  text-green-700 w-44 flex items-center justify-center gap-2 font-semibold text-lg md:text-xl uppercase tracking-widest mb-4">
            <span className="w-2 h-2 bg-green-700"></span>
            Get in touch
          </h2>
          <h3 className="text-gray-800 text-3xl md:text-4xl font-semibold leading-tight mb-6">
            We’d love to hear from you<br />
            <span className="text-green-700">Feel free to reach out!</span>
          </h3>
        </div>

    
        <form className="rounded-lg p-8 w-full max-w-xl bg-white shadow-lg flex flex-col items-center md:items-start space-y-6">
          <div className="w-full mb-4">
            <label htmlFor="name" className="block text-sm text-green-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="email" className="block text-sm text-green-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="message" className="block text-sm text-green-700 mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200"
              rows="5"
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-gray-800 bg-yellow-400 hover:bg-[rgb(237,255,79)] px-8 py-3 rounded-md transition duration-300 w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </div>

<div className="w-full mt-8">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d198208.17825969234!2d29.7264423!3d-1.9402777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19d6ccf3153f8b99%3A0xd0c6481db8977340!2sRwanda!5e0!3m2!1sen!2sus!4v1678697658591!5m2!1sen!2sus"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div>
</motion.div>
</div>
  );
}
export default Contacts;

    


