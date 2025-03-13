import React from 'react'
import AboutHeader from '../assets/About/AboutHeader.png'
import MVbg from '../assets/About/MissionVision.png'
import AboutUs from '../components/about/AboutUs'
import MissionVision from '../components/about/MissionVision'
import SuccessNumbers from '../components/about/SuccessNumbers'
import OurSuccess from '../components/about/OurSuccess'
import Certification from '../components/about/Certification'

const About = () => {
  return (
    <div>
      <div className='w-full  md:h-[25rem] overflow-hidden'>
        <img src={AboutHeader} alt="About Header" className="w-full h-full" />
      </div>
      <div className="px-8 md:px-10 lg:px-20 py-5 lg:py-10 flex justify-center bg-white">
        <AboutUs />
      </div>
      <div
        className="h-[35rem] w-full px-8 md:px-10 lg:px-20 py-5 lg:py-20 flex justify-center bg-secondary-light overflow-hidden"
        style={{
          backgroundImage: `url(${MVbg})`,
          backgroundSize: "cover", // Ensures the image covers the div
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents tiling of the image
        }}
      >
        <MissionVision />
      </div>
      <div className="px-8 md:px-10 lg:px-20 py-5 lg:py-20 flex justify-center bg-secondary">
        <SuccessNumbers />
      </div>
      <div className="px-8 md:px-10 lg:px-20 py-5 lg:py-20 flex justify-center bg-white">
        <OurSuccess />
      </div>
      <Certification />
    </div>
  )
}

export default About