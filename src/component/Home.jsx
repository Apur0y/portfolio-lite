import React from 'react';

import Projects from './Projects';
import Banner from './Banner/Banner';
import Education from './Education';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Projects></Projects>
            <Education></Education>
        </div>
    );
};

export default Home;