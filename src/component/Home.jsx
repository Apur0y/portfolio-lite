import React from 'react';

import Projects from './Projects';
import Banner from './Banner/Banner';
import Education from './Education';
import About from './About';
import Skills from './Skills';
import ContactInfo from './Contact';
import Footer from './Footer';
import { FaAngleDoubleUp } from 'react-icons/fa';

const Home = () => {
const handleTop=()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth", // This gives a smooth scrolling effect
      });
}

    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Education></Education>
            <Projects></Projects>
           <ContactInfo></ContactInfo>
           <button onClick={handleTop}  className="btn fixed bottom-4 right-4 p-3 rounded-full  text-white shadow-lg hover:bg-gray-700"
           ><FaAngleDoubleUp />
           </button>
           <Footer></Footer>
            
        </div>
    );
};

export default Home;