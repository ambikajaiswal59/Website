import React from "react";

const MapDataInfo = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center pb-6 md:pb-8">
        <p className="text-primary text-2xl md:text-4xl font-bold font-inter">
          Data & Maps
        </p>
      </div>

      <div className="text-contrast text-sm md:text-lg font-inter tracking-wide">
        <p>
          Our map data is curated for optimal processing speed and response time,
          spatial analytics and 3D visualisation. The end user benefits from
          multiple data types and resolutions. While researchers and office
          managers can get information across vast areas, the field operations
          staff see local details from granular data. All this is from one common
          source of integrated and routinely updated information. Using GIS
          mapping tools for creating thematic, isoline or heat maps is equally
          rewarding for spatial analytics and visual interpretation.
        </p>
        <p className="py-4">
          Built on stringent standards and versioned over 31 years, our data sets
          and digital India maps are the most reliable and accurate. Temporal
          spatial data maintained by the company supports historical studies. Map
          data are documented in metadata.
        </p>
        <p>
          Our map data sets are diligently created by our mapping staff, skilled
          in separating good from bad data. Our expert team of technicians
          collate, aggregate and integrate data from multiple primary and
          secondary sources, historical records, maps, high resolution satellite
          images and create seamless, accurately aligned and layered countrywide
          vector maps of India. The high density of locations points for hundreds
          of data items relating to demography, agriculture, climate, terrain
          etc., enables effective pattern recognition.
        </p>
        <p className="py-4">
          Current affiliates of{" "}
          <span className="text-primary font-semibold">
            ISB, MIT, Harvard, Yale
          </span>{" "}
          and{" "}
          <span className="text-primary font-semibold">other universities</span>{" "}
          will find data supplied by ML Infomap are held in their libraries.
          Contact ML Infomap if you have other requirements.
        </p>
      </div>
    </div>
  );
};

export default MapDataInfo;
