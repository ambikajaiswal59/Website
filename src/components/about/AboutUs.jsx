import React from "react";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pb-6 md:pb-8">
        <p className="text-primary text-2xl md:text-4xl font-bold font-inter">
        About Company
        </p>
      </div>
      <p className="text-contrast text-sm md:text-lg font-inter tracking-wide my-5">
        We are a Geospatial Technology, Data and GIS Company, established in{" "}
        <span className="text-primary font-semibold">
          1993 by Dr Manosi Lahiri
        </span>
        . We create IT/GIS solutions for corporate, not-for-profit and
        government sectors. Our expertise is in multiple technologies like AI,
        GIS, RS, Mixed Reality, database, SAP, analytics and 3D visualisation.
      </p>
      <p className="text-contrast text-sm md:text-lg font-inter tracking-wide ">
        With our end-to-end full stack development capabilities and data
        resources, we provide geospatial solutions on the cloud, desktop and
        mobile for fleet management, research projects, infrastructure, skilling
        and healthcare operations. We provide map data and services to customers
        in India, USA, Europe, Japan and NZ.
      </p>
    </div>
  );
};

export default AboutUs;
