import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const Projects = () => {
  const slides = [
    "../../public/m5.png",
    "../../public/m6.png",
    "../../public/m7.png",
    "../../public/m8.png",
  ];

  const volSlider =[
    "../../public/vol1.jpg",
    "../../public/vol2.jpg",
    "../../public/vol3.jpg",
  "../../public/vol4.jpg"
  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  // Modal toggle handler
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div id="my-projects" className="">
      <h1 className="text-2xl text-center my-7 border-b-2 pb-6 md:text-5xl font-semibold">
        Top Projects
      </h1>
      <h1 className="w-10/12 mx-auto text-4xl font-extrabold mb-4">1. Chill Gamer</h1>
      <div className="relative mx-auto w-10/12 h-[500px] rounded-lg shadow-lg overflow-hidden group mb-20">
      
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm group-hover:brightness-75"
          style={{
            backgroundImage: `url(${slides[currentIndex]})`,
          }}
        ></div>

        {/* Buttons */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col ">
        <div className="text-white text-center my-5">

        <h1 className="text-4xl font-bold mb-2">Game Review</h1>
          <p className="text-sm">
           You can checkout different types of games. Can see the review of others and option for add review.
          </p>
        </div>
            <div className="flex flex-row gap-4 mx-auto">
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
            <button
              className="px-4 py-2 bg-white rounded-md shadow hover:bg-gray-300 transition-all"
              onClick={toggleModal}
            >
              Details
            </button>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
         
        </div>
      </div>
 
      <h1 className="w-10/12 mx-auto text-4xl font-extrabold mb-4">2. Volunteer Port</h1>

      <div className="relative mx-auto w-10/12 h-[500px] rounded-lg shadow-lg overflow-hidden group">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm group-hover:brightness-75"
          style={{
            backgroundImage: `url(${volSlider[currentIndex]})`,
          }}
        ></div>

        {/* Buttons */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="flex flex-col ">
        <div className="text-white text-center my-5">

        <h1 className="text-4xl font-bold mb-2 text-pink-400">Volunteer Port</h1>
          <p className="text-sm">
           Be a Volunteer or join for Volunteer. Make the world Happy.
          </p>
        </div>
            <div className="flex flex-row gap-4 mx-auto">
            <button className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition-all">
              <a
                href="https://volunteer-port.web.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </a>{" "}
              <FaArrowRight className="ml-2" />
            </button>
            <button
              className="px-4 py-2 bg-white rounded-md shadow hover:bg-gray-300 transition-all"
              onClick={toggleModal}
            >
              Details
            </button>
            </div>
          </div>
        </div>

        {/* Card Content */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-6 text-white">
         
        </div>
      </div>



      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-10/12 max-w-md">
            <h2 className="text-2xl font-bold mb-4">Project Details</h2>
            <p className="mb-4">
              Here are more details about this project. You can include
              technologies used, challenges faced, or any additional
              information.
            </p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 transition-all"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
