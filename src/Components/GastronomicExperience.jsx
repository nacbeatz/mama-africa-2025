import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GastronomicExperience = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <div className="container mx-auto px-4 py-8 font-coolvetica mt-12">

      <motion.div
        className="bg-cover bg-center h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px]"
        style={{ backgroundImage: `url('/img/17.jpg')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl lg:text-5xl text-white bg-opacity-50 p-4 rounded-lg font-bold">
          Community and Eco-Tours
        </h1>
      </motion.div>


      <div className="container mx-auto px-4 py-8 font-coolvetica">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/img/ppo.jpeg"
              alt="Gastronomic Experience"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            className="p-8"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="lg:text-4xl text-xl font-bold mb-4">Community and Eco-Tours</h1>
            <p className="text-gray-700 text-lg mb-8">
              Experience the rich and diverse flavors of Rwandan cuisine, featuring a blend of traditional ingredients
              and modern culinary techniques. From the famous brochettes to fresh organic produce, every dish tells a story.
            </p>
          </motion.div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="p-8"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="lg:text-4xl text-xl font-bold mb-4">Farm-to-Table Freshness</h2>
            <p className="text-gray-700 text-lg mb-8">
              Our gastronomic experience highlights farm-to-table meals, featuring locally sourced ingredients
              prepared by skilled chefs. Enjoy freshly harvested vegetables, organic meats, and exotic spices
              that make each dish unique.
            </p>
            <motion.button
              onClick={handleBookNow}
              className="mt-4 lg:mt-8 text-green-900 bg-gradient-to-r from-[#D6ED07] to-yellow-300 hover:from-[#EDFF4F] hover:to-[#FFFF99] hover:text-black hover:font-normal font-bold py-2 px-4 lg:px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-lg shadow-[0_0_15px_#D6ED07] animate-pulse"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              BOOK NOW
            </motion.button>
          </motion.div>
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/img/img05.JPG"
              alt="Farm-to-Table Cuisine"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GastronomicExperience;
