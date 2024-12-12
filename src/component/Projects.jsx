import React, { useState, useEffect } from 'react';


const Projects = () => {
    const slides = [
        '../../public/m1.JPG',
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
            className="hero max-w-screen-2xl "
            style={{
                backgroundImage: `url(${slides[currentIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out', // Smooth transition effect
            }}
        >
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                        exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Projects;
