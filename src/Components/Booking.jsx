import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { motion } from 'framer-motion';

const Booking = ({ selectedTourFromParent }) => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [selectedTour, setSelectedTour] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [attendeeCategory, setAttendeeCategory] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [disableTourSelection, setDisableTourSelection] = useState(false);

  const tours = [
    'Akagera National Park Safaris',
    'Mountain Gorilla Expeditions',
    'Nyungwe Forest Adventures',
    'Guided Birding Tours',
    'Historical Sites Tour',
    'Gastronomic Experience',
  ];

  const attendeeCategories = ['Single', 'Couple', 'Family'];

  const attendeeCategoryPrices = {
    Single: 100,
    Couple: 180,
    Family: 250,
  };

  const location = useLocation();

  useEffect(() => {
    const tourFromState = location.state?.selectedTour;
    if (tourFromState) {
      setSelectedTour(tourFromState);
      setDisableTourSelection(true);
    } else if (selectedTourFromParent) {
      setSelectedTour(selectedTourFromParent);
      setDisableTourSelection(true);
    }
  }, [location.state, selectedTourFromParent]);

  useEffect(() => {
    if (attendeeCategory) {
      setTotalAmount(attendeeCategoryPrices[attendeeCategory]);
    }
  }, [attendeeCategory]);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        'service_mamafricatours',
        'template_i59a0yi',
        form.current,
        'pD8uv7c2Q7s5NzZ4E'
      )
      .then(
        () => {
          setLoading(false);
          setEmailSent(true);
          setShowSuccessDialog(true);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
          });
        },
        (error) => {
          setLoading(false);
          console.error('FAILED ...', error.text);
        }
      );
  };

  const handleCloseDialog = () => {
    setShowSuccessDialog(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-4 mt-12"
    >
     
      <motion.div
        className="w-full max-w-lg bg-white shadow-md rounded-lg p-6 mt-24"
      >
       

        {!emailSent ? (
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Full Names <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  placeholder="ex: Mark Devcent"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="ex: devcent@gmail.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="contact"
                placeholder="+(250) 788 886 427"
                required
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Booking Period <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <input
                  type="date"
                  name="start_date"
                  required
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <input
                  type="date"
                  name="end_date"
                  required
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Tour Selection <span className="text-red-500">*</span>
              </label>
              <select
                name="tour_selection"
                value={selectedTour}
                onChange={(e) => setSelectedTour(e.target.value)}
                disabled={disableTourSelection}
                required
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select a Tour</option>
                {tours.map((tour) => (
                  <option key={tour} value={tour}>
                    {tour}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Attendee Category <span className="text-red-500">*</span>
              </label>
              <select
                name="attendee_category"
                value={attendeeCategory}
                onChange={(e) => setAttendeeCategory(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="">Select Attendee Category</option>
                {attendeeCategories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Total Amount <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="total_amount"
                value={totalAmount}
                readOnly
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-gradient-to-r from-[#D6ED07] to-yellow-300 hover:from-[#EDFF4F] hover:to-[#FFFF99] hover:font-normal font-bold py-2 px-4 lg:px-6 rounded-md transition duration-300 transform hover:scale-110 hover:shadow-lg shadow-[0_0_15px_#D6ED07] animate-pulse"
            >
              {loading ? 'Sending...' : 'Send Booking Request'}
            </motion.button>
          </motion.form>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="text-center">
            <h2 className="text-2xl font-bold text-green-500">Thank you!</h2>
            <p className="mt-2 text-gray-700">Your booking request has been sent successfully.</p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default Booking;
