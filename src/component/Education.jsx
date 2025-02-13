
import React from "react";

const Education = () => {
  const educationList = [
    {
      degree: "Bachelor of Mathematics",
      institution: "Bangabandhu Sheik Mujibur Rahaman Science and Tecnology University, Gopalganj.",
      year: "2019 - present",
      description:
        "Focused on software development, data structures, and algorithms. Graduated with honors.",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "BAF Shahee College, Jashore.",
      year: "2016 - 2018",
      description:
        "Majored in Science, with a focus on Physics, Chemistry, and Mathematics.",
    },
  ];

  return (
    <section className=" py-10" id="education">
      <div className="container  mx-auto ">
        <h2 className="text-2xl md:text-5xl  font-bold text-center mb-8 border-b-2 pb-4">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-11/12 mx-auto">
          {educationList.map((education, index) => (
          <div
          key={index}
          className="bg-green-300 p-6 shadow-md rounded-lg 
                     transition-transform duration-300 transform origin-center hover:scale-105"
        >
          <h3 className="text-xl font-semibold text-gray-800">
            {education.degree}
          </h3>
          <p className="text-gray-600">{education.institution}</p>
          <span className="text-gray-500 text-sm">{education.year}</span>
          <p className="mt-4 text-gray-700">{education.description}</p>
        </div>
        
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
