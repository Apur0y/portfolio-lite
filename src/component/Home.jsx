import React from 'react';

import Projects from './Projects';
import Banner from './Banner/Banner';
import Education from './Education';
import About from './About';

const Home = () => {
const handletop=()=>{
    "go to banner section"
}

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Education></Education>
            <button onClick={()=>handletop} className='btn sticky bottom-1'>Go Top</button>
        </div>
    );
};

export default Home;