import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Packages = memo(({ packagesData, onTourSelect }) => {
  const navigate = useNavigate();

  const handleBookNow = (packageItem) => {
    onTourSelect(packageItem.name);
    navigate("/booking", { state: { PackageDetails: packageItem } });
  };

  return (
    <div className="container mx-auto px-4 py-8 font-coolvetica bg-slate-100">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" text-justify leading-relaxed font-coolvetica"
      >
        {/* Hero Section */}
        <div
          className="bg-cover bg-center h-[230px] lg:h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px] bg-slate-200"
          style={{ backgroundImage: `url('/img/DSC01342.jpeg')` }}
        >
          <h1 className="text-3xl lg:text-4xl text-white px-6 py-2 font-bold text-center">
            Our Packages
          </h1>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {packagesData.map((packageItem, index) => (
            <motion.div
              key={packageItem.id}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col transition-transform transform hover:scale-105 duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative h-60 w-full">
                  <motion.img
                    src={packageItem.imageUrl}
                    alt={packageItem.name}
                    className="w-full h-full object-cover transition-opacity duration-500 opacity-80 hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>

                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl">{packageItem.name}</h3>
                    <p className="text-gray-700 mt-2">{packageItem.description}</p>
                  </div>

                  <motion.button
                    onClick={() => handleBookNow(packageItem)}
                    className="mt-4 lg:mt-8 text-gray-800 bg-yellow-400 hover:bg-[rgb(237,255,79)] py-2 px-4 lg:px-6 rounded-md transition duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    BOOK NOW
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
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
});

export default Packages;
