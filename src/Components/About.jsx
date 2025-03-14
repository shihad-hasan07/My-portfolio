import React from 'react';

import { motion } from "framer-motion";

const About = () => {
    return (
        <div className='-mt-2 text-5xl text-white bg-[#1e0e31]' id='about me'>


            <section className="bg-[#1e0e31] text-white py-20  px-6 sm:px-12 md:px-16 lg:px-28 ">
                <div className="max-w-5xl mx-auto">

                    {/* Section Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl font-bold text-purple-400 text-center mb-8"
                    >
                        About Me
                    </motion.h2>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-lg text-gray-300 leading-relaxed space-y-6"
                    >
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

                    {/* Education Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-10"
                    >
                        <h3 className="text-2xl font-semibold text-purple-400 mb-4">🎓 Education</h3>

                        {/* Diploma */}
                        <div className="bg-purple-900 bg-opacity-30 px-5 py-3 rounded-lg shadow-lg mb-4">
                            <p className="text-white font-semibold text-3xl lg:text-4xl xl:text-5xl">Diploma in Computer Science & Technology</p>
                            <p className="text-gray-300 text-sm lg:text-base pt-2">Rangpur Polytechnic Institute (2022 - 2025)</p>
                        </div>

                        {/* SSC */}
                        <div className="bg-purple-900 bg-opacity-30 px-5 py-3 rounded-lg shadow-lg">
                            <p className="text-white font-semibold text-3xl lg:text-4xl xl:text-[45px]">Secondary School Certificate (SSC) – Science</p>
                            <p className="text-gray-300 text-sm lg:text-base pt-2">Completed in 2021 | GPA: 5.00</p>
                        </div>
                    </motion.div>

                </div>
            </section>

        </div>
    );
};

export default About;