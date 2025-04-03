import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HistoricalSites = () => {
  const navigate = useNavigate();
  
  const handleBookNow = () => {
    navigate('/booking');
  };
  
  return (
    <div className="container mx-auto px-4 py-8 font-coolvetica mt-12">
      
  
      <motion.div
        className="bg-cover bg-center h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px]"
        style={{ backgroundImage: `url('/img/23.jpg')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl lg:text-5xl text-white bg-opacity-50 p-4 rounded-lg font-bold">
          Historical and Educational Tours in Rwanda
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
              src="/img/genocide.jpg"
              alt="Genocide Memorial"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          
          <motion.div
            className="p-8"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="lg:text-4xl text-xl font-bold mb-4">Genocide Memorial Visits</h2>
            <p className="text-gray-700 text-lg mb-8">
              Explore Rwanda’s tragic past and resilient present through guided tours of Genocide Memorial sites.
              Gain deep insights into the country’s history, the impact of the genocide, and Rwanda’s journey toward unity and reconciliation.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              These memorials serve as places of remembrance and education, ensuring that history is preserved for future generations.
            </p>
          </motion.div>
        </div>
      </div>
      
      
      <div className="container mx-auto px-4 py-8 font-coolvetica">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          <motion.div
            className="p-8"
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="lg:text-4xl text-xl font-bold mb-4">Local History Tours</h2>
            <p className="text-gray-700 text-lg mb-8">
              Discover Rwanda’s rich heritage by visiting historical sites and engaging in storytelling sessions with local guides.
              Learn about the traditions, culture, and significant events that shaped Rwanda’s past and present.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              These tours provide a unique opportunity to hear firsthand accounts from historians and elders, making history come alive in an immersive way.
            </p>
           
          
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/img/29.jpg"
              alt="Local History Tour"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.button
              onClick={handleBookNow}
              className="mt-4 lg:mt-8 text-green-900 bg-gradient-to-r from-[#D6ED07] to-yellow-300 hover:from-[#EDFF4F] hover:to-[#FFFF99] hover:text-black hover:font-normal font-bold py-2 px-4 lg:px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-lg shadow-[0_0_15px_#D6ED07] animate-pulse"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              BOOK NOW
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HistoricalSites;
