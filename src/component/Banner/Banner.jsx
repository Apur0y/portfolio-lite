import React, { useContext } from "react";
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa";
import './banner.css';
import { AuthContext } from "../AuthProvider/AuthProvider";

const Banner = () => {

  const {light} = useContext(AuthContext)

  const lightClass = light ?  "bg-gray-800 text-white" : "bg-gray-300 text-black" 

  return (
    <div className={`relative ${lightClass} my-12 mx-auto flex justify-between items-center w-11/12   p-8 rounded-lg overflow-hidden`}>
      {/* Dotted background */}
      <div className="absolute inset-0 -z-10 bg-dotted"></div>

      {/* section-one */}
      <section className="flex flex-col items-center">
        <img
          src="https://i.ibb.co/phx8r1z/profile2.jpg"
          alt="Profile"
          className="h-72 w-72 rounded-full border-4 border-gray-700 shadow-lg"
        />
      </section>

      {/* section-two */}
      <section className="text-center">
        <h1 className="text-2xl font-semibold lg:text-8xl">
          I am <br />
          <span className="text-8xl text-purple-400">Apu Roy</span>
          <br />
          <span className="text-lg lg:text-4xl ">MERN-Stack Developer</span>
        </h1>
      </section>

      {/* section-three */}
      <section className="flex flex-col space-y-6">
        {[
          { icon: <FaGithub />, name: "GitHub", link: "https://github.com" },
          { icon: <FaLinkedin />, name: "LinkedIn", link: "https://linkedin.com" },
          { icon: <FaFacebook />, name: "Facebook", link: "https://facebook.com" },
          { icon: <FaEnvelope />, name: "Email", link: "mailto:apu@example.com" },
        ].map((social, index) => (
          <a
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="relative group flex items-center justify-center text-4xl transition-transform duration-300 transform hover:scale-110"
          >
            {/* Hover Bar */}
            <span className="absolute left-full bottom-0 rounded-lg h-10 w-0 bg-purple-500 text-black text-sm flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:w-40 group-hover:left-[calc(-10rem)] transition-all duration-300">
              {social.name}
            </span>
            {social.icon}
          </a>
        ))}
      </section>
    </div>
  );
};

export default Banner;
