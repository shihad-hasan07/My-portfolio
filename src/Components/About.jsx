import React from 'react';
import { motion } from "framer-motion";

const About = () => {
    const skills = [
        { title: "Web Developer", icon: "/assets/web.png" },
        { title: "React.js Developer", icon: "/assets/react.png" },
        { title: "MERN Stack Developer", icon: "/assets/mern.png" },
        { title: "Authentication specialist", icon: "/assets/authentication.png" },
    ];


    return (
        <div className='-mt-2 bg-[#1e0e31]' id='about me'>
            <section className="bg-[#1e0e31] text-white py-20  px-6 sm:px-12 md:px-16 lg:px-28 ">
                <div className="max-w-5xl mx-auto">

                    {/* Section Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-purple-400 text-center mb-8">
                        About Me
                    </motion.h2>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-lg text-gray-300 leading-relaxed space-y-6" >
                        <p>
                            I am a <b>dedicated and detail-oriented web developer </b> passionate about
                            building engaging and interactive user experiences. With a strong foundation
                            in <b>front-end development</b>, I love bringing ideas to life using modern web technologies.
                        </p>
                        <p>
                            My focus is on <b>creating clean, efficient, and visually appealing websites</b>
                            that provide seamless user experiences across all devices.
                        </p>
                    </motion.div>

                    {/* card section */}
                    <div className="grid  justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-6 mt-5">
                        {skills.map((skill, index) => (
                            <div key={index}
                                className="w-[350px] p-6 sm:w-auto bg-[#211341] rounded-2xl hover:shadow-[0px_0px_20px_rgba(0,28,100,30.25)] shadow-[#ffffff1c] flex flex-col items-center 
                                justify-center text-white transition-transform duration-200 hover:scale-[103%]">

                                <div className='w-32 h-28'>
                                    <img src={skill.icon} className='w-full h-full object-cover' alt={skill.title} />
                                </div>
                                <h3 className="text-lg font-semibold text-center">{skill.title}</h3>
                            </div>
                        ))}
                    </div>

                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10">
                        <h3 className="text-2xl font-semibold text-purple-400 mb-4">🎓 Education</h3>

                        {/* Diploma */}
                        <div className="bg-[#211341] bg-opacity-30 px-5 py-4 rounded-lg  hover:shadow-[0px_0px_20px_rgba(0,28,100,30.25)] shadow-[#ffffff1c]  mb-4
                        transition-transform duration-200 hover:scale-[100.3%]">
                            <p className="text-white font-semibold text-3xl lg:text-4xl xl:text-[40px]">Diploma in Computer Science & Technology</p>
                            <p className="text-gray-300 text-sm lg:text-base pt-2">Rangpur Polytechnic Institute (2022 - 2025)</p>
                        </div>

                        {/* SSC */}
                        <div className="bg-[#211341] bg-opacity-50 px-5 py-4 rounded-lg  hover:shadow-[0px_0px_20px_rgba(0,28,100,30.25)] shadow-[#ffffff1c] 
                        transition-transform duration-200 hover:scale-[100.3%]">
                            <p className="text-white font-semibold text-3xl lg:text-4xl xl:text-[40px]">Secondary School Certificate (SSC) – Science</p>
                            <p className="text-gray-300 text-sm lg:text-base pt-2">Completed in 2021 | GPA: 5.00</p>
                        </div>
                    </motion.div>

                </div>
            </section>

        </div>
    );
};

export default About;