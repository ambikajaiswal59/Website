import React from "react";

const OurSuccess = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        {/* <p className='text-primary font-semibold text-lg md:text-2xl font-inter'>About Us</p> */}
        <p className="text-contrast text-2xl md:text-4xl font-semibold font-inter">
          Our <span className="text-primary">Success</span>
        </p>
      </div>
      <p className="text-contrast text-sm md:text-lg font-inter tracking-wide mt-5">
        ML Infomap develops solutions for corporate and government sectors in
        ESRI ArcGIS and MERN stack. It creates high-quality vector maps,
        ensuring customers benefit from accurate geocoding, geofencing, linear
        referencing and routing. ML Infomap focuses on solutions for several
        verticals like{" "}
        <span className="font-semibold">
          fleet management, digital transformation, infrastructure, defence,
          agriculture, skilling and healthcare.
        </span>
      </p>
    </div>
  );
};

export default OurSuccess;
