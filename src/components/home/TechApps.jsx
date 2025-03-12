"use client";

import React from "react";
import { useParams } from "react-router-dom";
import { InfiniteMovingCards } from "../ui/tech-apps";
import swachImage from "../../assets/Maps/SNEP.png";
import MarketsIndia from "../../assets/Maps/MarketsIndia.JPG";
import GapAnalysisNSDC from "../../assets/Maps/gap-analysis-nsdc.png";
import VtsUsecase from "../../assets/Maps/VTS-usecase.png";
import Satellite from "../../assets/Maps/immunization-satellite.png";

const testimonials = [
  {
    id: 1,
    image: GapAnalysisNSDC,
    name: "PROBLEM SOLVING WITH GEOSPATIAL TECHNOLOGY",
    title: "The Skills India Digital Project",
  },
  {
    id: 2,
    image: VtsUsecase,
    name: "INDIA’S LARGEST COMPANY INDIANOIL USES GIS FOR FLEET MANAGEMENT",
    title: "Geospatial Technology For Safe Movement of LPG",
  },
  {
    id: 3,
    image: Satellite,
    name: "REACHING HEALTHCARE TO REMOTE AREAS",
    title: "Immunization Coverage & Vaccine Consumption In Rural India",
  },
  {
    id: 4,
    image: MarketsIndia,
    name: "GEOSPATIAL APP FOR MARKET DISCOVERY",
    title: "Markets India",
  },
  {
    id: 5,
    image: swachImage,
    name: "URBAN LOCAL BODIES USE GEO APP FOR WASTE COLLECTION",
    title: "Swachh Nagar Engineer App",
  },
];

export function TechApps() {

  const { id } = useParams(); // ✅ Get ID from URL
  const selectedProject = testimonials.find((item) => item.id === Number(id));

  return (
    <div className="h-[33rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden pt-2 md:pt-8">
      <div className="flex flex-col items-center">
        <div className="text-primary font-semibold text-lg md:text-2xl font-inter">
          Use Cases in
        </div>
        <div className="text-contrast text-2xl md:text-4xl font-semibold font-inter pb-6">
          GIS Solutions
        </div>
      </div>
      {/* <InfiniteMovingCards items={testimonials} direction="left" speed="slow" /> */}
      {selectedProject ? (
        <div className="flex flex-col items-center">
          <img src={selectedProject.image} alt={selectedProject.title} className="w-80 h-auto rounded-md shadow-md" />
          <h2 className="text-xl font-bold mt-4">{selectedProject.title}</h2>
          <p className="text-sm text-gray-600 mt-2">{selectedProject.name}</p>
        </div>
      ) : (
        <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      )}
    </div>
  );
}

