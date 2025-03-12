import React from 'react'
import Fleet from '../assets/About/fleet.png'
import Globe from '../assets/About/canva.png';
import GIS from '../assets/About/gisai.png';
import Aws from '../assets/About/logos/aws.png';
import Birac from '../assets/About/logos/birac.jpg';
import Drdo from '../assets/About/logos/drdo.jpg';
import Esri from '../assets/About/logos/esri.jpg';
import Harvard from '../assets/About/logos/harvard.png';
import Iocl from '../assets/About/logos/iocl.jpg';
import Nsdc from '../assets/About/logos/nsdc.jpg';
import Isb from '../assets/About/logos/logo-isb.jpg';
import Who from '../assets/About/logos/who.jpg';
import Jio from '../assets/About/logos/jio.jpg';
import Microsoft from '../assets/About/logos/microsoft.png';
import Mit from '../assets/About/logos/mit.jpg';
import Google from '../assets/About/logos/google.jpg';
import Nature from '../assets/About/logos/theNature.png';
import Cris from '../assets/About/logos/crisTag.png'

const About = () => {
  return (
    <>
      <div className="marquee-container py-4 mt-4 w-full overflow-hidden">
        <div className="marquee flex animate-marquee">
          {[Harvard, Aws, Birac, Drdo, Esri, Iocl, Nsdc, Isb, Who, Jio, Microsoft, Mit, Google, Nature, Cris].map((logo, index) => (
            <img key={index} src={logo} alt={`Logo ${index}`} className="logo px-6" />
          ))}
        </div>
      </div>
      <div className='py-4 flex items-center'>

        <div className='flex flex-col-reverse md:flex-row justify-center items-center w-[100%]'>
          <img src={Globe} alt="GIS Globe" className="h-[12rem] md:h-[18rem] lg:h-[25rem] rounded-xl object-covers" />
          <div className="px-8 py-2 md:px-10 md:py-4 lg:px-20 lg:py-8">
            <p className='text-lg md:text-4xl font-bold text-[#0C315B] mb-2'><span className="text-[#b20000]">ABOUT</span> US</p>
            <p className='text-sm md:text-lg text-justify font-parkinsans'>ML Infomap develops solutions for corporate and government sectors in ESRI ArcGIS and MERN stack. It creates high-quality vector maps, ensuring customers benefit from accurate geocoding, geofencing, linear referencing and routing. ML Infomap focuses on solutions for several verticals like fleet management, digital transformation, infrastructure, defence, agriculture, skilling and healthcare.</p>
          </div>
        </div>

      </div>
      <div className='py-4 flex items-center bg-[#fcebeb]'>

        <div className='flex flex-col md:flex-row justify-center items-center'>
          <div className="px-8 py-2 md:px-10 md:py-4 lg:px-20 lg:py-8">
            <p className='text-lg md:text-4xl font-bold text-[#0C315B] mb-2'><span className="text-[#b20000]">WHAT WE</span> ACHIEVE</p>
            <p className='text-sm md:text-lg text-justify font-parkinsans'>ML Infomap develops solutions for corporate and government sectors in ESRI ArcGIS and MERN stack. It creates high-quality vector maps, ensuring customers benefit from accurate geocoding, geofencing, linear referencing and routing. ML Infomap focuses on solutions for several verticals like fleet management, digital transformation, infrastructure, defence, agriculture, skilling and healthcare.</p>
          </div>
          <img src={Fleet} alt="Fleet" className="h-[10rem] md:h-[15rem] lg:h-[20rem] px-20 rounded-xl object-covers" />
        </div>
        
      </div>
      <div className='py-4 flex items-center'>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center w-[100%]'>
          <img src={GIS} alt="GIS AI" className="h-[12rem] md:h-[18rem] lg:h-[25rem] px-8 lg:px-20 rounded-xl object-covers" />
          <div className="px-8 py-2 md:px-10 md:py-4 lg:px-20 lg:py-8">
            <p className='text-lg md:text-4xl font-bold text-[#0C315B] mb-2'><span className="text-[#b20000]">WHAT WE</span> USE</p>
            <p className='text-sm md:text-lg text-justify font-parkinsans'>Recent projects undertaken by ML Infomap have used precision location and cloud-based GIS to develop enterprise solutions for transport infrastructure and fleet operations across India. Ongoing projects rely on AI:ML, modelling and prediction for a wide range of purposes, including terrain analysis and improving the skilling environment.</p>
          </div>
        </div>
      </div>
      <div className='py-8 px-8 md:px-10 lg:px-20 bg-gray-100'>
            <p className='text-xs md:text-sm text-justify font-parkinsans'>ML Infomap has GIS solutions for Command Centres, ensuring managers are aware of ground conditions virtually in real time, and enabling them to quickly respond to field situations. It offers digital mapping and GIS services to customers in India, USA, Europe, Japan and NZ.</p>
            <p className='text-xs md:text-sm text-justify font-parkinsans font-semibold pt-2'>The Company is CMMI 5, ISO 9001:2015, ISO 14001:2015 and ISO 27001:2013 certified. Its partners are Microsoft, AWS, ESRI and NSDC.</p>
      </div>
    </>
  )
}

export default About

