import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiTypescript } from "react-icons/si";

const Skills = () => {
  const skillCategories = {
    Frontend: [
      { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
      { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
      { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-6xl" /> },
      { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400 text-6xl" /> },
    ],
    Backend: [
      { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-6xl" /> },
    ],
    Tools: [
      { name: "Git", icon: <FaGit className="text-orange-600 text-6xl" /> },
      { name: "Github", icon: <FaGithub
        className="text-gray-600 text-6xl" /> },
    ],
  };

  return (
    <div id="skills" className="py-12">
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-8 border-b-2 pb-4">My Skills</h1>
      {Object.keys(skillCategories).map((category) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">{category}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-10/12 mx-auto">
            {skillCategories[category].map((skill, index) => (
              <div
                key={index}
                className="flex flex-col text-white items-center bg-gradient-to-r from-black via-red-700 to-black shadow-md p-6 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                {skill.icon}
                <h2 className="text-lg font-semibold mt-4">{skill.name}</h2>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
