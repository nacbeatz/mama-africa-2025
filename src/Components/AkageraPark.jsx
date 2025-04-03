import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const AkageraPark = () => {
  const navigate = useNavigate();
  
  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <div className="container mx-auto px-4 py-8 font-coolvetica mt-12">
      
      <motion.div
        className="bg-cover bg-center h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px]"
        style={{
          backgroundImage: `url('/img/03.jpg')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl lg:text-5xl text-white bg-opacity-50 p-4 rounded-lg font-bold">
          Akagera National Park
        </h1>
      </motion.div>

    
      <div className="container mx-auto px-4 py-8 font-coolvetica">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
        
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="/img/07.jpg"
              alt="Akagera National Park"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          
          <motion.div
            className="p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="lg:text-4xl text-xl  font-bold mb-4">Akagera National Park</h1>
            <p className="text-gray-700 text-lg mb-8">
              Akagera National Park lies in eastern Rwanda, hugging the border with Tanzania. It's characterized by woodland, swamps, low mountains and savannah. The varied terrain shelters wildlife including zebras, giraffes, elephants, lions and hundreds of bird species, such as the rare shoebill stork. In the southern part of the park, vast Lake Ihema is home to hippos and crocodiles.
            </p>
            <p className='text-gray-700 text-lg mb-8'>
              Akagera National Park Rwanda is found in North Eastern Rwanda, at the country’s border with Tanzania. It is dominated by swamps and small lakes with flow in the wake of River Kagera. The network of water sources and unique landscape together create very spectacular scenery. It is quite a remarkable eco-system.
            </p>
            <p className='text-gray-700 text-lg mb-8'>
              Surrounded by cultivated hills, that are so much a part of Rwanda scenery, the scenery of Akagera national Park is quite simply beautiful. The landscape is low, composed of wide plains dominated by grass, cactus-like Euphorbia candelabra shrub and both thick and thin forests although it does carry on with the general rugged terrain that is so characteristic of Rwanda.
            </p>
          </motion.div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
    
          <motion.div
            className="p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-gray-700 text-lg mb-8">
              Akagera National Park lies in eastern Rwanda, hugging the border with Tanzania. It's characterized by woodland, swamps, low mountains and savannah. The varied terrain shelters wildlife including zebras, giraffes, elephants, lions and hundreds of bird species, such as the rare shoebill stork. In the southern part of the park, vast Lake Ihema is home to hippos and crocodiles.
            </p>
            <p className='text-gray-700 text-lg mb-8'>
              Akagera National Park Rwanda is found in North Eastern Rwanda, at the country’s border with Tanzania. It is dominated by swamps and small lakes with flow in the wake of River Kagera. The network of water sources and unique landscape together create very spectacular scenery. It is quite a remarkable eco-system. The Park was obviously named after River Kagera that feeds different water bodies including Lake Ihema.
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
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img
              src="/img/08.jpg"
              alt="Akagera National Park"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AkageraPark;
