import React from "react";
import { Skeleton } from "@mui/material";
import { TopMaskElement } from "../components/home/TopMaskElement";
import { TabScroll } from "../components/home/TabScroll";
import About from "../components/home/About";
import { TechApps } from "../components/home/TechApps";
import { DataMaps } from "../components/home/DataMaps";
import Clients from "../components/home/Clients";

const Home = () => {
  return (
    <div>
      <TopMaskElement />
      <TabScroll />
      <div className="px-8 md:px-10 lg:px-20 py-5 lg:py-10 flex justify-center bg-primary-bg">
        <About />
      </div>
      <TechApps />
      <div className="mt-6 flex justify-center bg-primary-bg">
        <DataMaps />
      </div>
      <Clients />
    </div>
  );
};

export default Home;
