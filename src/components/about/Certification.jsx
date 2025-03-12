import React from "react";
import cmmi from '../../assets/Certification/logo-cmmi.jpg'
import gem from '../../assets/Certification/logo-gem.jpg'
import iso9000 from '../../assets/Certification/logo-iso-9000.jpg'
import iso14000 from '../../assets/Certification/logo-iso-14000.jpg'
import iso from '../../assets/Certification/logo-iso.jpg'
import msme from '../../assets/Certification/logo-msme.jpg'
import nicsi from '../../assets/Certification/logo-nicsi.jpg'

const logos = [cmmi, gem, iso9000, iso14000, iso, msme, nicsi];

const Certification = () => {
  return (
    <div className="marquee-container w-full overflow-hidden py-12">
      <div className="marquee flex  w-max animate-marquee ">
      {/* {[...logos, ...logos].map((logo, index) => ( */}
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Logo ${index}`}
            className="logo px-16  object-contain "
          />
        ))}
      </div>
    </div>
  );
};

export default Certification;