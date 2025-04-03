import React from 'react';
import { motion } from 'framer-motion';

import img1 from '/img/07.jpg';
import img2 from '/img/04.jpg';
import img3 from '/img/06.jpg';
import img4 from '/img/08.jpg';
import img5 from '/img/09.jpg';
import img6 from '/img/17.jpg';

const servicesData = [
  {
    title: 'Gorilla Trekking Tours',
    description: [
      'Mountain Gorilla Expeditions: Guided treks to see the iconic mountain gorillas in Volcanoes National Park.',
      'Permits Arrangement: Assistance with acquiring trekking permits and planning itineraries.',
    ],
    img: img1,
  },
  {
    title: 'Cultural Tours',
    description: [
      "Kigali City Tours: Explore the capital’s history, including the Genocide Memorial and local markets.",
      "Traditional Experiences: Participate in local dance, craft-making workshops, and cultural ceremonies in rural communities."
    ],
    img: img2,
  },
  {
    title: 'Nature and Wildlife Safaris',
    description: [
      "Akagera National Park Safaris: Guided game drives to spot the Big Five and other wildlife.",
      "Nyungwe Forest Adventures: Chimpanzee tracking and canopy walks in one of Africa’s oldest rainforests."
    ],
    img: img3,
  },
  {
    title: 'Bird Watching Tours',
    description: [
      "Guided Birding Tours: Discover Rwanda’s rich avian diversity, with expert guides in key locations like Akagera and Nyungwe."
    ],
    img: img4,
  },
  {
    title: 'Adventure Activities',
    description: [
      "Hiking and Trekking: Explore the scenic landscapes of the Virunga Mountains or the trails in Nyungwe Forest.",
      "Cycling Tours: Bike through the picturesque countryside and local villages."
    ],
    img: img5,
  },
  {
    title: 'Community and Eco-Tours',
    description: [
      "Village Visits: Engage with local communities to learn about their way of life and sustainability efforts.",
      "Agro-Tourism: Experience Rwandan farming practices and participate in activities like coffee or tea picking."
    ],
    img: img6,
  },
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-Coolvetica bg-slate-200">
      <div
        className="bg-cover bg-center h-[230px] lg:h-[400px] flex items-center justify-center ml-[-16px] mr-[-16px]"
        style={{ backgroundImage: `url('/img/DSC01135.jpeg')` }}
      >
        <h1 className="lg:text-4xl text-3xl text-white px-6 py-2 font-bold">
          Our Services
        </h1>
      </div>

      <section id="services" className="mt-11">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white shadow-lg w-full h-full rounded-lg overflow-hidden group"
              >
                <div className="relative w-full h-72 overflow-hidden">
                  <motion.img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
                </div>

                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6 transition-all duration-500">
                  <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                  <ul className="text-sm text-center opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-500 list-disc list-inside">
                    {service.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
