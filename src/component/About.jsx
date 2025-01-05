import React from 'react';

const About = () => {
    return (
        <div className=" w-10/12 mx-auto shadow-lg p-6 md:p-12 rounded-lg">
            <h2 className="text-3xl font-bold mb-4 text-center border-b-2">About Me</h2>
            <p className=" text-lg leading-7 mb-4">
                Hi, I’m <span className="font-bold text-blue-600">Apu Roy</span>, a passionate web developer. My journey into web development is driven by a love for creating seamless and engaging user experiences. 
            </p>
            <p className=" text-lg leading-7 mb-4">
                I specialize in building modern web applications using technologies like React, Tailwind CSS, and TypeScript. Whether it's designing a responsive webpage, implementing complex features, or managing dynamic data, I enjoy turning ideas into reality. My recent projects include a cricket team management app, a gadget-buying platform, and data visualizations with Recharts.
            </p>
          
            <p className=" text-lg leading-7 mb-4">
                When I’m not coding or editing, you can find me exploring new technologies, contributing to open-source projects, or diving into my academic interests, like my ongoing thesis on finite element methods in mathematics.
            </p>
            <p className=" text-lg leading-7">
                Let’s collaborate to bring your ideas to life!
            </p>
        </div>
    );
};

export default About;
