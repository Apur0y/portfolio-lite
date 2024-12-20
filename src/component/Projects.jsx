import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
  const slides = [
    "../../public/m5.png",
    "../../public/m6.png",
    "../../public/m7.png",
    "../../public/m8.png",
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
    <div>
      <h1 className="text-2xl text-center my-7 border-b-2 pb-6 md:text-5xl font-semibold">
        Top Projects
      </h1>
      <div className="relative mx-auto w-10/12 h-[600px] rounded-lg shadow-lg overflow-hidden group">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm group-hover:brightness-75"
          style={{
            backgroundImage: `url(${slides[currentIndex]})`,
          }}
        ></div>

        {/* Buttons */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex space-x-4">
            <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition-all">
              <a
                href="https://aquamarine-custard-8f7ba5.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>{" "}
              <FaArrowRight className="ml-2" />
            </button>
            <button className="px-4 py-2 bg-white rounded-md shadow hover:bg-gray-300 transition-all">
              Details
            </button>
          </div>
        </div>

        {/* Card Content */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
          <h1 className="text-4xl font-bold mb-2">Project Title</h1>
          <p className="text-sm">
            This is a brief description of the project. Click "Details" to learn
            more!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
