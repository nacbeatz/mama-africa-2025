import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } }
};

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1 } }
};

const MountainGorilla = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8 font-coolvetica mt-12"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >

      <motion.div
        className="bg-cover bg-center h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px]"
        style={{ backgroundImage: `url('/img/20.jpg')` }}
        variants={fadeIn}
      >
        <motion.h1
          className="text-2xl lg:text-5xl text-white bg-opacity-50 p-4 rounded-lg font-bold"
          variants={slideUp}
        >
          Mountain Gorilla Trekking
        </motion.h1>
      </motion.div>

      <div className="container mx-auto px-4 py-8 font-coolvetica">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div className="relative" variants={scaleUp}>
            <motion.img
              src="/img/20.jpg"
              alt="Mountain Gorilla"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              variants={fadeIn}
            />
          </motion.div>

          <motion.div className="p-8" variants={slideUp}>
            <h1 className="lg:text-4xl text-xl font-bold mb-4">Mountain Gorilla Trekking</h1>
            <p className="text-gray-700 text-lg mb-8">
              Mountain gorilla trekking is one of the most thrilling wildlife experiences, offering a chance to observe these majestic primates in their natural habitat.
              Found in the dense forests of Rwanda, Uganda, and the Democratic Republic of Congo, mountain gorillas live in family groups and display fascinating behaviors.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              The trekking experience involves hiking through lush rainforests, guided by experienced trackers who lead you to a habituated gorilla family.
              The journey can take several hours, but the reward is a magical hour spent in the presence of these gentle giants.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              The conservation efforts to protect mountain gorillas have been highly successful, making this a once-in-a-lifetime eco-tourism experience.
              Seeing them up close, watching their interactions, and understanding their importance to biodiversity is an unforgettable adventure.
            </p>
            
          </motion.div>
          
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div className="p-8" variants={slideUp}>
            <p className="text-gray-700 text-lg mb-8">
              Rwanda’s Volcanoes National Park is one of the best places to see mountain gorillas, with well-organized trekking experiences that prioritize both visitor experience and gorilla conservation.
            </p>
            <p className="text-gray-700 text-lg mb-8">
              A permit is required for trekking, and a limited number of visitors are allowed each day to minimize impact on the gorillas and their environment.
              Booking in advance is essential due to high demand.
            </p>
           
            <motion.div className="relative" variants={scaleUp}>
            <motion.img
              src="/img/gorilla.jpg"
              alt="Mountain Gorilla"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              variants={fadeIn}
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
    </motion.div>
  );
};

export default MountainGorilla;
