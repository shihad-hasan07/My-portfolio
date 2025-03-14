import React from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Education from '../Components/Education';
import Skills from '../Components/Skills';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
        </div>
    );
};

export default Home;