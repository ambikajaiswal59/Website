import React from "react";

const MissionVision = () => {
  return (
    <div className="flex flex-col items-center justify-around">
      <div className="">
        <p className="text-secondary text-lg md:text-2xl font-bold font-inter pb-5">
          OUR VISION
        </p>
        <p className="text-contrast text-sm md:text-lg font-inter tracking-wide">
          We are committed to motivate our{" "}
          <span className="text-primary font-semibold">PEOPLE</span> to
          incorporate in our business{" "}
          <span className="text-primary font-semibold">
            APPROPRIATE TECHNOLOGIES
          </span>{" "}
          and deploy{" "}
          <span className="text-primary font-semibold">
            FUNCTIONAL PROCESSES
          </span>{" "}
          to achieve{" "}
          <span className="text-primary font-semibold">
            COMPLETE CUSTOMER SATISFACTION
          </span>
        </p>
      </div>
      <div className="mt-12">
        <p className="text-secondary text-lg md:text-2xl font-bold font-inter pb-5">
          OUR MISSION
        </p>
        <p className="text-contrast text-sm md:text-lg font-inter tracking-wide">
          To drive {" "}
          <span className="text-primary font-semibold">SUSTAINABLE SOLUTIONS</span> by leveraging
          the power of {" "}
          <span className="text-primary font-semibold">
            GEOSPATIAL TECHNOLOGY
          </span>
        , enabling {" "} <span className="text-primary font-semibold">WELL- INFORMED DECISIONS</span> 
        {" "} for a better future. 
        
        </p>
      </div>
    </div>
  );
};

export default MissionVision;
