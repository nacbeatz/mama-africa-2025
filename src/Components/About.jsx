import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

const faqs = [
  { question: "What is included in the tour package?", answer: "Accommodation, meals, and guided tours are included." },
  { question: "Do I need a visa to visit Rwanda?", answer: "Yes, most travelers require a visa. We can assist in the application process." },
];

const About = () => {
  const navigate = useNavigate(); 

  const handleBookingClick = () => {
    navigate("/booking"); 
  };

  return (
    <div className="min-h-screen w-full bg-slate-200 flex justify-center items-center px-6 py-12 mt-24">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl text-justify leading-relaxed font-coolvetica"
      >
        <h1 className="text-xl text-green-600">About Mama Africa Tours</h1>
        <p className="mt-6">
          Welcome to Mama Africa Tours, your gateway to the captivating beauty of Rwanda. 
          We provide unforgettable experiences that showcase the unique charm and splendor of this remarkable East African nation.
        </p>

        <img 
          src="/img/rda01.jpg" 
          alt="Beautiful landscape of Rwanda" 
          className="w-full h-96 object-cover rounded-sm mt-6 shadow-md"
        />

        <h1 className="text-xl mt-6">What Makes Us Unique:</h1>
        
        <div className="mt-4">
          <h2 className="font-semibold">In-Depth Local Insight:</h2>
          <p>Our team consists of dedicated locals passionate about Rwanda's culture and hidden treasures.</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Bespoke Journeys:</h2>
          <p>We create tailored travel experiences, ensuring every adventure is personalized and memorable.</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold">Eco-Conscious Tourism:</h2>
          <p>Our tours prioritize sustainability, supporting local communities and protecting the environment.</p>
        </div>

        <h1 className="text-xl mt-6">Why Choose Mama Africa Tours:</h1>
        <ul className="mt-6 list-disc pl-6">
          <li>
            <h2 className="font-semibold">Passion for Excellence:</h2>
            <p>We strive to exceed expectations in every aspect of your journey.</p>
          </li>
          <li>
            <h2 className="font-semibold">Safety and Comfort:</h2>
            <p>Our well-maintained vehicles and expert guides ensure a worry-free experience.</p>
          </li>
          <li>
            <h2 className="font-semibold">Customer-Centric Approach:</h2>
            <p>We go the extra mile to create unforgettable moments for our clients.</p>
          </li>
        </ul>

        <div className="mt-10">
          <h2 className="text-xl text-green-600">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold">{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        <motion.button
          onClick={handleBookingClick}
          className="mt-4 lg:mt-8 text-gray-800 bg-gradient-to-r from-[#D6ED07] to-yellow-300 hover:from-[#EDFF4F] hover:to-[#FFFF99] hover:font-normal font-bold py-2 px-4 lg:px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-lg shadow-[0_0_15px_#D6ED07] animate-pulse"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          BOOK NOW
        </motion.button>

        <hr className="mt-8 border-t border-black w-1/4" />
      </motion.div>
    </div>
  );
};

export default About;
