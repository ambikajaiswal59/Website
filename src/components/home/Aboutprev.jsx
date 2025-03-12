import React from 'react'
import './About.css'
// import India from '../../assets/IndiaMap.jpg';
import India from '../../assets/indiaMap2.png';
import { Button } from '@mui/material';
import { ReadMoreRounded } from '@mui/icons-material';
import { div } from 'framer-motion/client';

const About = () => {
    return (
        <div className="w-full max-w-7xl h-auto md:h-[30rem] flex flex-col md:flex-row bg-white rounded-[2rem] md:rounded-[5rem] border-[#b20000] border-[1px] overflow-hidden relative"
            style={{ boxShadow: "0px 1px 10px rgba(0,0,0,1)" }}>
            <div className='about flex-col md:flex-row'>

                {/* Left Section: Image */}
                <div className="relative h-60 md:h-full w-full md:w-1/2 bg-gray-500 rounded-t-[2rem] md:rounded-l-[5rem] md:rounded-tr-none overflow-hidden">
                    {/* <img src={India} alt="India map" className="absolute top-[-40%] md:top-[1%] lg:top-[-25%] left-0 w-full h-auto object-cover" /> */}
                    <img src={India} alt="India map" className="absolute left-0 w-full h-full object-cover" />
                </div>

                {/* Right Section: Text Content */}
                <div className="h-auto md:h-full w-full md:w-1/2 bg-white rounded-b-[2rem] md:rounded-r-[5rem] p-5 md:p-10 flex flex-col justify-center overflow-hidden relative">
                    <div className="card relative">
                        <div className="text-xl lg:text-3xl font-bold text-gray-600">About</div>
                        <div className="text-3xl lg:text-5xl font-bold text-[#0C315B]"><span className='text-[#b20000]'>ML</span> Infomap</div>
                        <div className="text-sm lg:text-lg leading-normal md:leading-relaxed font-parkinsans text-justify pt-2 md:pt-4 xl:pt-6">
                            ML Infomap is an Information Technology company specializing in GIS solutions, maps, data, and apps.
                            It designs, develops, deploys, and supports spatial solutions, using multiple technologies like
                            Cloud and Mobile, AI Machine Learning, remotely sensed images, spatial analytics, IoT integration,
                            and 3D visualization. It was established in 1993 by GIS expert Dr. Manosi Lahiri.
                        </div>
                        <div className="pt-2 md:pt-4 xl:pt-6">
                            <Button
                                className="hover:bg-gray-300 hover:text-[#B20000] transition-all"
                                variant="contained"
                                sx={{ bgcolor: '#0C315B' }}
                                endIcon={<ReadMoreRounded />}
                            >
                                Read More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default About