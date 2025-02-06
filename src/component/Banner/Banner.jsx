import React, { useContext } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import "./banner.css";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Banner = () => {
  const { light } = useContext(AuthContext);

  const lightClass = light
    ? "bg-gray-800 text-white"
    : "bg-teal-800 text-black";

  return (
    <div
      className={`relative ${lightClass} my-12 mx-auto flex  justify-between items-center w-11/12   p-8 rounded-lg overflow-hidden`}
    >
      {/* Dotted background */}
          {/* section-three */}
          <section className="flex flex-col space-y-6 bg-">
        {[
          {
            icon: <FaGithub />,
            name: "GitHub",
            link: "https://github.com/Apur0y",
          },
          {
            icon: <FaLinkedin />,
            name: "LinkedIn",
            link: "https://linkedin.com",
          },
          {
            icon: <FaFacebook />,
            name: "Facebook",
            link: "https://facebook.com",
          },
          {
            icon: <FaEnvelope />,
            name: "Email",
            link: "mailto:apuroy2785@gmail.com",
          },
        ].map((social, index) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative group flex text-white items-center justify-center text-4xl transition-transform duration-300 transform hover:scale-110"
          >
            {/* Hover Bar */}
            <span className="absolute left-full bottom-0 rounded-lg h-10 w-0 bg-purple-500 text-black text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:left-[calc(3rem)] transition-all duration-300">
              {social.name}
            </span>
            {social.icon}
          </a>
        ))}
      </section>


      {/* section-one */}
      <div className="flex flex-col-reverse lg:gap-24 md:flex-row ">
        
        {/* section-two */}
        <section className="text-center text-gray-100">
          <h1 className="text-2xl font-semibold lg:text-8xl">
          I am <br />
            <span className="md:text-8xl text-purple-600">Apu Roy</span>
            <br />
            <span className="text-lg md:text-7xl  ">Frontend Web Developer</span>
          </h1>
        </section>
        <section className="flex flex-col items-center">
          <img
            src="https://i.ibb.co/phx8r1z/profile2.jpg"
            alt="Profile"
            className="md:h-72 md:w-72 h-64 w-64 rounded-full border-4 border-gray-700 shadow-lg "
          />
        </section>

      </div>

  
    </div>
  );
};

export default Banner;
