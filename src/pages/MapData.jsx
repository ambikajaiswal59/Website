import React from "react";
import MapsHeader from "../assets/DataMaps/MapsHeader.png";
import MapDataInfo from "../components/datamaps/MapDataInfo";
import DataCards from "../components/datamaps/DataCards";


const MapData = () => {

  return (
    <>
      <div className="w-full h-[17rem] md:h-[25rem] overflow-hidden">
        <img src={MapsHeader} alt="Maps Header" className="w-full h-full"/>
      </div>
      <div className="px-8 md:px-10 lg:px-20 py-5 lg:py-10 flex justify-center bg-white">
        <MapDataInfo />
      </div>
      <div className="px-8 md:px-10 lg:px-20 py-5 lg:py-20 flex justify-center bg-secondary-light">
        <DataCards />
      </div>
    </>
  );
};

export default MapData;
