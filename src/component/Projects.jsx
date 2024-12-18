

import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
const slides = [
    'https://prnt.sc/YDVWcawc4-zYhttps://prnt.sc/YDVWcawc4-zY',
    '../../public/m2.JPG',
    '../../public/m3.JPG',
    '../../public/m4.JPG',
   
];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  return (
    <div
      className="relative mx-auto w-10/12 h-[400px] rounded-lg shadow-lg overflow-hidden"
      style={{
        backgroundImage: `url(${slides[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Buttons */}
      <div className="absolute top-4 right-4 flex space-x-4">
        <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition-all">
          Live Preview <FaArrowRight className="ml-2" />
        </button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md shadow hover:bg-gray-900 transition-all">
          Details
        </button>
      </div>

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
        <h1 className="text-4xl font-bold mb-2">Project Title</h1>
        <p className="text-sm">
          This is a brief description of the project. Click "Details" to learn more!
        </p>
      </div>
    </div>
  );
};

export default Projects;
