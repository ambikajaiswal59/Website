import React from "react";
import "./About.css";
import AboutUs from "../../assets/Home/HomeAboutUs.png";
// import India from '../../assets/IndiaMap.jpg';
import India from "../../assets/indiaMap2.png";
import { Button } from "@mui/material";
import { DoubleArrowRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0); // Page ko top par scroll karega jab ye component load hoga
  }, []);
  const navigate = useNavigate(); // Hook for redirection

  const handleRedirect = () => {
    navigate("/MLWebsite/about"); // Redirect to AnotherComponent
  };
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-4 py-4">
          <img src={AboutUs} alt="About ML Infomap" />
        </div>
        <div className="md:w-1/2 md:pl-4 flex flex-col justify-center">
          <p className="text-primary font-semibold text-lg md:text-2xl font-inter mt-5">
            About Us
          </p>
          <p className="text-contrast text-2xl md:text-4xl font-semibold font-inter my-5">
            We Deliver Quality IT Services and Data Across the World
          </p>
          <p className="text-contrast text-sm md:text-lg font-inter tracking-wide">
            ML Infomap is an Information Technology company specializing in{" "}
            <span className="text-primary font-semibold">
              GIS solutions, maps, data, and apps
            </span>
            . It designs, develops, deploys, and supports spatial solutions,
            using multiple technologies like Cloud and Mobile, AI Machine
            Learning, remotely sensed images, spatial analytics, IoT
            integration,and 3D visualization. It was established in{" "}
            <span className="text-primary font-semibold">1993</span> by GIS
            expert Dr. Manosi Lahiri.
          </p>
          <div className="flex flex-row-reverse mt-5">
            <Button
              variant="contained"
              color="secondary"
              size="small"
              className="hover:bg-white hover:text-primary transition"
              endIcon={<DoubleArrowRounded />}
              onClick={handleRedirect}
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
