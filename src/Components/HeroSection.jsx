import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const isLargeScreen = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth >= 1024;
  }
  return true;
};

const HeroSection = () => {
  const images = [
    "/img/05.jpg", "/img/DSC01236.jpeg", "/img/07.jpg", "/img/10.jpg",
    "/img/DSC01318.jpeg", "/img/26.jpg", "/img/DSC01357.jpeg", "/img/04.jpg",
    "/img/DSC01244.jpeg", "/img/06.jpg", "/img/img01.jpeg", "/img/08.jpg",
    "/img/09.jpg"
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(isLargeScreen());
  const [selectedTour, setSelectedTour] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (isAutoSliding) {
      const slideInterval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 2000);
      return () => clearInterval(slideInterval);
    }
  }, [images.length, isAutoSliding]);

  useEffect(() => {
    const handleResize = () => {
      setIsAutoSliding(isLargeScreen());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBookingClick = () => {
    navigate("/booking", { state: { selectedTour } });
  };

  return (
    <motion.div
      className="relative h-screen bg-cover bg-center md:mt-24 font-coolvetica bg-slate-200 p-4 overflow-hidden w-full"
      style={{ backgroundImage: `url(${images[currentSlide]})` }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      
      <motion.div
        className="absolute inset-0 bg-black bg-opacity-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.5 }}
      ></motion.div>

      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white w-full">
        <motion.h1
          className="text-4xl lg:text-8xl font-bold font-coolvetica max-w-[90%] lg:max-w-[70%] mx-auto"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Explore the Wild With Us
        </motion.h1>
        <motion.p
          className="mt-4 lg:mt-4 text-lg lg:text-xl font-coolvetica max-w-[80%] lg:max-w-[60%] mx-auto"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Safety in the wild only comes when you travel with those who
          understand the wild.
        </motion.p>

        
        <motion.button
          onClick={handleBookingClick}
          className="lg:mt-24 text-gray-800 bg-gradient-to-r from-[#D6ED07] to-yellow-300 
            hover:from-[#EDFF4F] hover:to-[#FFFF99] hover:font-normal font-bold py-2 px-4 
            lg:px-6 rounded-md transition duration-300 transform hover:scale-110 
            hover:shadow-lg shadow-[0_0_15px_#D6ED07] animate-pulse absolute bottom-24"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          BOOK NOW
        </motion.button>
      </div>

     
    </motion.div>
  );
};

export default HeroSection;
