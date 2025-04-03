import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GuidedBirds = () => {
  const navigate = useNavigate();
  
  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <div className="container mx-auto px-4 py-8 font-coolvetica mt-12">

      <motion.div
        className="bg-cover bg-center h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px]"
        style={{ backgroundImage: `url('/img/18.jpg')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl lg:text-5xl text-white bg-opacity-50 p-4 rounded-lg font-bold">
          Guided Bird Watching Tour
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
              src="/img/14.jpg"
              alt="Guided Bird Watching"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            className="p-8"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="lg:text-4xl text-xl font-bold mb-4">Guided Bird Watching Tour</h1>
            <p className="text-gray-700 text-lg mb-8">
              Discover the beauty of birds in their natural habitat with our expert-guided bird watching tour. Explore diverse ecosystems and witness rare and stunning species of birds from the comfort of our guided tour. Whether you're an experienced birdwatcher or a beginner, this tour offers something for everyone.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Our tours take you through forests, wetlands, and grasslands, giving you the opportunity to observe different bird species, including migratory and indigenous birds. Our experienced guides will help you identify birds, explain their behaviors, and share fascinating facts about them.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              Whether you're interested in photographing birds or simply enjoying their songs, this tour is perfect for nature lovers and photography enthusiasts.
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
            <p className="text-gray-700 text-lg mb-8">
              Join us for an unforgettable bird-watching experience where you can immerse yourself in nature, learn about avian wildlife, and appreciate the wonders of the natural world. The tour is suitable for all ages and skill levels.
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
              src="/img/18.jpg"
              alt="Guided Bird Watching"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GuidedBirds;
