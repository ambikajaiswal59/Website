import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import AppsBg from "../../assets/TechApps/Appsbg.png";
import nsdcPresident from "../../assets/TechApps/shrestha-president-india-nsdc.jpeg";
import IOCL from "../../assets/TechApps/IOCL.png";
import Immunization from "../../assets/TechApps/Immunization.PNG";
import MarketsIndia from "../../assets/TechApps/MarketsIndia.JPG";
import SNE1 from "../../assets/TechApps/SNE-1.png";
import SNE2 from "../../assets/TechApps/SNE-2.png";
import SNE3 from "../../assets/TechApps/SNE-3.png";
import MSSDS from "../../assets/TechApps/MSSDS.JPG";
// import gapAnalysis from "../../assets/TechApps/gap-analysis-nsdc.png";
// import mapNsdc from "../../assets/TechApps/map-nsdc.jpg";
import { Button } from "@mui/material";

const AppSection = () => {
  const { id } = useParams(); // Get ID from URL
  const sectionRefs = useRef({}); // Store references of all sections

  useEffect(() => {
    if (id && sectionRefs.current[id]) {
      sectionRefs.current[id].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [id]);
  
  return (
    <div>
      <div className="px-8 md:px-10 lg:px-20 pt-5 lg:pt-20 flex flex-col justify-center items-center">
        <p className="text-primary font-semibold text-lg md:text-2xl font-inter">
          Our Services
        </p>
        <p className="text-contrast text-2xl md:text-4xl font-semibold font-inter text-center">
          Geospatial Solutions for Real-World Challenges
        </p>
      </div>
      <div
        className="px-8 md:px-10 lg:px-20 py-8 lg:py-16 mt-[5rem] flex flex-col gap-8 md:gap-12"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(241, 247, 255, 0.7)), url(${AppsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* NSDC */}
        <div id="1" ref={(el) => (sectionRefs.current["1"] = el)} className="w-full rounded-xl bg-primary-light shadow-custom p-6 md:py-8 md:px-12">
          <p className="text-primary text-base sm:text-lg md:text-2xl font-semibold font-inter pb-4 md:pb-6">
            The Skill India Digital Project
          </p>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-start md:pr-6">
              <img
                src={nsdcPresident}
                alt="NSDC with President"
                className="rounded-sm border-[0.1rem] border-contrast"
              />
              <div className="flex flex-row-reverse pt-4 md:pt-6">
                <a
                  href="https://www.skillindiadigital.gov.in/skill-india-map"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="contained" size="small" color="secondary">
                    Visit Website
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-2/3 flex items-start md:pl-6 pb-4 md:pb-0">
              <p className="text-contrast text-xs sm:text-sm md:text-lg font-inter">
                ML Infomap used geospatial technology in the Skill India Digital
                project to accurately map the skills ecosystem for the{" "}
                <span className="text-primary font-medium">
                  National Skill Development Corporation
                </span>
                . This technology provided real-time updates on skill centers,
                training programs, and industry collaborations, ensuring the
                platform stayed current. It empowered stakeholders with insights
                for better planning and decision-making, helping improve access
                to quality skill development. The use of GIS also boosted
                skilled talent hiring, supported lifelong learning, and advanced
                career growth opportunities. Hon’ble President of India,{" "}
                <span className="text-primary font-medium">
                  Smt. Draupadi Murmu
                </span>
                , attended the inauguration of Skills India Digital where
                <span className="text-primary font-medium">
                  Shreshtha Gupta
                </span>
                , EVP NSDC, explained salient features of mapping the skills
                ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* IOCL */}
        <div id="2" ref={(el) => (sectionRefs.current["2"] = el)} className="w-full rounded-xl bg-secondary-light shadow-custom p-6 md:py-8 md:px-12">
          <p className="text-secondary text-base sm:text-lg md:text-2xl font-semibold font-inter pb-4 md:pb-6">
            Geospatial Technology For Safe Movement of LPG
          </p>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-start md:pr-6">
              <img
                src={IOCL}
                alt="IOCL"
                className="rounded-sm border-[0.1rem] border-contrast"
              />
              <div className="flex flex-row-reverse pt-4 md:pt-6">
                {/* <Button variant="contained" size="small" color="primary">
                  Visit Website
                </Button> */}
              </div>
            </div>
            <div className="md:w-2/3 flex items-start md:pl-6 pb-4 md:pb-0">
              <p className="text-contrast text-xs sm:text-sm md:text-lg font-inter">
                Implemented in Tamil Nadu and Puducherry, the model is now
                replicated in{" "}
                <span className="text-secondary font-medium">
                  Bihar, Jharkhand, Odisha, and West Bengal
                </span>
                . All components, including GPS hardware, GIS software,
                navigation ready intelligent digital maps, voice triggers,
                telecommunication, geo-database, spatial analytics, SAP
                interface and text messaging, require working in sync in the
                Data Centre and Cloud. Reliance on the Internet for near real
                time data transfers also implies the availability of a good
                telecom service network across the area.{" "}
                <span className="text-secondary font-medium">IndianOil</span>{" "}
                can monitor the entire fleet of trucks online. Transporters now
                view this as compliance more than surveillance. Drivers
                understand the certainty of being identified if deviating from
                approved routes and stopping on the way to deliver LPG.
              </p>
            </div>
          </div>
        </div>

        {/* Immunization */}
        <div id="3" ref={(el) => (sectionRefs.current["3"] = el)} className="w-full rounded-xl bg-primary-light shadow-custom p-6 md:py-8 md:px-12">
          <p className="text-primary text-base sm:text-lg md:text-2xl font-semibold font-inter pb-4 md:pb-6">
            Immunization Coverage & Vaccine Consumption In Rural India
          </p>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-start md:pr-6">
              <img
                src={Immunization}
                alt="Immunization"
                className="rounded-sm border-[0.1rem] border-contrast"
              />
              <div className="flex flex-row-reverse pt-4 md:pt-6">
                <a
                  href="https://mlinfomap.com/docs/arcindia-news-partner-showcase.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="contained" size="small" color="secondary">
                    Read ArcIndia News Vol-14
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-2/3 flex items-start md:pl-6 pb-4 md:pb-0">
              <p className="text-contrast text-xs sm:text-sm md:text-lg font-inter">
                The Immunization App was developed to strengthen delivery of
                vaccines for 12 diseases in rural India. This innovative
                initiative was supported by{" "}
                <span className="text-primary font-medium">
                  Bill and Melinda Gates Foundation (BMGF)
                </span>{" "}
                in partnership with{" "}
                <span className="text-primary font-medium">
                  Biotechnology Industry Research Assistance Council (BIRAC)
                </span>
                . It demonstrated porting public health data on a GIS platform
                to get good insights into distribution of vaccines from the last
                cold chain point to vaccination session sites, geographically
                extend vaccination to include all rural population clusters and
                create an automated system to monitor the efficacy of the{" "}
                <span className="text-primary font-medium">
                  Universal Immunization Programme
                </span>{" "}
                on the ground. GIS was used to solve practical operational
                problems relating to each of these three aims, with a view to
                leave no one behind. It is an integrative GIS Platform where a
                holistic picture appears using satellite images, HIMS, eVIN and
                census data.
              </p>
            </div>
          </div>
        </div>

        {/* Markets India */}
        <div id="4" ref={(el) => (sectionRefs.current["4"] = el)}  className="w-full rounded-xl bg-secondary-light shadow-custom p-6 md:py-8 md:px-12">
          <p className="text-secondary text-base sm:text-lg md:text-2xl font-semibold font-inter pb-4 md:pb-6">
            Markets India
          </p>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-start md:pr-6">
              <img
                src={MarketsIndia}
                alt="MarketsIndia"
                className="rounded-sm border-[0.1rem] border-contrast"
              />
              <div className="flex flex-row-reverse pt-4 md:pt-6">
                <a
                  href="https://www.marketsindia.info/home"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="contained" size="small" color="primary">
                    Visit Website
                  </Button>
                </a>
              </div>
            </div>
            <div id="5" className="md:w-2/3 flex items-start md:pl-6 pb-4 md:pb-0">
              <p className="text-contrast text-xs sm:text-sm md:text-lg font-inter">
                This market discovery app finds hidden markets and enables
                expansion geographically. Marketers value it because it focuses
                on sourcing and sales opportunities for{" "}
                <span className="text-secondary font-medium">
                  six industry sectors in India
                </span>
                . Powered by industry data, advanced analytics and cloud
                computing, it has tools for marking{" "}
                <span className="text-secondary font-medium">
                  sales territories
                </span>{" "}
                and site selection, make reports and maps on the fly. Contact us
                at post@mlinfomap.com for business specific customisation.
              </p>
            </div>
          </div>
        </div>

        {/* Swachh Nagar Engineer */}
        <div id="5" ref={(el) => (sectionRefs.current["5"] = el)} className="w-full rounded-xl bg-primary-light shadow-custom p-6 md:py-8 md:px-12">
          <p className="text-primary text-base sm:text-lg md:text-2xl font-semibold font-inter pb-4 md:pb-6">
            Swachh Nagar Engineer App
          </p>
          <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/3 flex flex-col justify-start md:pr-6">
              <div className="flex gap-2 rounded-sm">
                <div>
                  <img
                    src={SNE1}
                    alt="SNE1"
                    className="rounded-sm border-[0.1rem] border-contrast"
                  />
                </div>
                <div>
                  <img
                    src={SNE2}
                    alt="SNE2"
                    className="rounded-sm border-[0.1rem] border-contrast"
                  />
                </div>
                <div>
                  <img
                    src={SNE3}
                    alt="SNE3"
                    className="rounded-sm border-[0.1rem] border-contrast"
                  />
                </div>
              </div>
              <div className="flex flex-row-reverse pt-4 md:pt-6">
                {/* <Button variant="contained" size="small" color="secondary">
                  Visit Website
                </Button> */}
              </div>
            </div>
            <div className="md:w-2/3 flex items-start md:pl-6 pb-4 md:pb-0">
              <p className="text-contrast text-xs sm:text-sm md:text-lg font-inter">
                It was developed for{" "}
                <span className="text-primary font-medium">
                  Swachh Bharat Mission Urban of MoHUA, GOI
                </span>
                . This app provides automated processes to the{" "}
                <span className="text-primary font-medium">
                  Urban Local Body
                </span>
                (ULB) to effectively monitor door to door{" "}
                <span className="text-primary font-medium">
                  waste collection
                </span>{" "}
                from households. It also helps ULB administrators get a single
                view of operations on the ground and communicate with citizens
                and waste collectors from the Web dashboard. It collects data
                from citizens, waste collectors, QR codes, etc. through mobile
                smart phones in real time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppSection;
