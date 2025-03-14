import React from 'react';
import ClickSpark from './fancy_design/ClickSpark';
import RotatingText from './fancy_design/RotatingText'
import Button from '@mui/material/Button';
import { FaCloudDownloadAlt, FaGithubSquare } from 'react-icons/fa';
import GlassIcons from './fancy_design/GlassIcons'
import { SiLinkedin } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';

const Hero = () => {

    const items = [
        { icon: <a href="https://www.github.com/shihad-hasan07/" target='_blank'><FaGithubSquare size={32} /></a>, color: 'indigo', label: 'Github' },
        { icon: <a href="https://www.linkedin.com/in/shihad-hasan07/" target='_blank'><SiLinkedin size={28} /></a>, color: 'blue', label: 'Linked in' },
        { icon: <a href=""><BsTwitterX size={22} /></a>, color: 'purple', label: 'X' },
    ];

    return (
        <div id='home' className='pt-[73px]'>
            <ClickSpark
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >

                <div className="flex px-44 h-[800px] justify-between bg-[url('/assets/bg1.png')] bg-[#1e0e31] bg-cover">

                    <div className='text-white pt-24'>
                        <p className='text-7xl font-helloIAm '>Hello, I am</p>
                        <p className='text-8xl font-name'>Shihad Hasan</p>
                        <p className='text-white flex items-center gap-1 mt-5 font-bold text-2xl'>
                            A passionate
                            <RotatingText texts={['Front-end developer.', 'Junior web developer.', 'Mern-stack developer.']}
                                mainClassName="font-bold ml-2 px-3 py-0.5 bg-blue-400 text-black justify-center rounded-[5px]" staggerFrom={"first"} initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1" transition={{ type: "spring", damping: 50, stiffness: 400 }} rotationInterval={3000} />
                        </p>
                        <p className='w-[700px] font-underName mt-7 tracking-wide'>Creative and detail-oriented Web Developer with a passion for front-end development. Passionate about designing and developing websites that are simple, fast, and visually appealing. Dedicated to crafting intuitive and engaging user experiences that work seamlessly on all devices while continuously learning and improving skills</p>
                        <p className='mt-7'><Button variant="outlined" endIcon={<FaCloudDownloadAlt />} sx={{ borderColor: "rgb(59, 130, 246)", color: "rgb(155, 130, 246)", transition: "all 0.4s ease-in-out", "&:hover": { backgroundColor: "rgb(59, 130, 246)", color: "white", }, padding: "8px 16px", }}>
                            Download Resume</Button>
                        </p>
                        <div className='flex justify-between mt-2'>
                            <GlassIcons items={items} className="custom-class" />
                        </div>
                    </div>

                    <div className='mt-12'>
                        <img src="/assets/userPic.jpg" alt=""
                            className='w-full h-[500px] object-cover ' />
                    </div>
                </div>

            </ClickSpark>
        </div>
    );
};

export default Hero;