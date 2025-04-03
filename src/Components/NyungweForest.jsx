import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const NyungweForest = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate('/booking');
  };

  return (
    <div className="container mx-auto px-4 py-8 font-coolvetica mt-12">
      <div
        className="bg-cover bg-center h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px]"
        style={{
          backgroundImage: `url('/img/nyungwee.jpg')`,
        }}
      >
        <motion.h1
          className="text-2xl lg:text-5xl text-white bg-opacity-50 p-4 rounded-lg font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Nyungwe Forest National Park
        </motion.h1>
      </div>
      <div className="container mx-auto px-4 py-8 font-coolvetica">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <motion.img
              src="/img/forest.jpg"
              alt="Nyungwe Forest"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>

          <div className="p-8">
            <motion.h1
              className="lg:text-4xl text-xl font-bold mb-4"
              initial={{ x: -200 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
            >
              Nyungwe Forest National Park
            </motion.h1>
            <motion.p
              className="text-gray-700 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Nyungwe Forest National Park is a tropical rainforest located in the southwest of Rwanda, on the border with Burundi. This park is one of the oldest and largest rainforests in Central Africa and is rich in biodiversity, including primates like chimpanzees, monkeys, and rare bird species such as the blue turaco.
            </motion.p>
            <motion.p
              className="text-gray-700 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Nyungwe is known for its breathtaking landscapes, including its dense forest canopy, dramatic waterfalls, and hiking trails. It also boasts one of the longest canopy walks in Africa, offering stunning views of the lush forest below. The park is also home to a variety of plants, including medicinal plants used by the local communities.
            </motion.p>
            <motion.p
              className="text-gray-700 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              The park is a haven for eco-tourists and wildlife enthusiasts alike, offering a chance to observe a wide array of flora and fauna. The forest is not only a key conservation area but also an important cultural and scientific site.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="p-8">
            <motion.p
              className="text-gray-700 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Nyungwe Forest National Park offers a combination of thrilling hikes, wildlife watching, and peaceful nature walks. The forest is particularly famous for its chimpanzee trekking experiences, where visitors can explore the forest’s depths and witness these amazing primates in their natural habitat.
            </motion.p>
            <motion.p
              className="text-gray-700 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Apart from primates, the park is also home to various other species, including forest elephants, leopards, and numerous species of birds. With its breathtaking beauty and rich biodiversity, Nyungwe Forest provides an unforgettable experience for nature lovers and adventure seekers.
            </motion.p>
            <motion.button
              onClick={handleBookNow}
              className="mt-4 lg:mt-8 text-green-900 bg-gradient-to-r from-[#D6ED07] to-yellow-300 hover:from-[#EDFF4F] hover:to-[#FFFF99] hover:text-black hover:font-normal font-bold py-2 px-4 lg:px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-lg shadow-[0_0_15px_#D6ED07] animate-pulse"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              BOOK NOW
            </motion.button>
          </div>

          <div className="relative">
            <motion.img
              src="/img/img05.JPG"
              alt="Nyungwe Forest"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NyungweForest;
