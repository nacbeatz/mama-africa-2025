import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Gukoresha icon

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Function yo gutuma window iscrollinga igaruka hejuru
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Gukoresha useEffect kugira ngo turebe igihe user ascrollinga
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Tugasiba event listener mugihe component ishatse guca
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-white text-green-600 p-3 rounded-full shadow-lg hover:bg-green-800 transition duration-300"
        >
          {/* Shyiramo icon ya arrow up */}
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
