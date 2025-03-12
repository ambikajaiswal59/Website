import React from "react";

const TechInfo = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pb-6 md:pb-8">
        <p className="text-primary text-2xl md:text-4xl font-bold font-inter">
          Tech & Apps
        </p>
      </div>
      <div className="text-contrast text-sm md:text-lg font-inter tracking-wide">
        <p>
          ML Infomap is a one-stop-shop for developing GIS solutions for informed
          decision making and ease of operations. With over three decades of
          experience in the geospatial sector, we are able to provide
          technological expertise and unmatched support to clients in their
          digital transformation experience in planning, implementation and
          operational functions.
        </p>
        <p className="py-4">
          We develop real-time location-based apps for countrywide asset
          management and field operations. We have powerful enterprise solutions
          for road and railway transportation, management of the skills
          development ecosystem, health environment, digital mapping and imagery
          data processing.
        </p>
        <p>
          Our solutions offer complete automated work flows to ensure routine work
          is conducted smoothly. All routine functions like generation of orders,
          approvals, compliances, reports, alerts and contractual billing are all
          possible from our unified GIS platform.
        </p>
        <div className="py-4">
          <p>We design and develop :-</p>
          <ul className="list-disc pl-5">
            <li>GIS solutions on ESRI technology and Open Source.</li>
            <li>Apps on Cloud, Desktop & Mobile platforms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechInfo;
