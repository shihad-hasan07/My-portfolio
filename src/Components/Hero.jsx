import React from 'react';
import ClickSpark from './fancy_design/ClickSpark';
import RotatingText from './fancy_design/RotatingText'
import Button from '@mui/material/Button';
import { FaCloudDownloadAlt, FaGithubSquare } from 'react-icons/fa';
import GlassIcons from './fancy_design/GlassIcons'
import { SiLinkedin } from 'react-icons/si';
import { BsTwitterX } from 'react-icons/bs';
import { MdOutlineEmail } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {


    // google drive link of my resume
    const handleDownload = () => {
        const link = document.createElement("a");
        // link.href = "https://drive.google.com/uc?export=download&id= [........]";   eikhane [..] er jaygay drive er share kore link tar id ta hbe
        link.href = "https://drive.google.com/uc?export=download&id=1kEW5-3MK7JJMNmb0ezJQ5Klzf_6hlEs0";
        link.download = "Resume.pdf";
        link.click();
        // toast.success("Downloading...", { autoClose: 2000 });
        setTimeout(() => {
            toast.success("Downloading...", { autoClose: 800 });
        }, 1500);
    };

    const items = [
        { icon: <a href="https://www.github.com/shihad-hasan07/" target='_blank'><FaGithubSquare size={32} className='rounded-3xl' /></a>, color: 'indigo', label: 'Github' },
        { icon: <a href="https://www.linkedin.com/in/shihad-hasan07/" target='_blank'><SiLinkedin size={29} className='rounded-md' /></a>, color: 'blue', label: 'Linked in' },
        // { icon: <a href=""><BsTwitterX size={22} /></a>, color: 'purple', label: 'X' },
        { icon: <a href="https://mail.google.com/mail/?view=cm&to=shihadhasan607255@gmail.com" target='_blank'><MdOutlineEmail size={27} /></a>, color: 'purple', label: 'Email' },
    ];

    return (
        // <div id='home' className='pt-[10px] md:pt-[15px] lg:pt-[40px] xl:pt-[50px] bg-[#160d1e]'>
        <div id='home' className=' bg-[#160d1]'>
            <ClickSpark
                sparkColor='#fff'
                sparkSize={10}
                sparkRadius={15}
                sparkCount={8}
                duration={400}
            >

                <div className="flex gap-6 flex-col xl:flex-row px-6 md:px-16 lg:px-44 pb-5 2xl:pb-14
                    justify-between bg-cover  2xl:bg-no-repeat 2xl:bg-center bg-[url('/assets/bg1.png')] h-full bg-[#1e0e31]">

                    <div className='text-white pt-24 '>
                        <p className='text-5xl md:text-6xl lg:text-7xl font-helloIAm '>Hello, I am</p>
                        <p className='text-5xl md:text-6xl lg:text-7xl  font-name'>Shihad Hasan</p>
                        <p className='lg:text-2xl text-white flex items-center gap-1 mt-5 font-bold'>
                            A passionate
                            <RotatingText texts={['Front-end developer.', 'Junior web developer.', 'Mern-stack developer.']}
                                mainClassName="font-bold ml-2 px-3 py-0.5 bg-blue-400 text-black justify-center rounded-[5px]" staggerFrom={"first"} initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} staggerDuration={0.025} splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1" transition={{ type: "spring", damping: 50, stiffness: 400 }} rotationInterval={3000} />
                        </p>
                        <p className='lg:w-[700px] font-underName mt-7 tracking-wide'>
                            Creative Front-End Developer passionate about building fast, simple, and visually appealing websites. Focused on seamless user experiences and continuous learning.</p>
                        <p className='mt-7'>
                            {/* <a href="https://drive.google.com/uc?export=view&id=11vbQ7_zn_uR5ym66XHzurkXrc0__lMGZ"> </a> */}
                            <Button onClick={handleDownload} variant="outlined" endIcon={<FaCloudDownloadAlt />} sx={{ borderColor: "rgb(59, 130, 246)", color: "rgb(155, 130, 246)", transition: "all 0.4s ease-in-out", "&:hover": { backgroundColor: "rgb(59, 130, 246)", color: "white", }, padding: "8px 16px", }}>
                                Download Resume</Button>
                        </p>

                        <div className='flex  justify-between mt-2'>
                            <GlassIcons items={items} className="custom-class" />
                        </div>
                    </div>

                    <div className='mt-2 lg:mt-18 home-img flex justify-center items-center'>
                        {/* w-[90vw] sm:w-[70vw] md:w-[55vw] lg:w-[55vw] xl:w-[27vw] 2xl:w-[30vw]
                        h-[90vw] sm:h-[70vw] md:h-[55vw] lg:h-[55vw] xl:h-[27vw] 2xl:h-[30vw] */}
                        <div className='img-box  
                        w-[90vw] sm:w-[70vw] md:w-[55vw] lg:w-[55vw] xl:w-[27vw] 2xl:w-[30vw]
                        h-[90vw] sm:h-[70vw] md:h-[55vw] lg:h-[55vw] xl:h-[27vw] 2xl:h-[30vw]
                        '>
                            <div className='img-item '>
                                {/* <img src="/assets/Adobe Express - file.png" alt="" */}
                                <img src="/assets/Adobe Express - file.png" alt=""
                                    className='' />
                            </div>
                        </div>
                    </div>
                </div>

            </ClickSpark>
        </div>
    );
};

export default Hero;