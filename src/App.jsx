import React, { useState } from 'react';
import './App.css';
import Header from './Components/shared/Header';
import NavBar from './Components/shared/NavBar';
import Booking from './Components/Booking';
import HeroSection from './Components/HeroSection';
import ServicesCard from './Components/ServicesCard';
import MissionVision from './Components/MissionVision';
import Footer from './Components/shared/Footer';
import About from './Components/About';
import Services from './Components/Services';
import Packages from './Components/Packages';
import AkageraPark from './Components/AkageraPark';
import MountainGorilla from './Components/MountainGorilla';
import Contacts from './Components/Contacts';
import NyungweForest from './Components/NyungweForest';
import GiudedBirding from './Components/GiudedBirding';
import HistoricalSites from './Components/HistoricalSites';
import GastronomicExperience from './Components/GastronomicExperience';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [selectedTour, setSelectedTour] = useState(null);

  const packagesData = [
    {
      id: 1,
      name: 'Akagera National Park Safaris',
      description: 'Experience the thrill of hiking in the beautiful mountains.',
      imageUrl: '/img/Akagera_National_Park.jpg',
    },
    {
      id: 2,
      name: 'Mountain Gorilla Expeditions',
      description: 'Unwind and relax on the sunny beaches with our exclusive packages.',
      imageUrl: '/img/GLR_mountain_ol.avif',
    },
    {
      id: 3,
      name: 'Nyungwe Forest Adventures',
      description: 'Explore the rich history and culture of the city with our guided tours.',
      imageUrl: '/img/nyungwe-park.jpg',
    },
    {
      id: 4,
      name: 'Guided Birding Tours',
      description: 'Join us for an unforgettable wildlife safari experience in the national parks.',
      imageUrl: '/img/STARLING.avif',
    },
    {
      id: 5,
      name: 'Historical Sites Tour',
      description: 'Discover the ancient ruins and historical sites with our expert guides.',
      imageUrl: '/img/Tradition_house_2.avif',
    },
    {
      id: 6,
      name: 'Gastronomic Experience',
      description: 'Indulge in a culinary journey exploring local cuisines and delicacies.',
      imageUrl: '/img/gastromic.avif',
    },
  ];

  const handleTourSelect = (tourName) => {
    setSelectedTour(tourName);
    console.log(`Tour selected: ${tourName}`);
  };

  const clearSelectedTour = () => {
    setSelectedTour(null);
  };

  return (
    <Router>
      <div>
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <ServicesCard />
                <MissionVision />
              </>
            }
          />
          <Route path="/who-we-are" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/packages"
            element={<Packages packagesData={packagesData} onTourSelect={handleTourSelect} />}
          />
          <Route path="/packages/akagera-national-park" element={<AkageraPark />} />
          <Route path="/packages/mountain-gorilla-expeditions" element={<MountainGorilla />} />
          <Route path="/packages/nyungwe-forest-adventures" element={<NyungweForest />} />
          <Route path="/packages/guided-birding-tours" element={<GiudedBirding />} />
          <Route path="/packages/historical-sites-tour" element={<HistoricalSites />} />
          <Route path="/packages/gastronomic-experience" element={<GastronomicExperience />} />
          <Route
            path="/booking"
            element={<Booking selectedTour={selectedTour} onBookingComplete={clearSelectedTour} />}
          />
          <Route path="/contact-us" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;