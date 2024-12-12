import React, { useState, useEffect } from 'react';

const Projects = () => {
    const slides = [
        'https://via.placeholder.com/1200x800?text=Slide+1',
        'https://via.placeholder.com/1200x800?text=Slide+2',
        'https://via.placeholder.com/1200x800?text=Slide+3',
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
            className="hero min-h-screen"
            style={{
                backgroundImage: `url(${slides[currentIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out', // Smooth transition effect
            }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
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
