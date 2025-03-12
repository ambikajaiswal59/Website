import React, { useState } from "react";
import PropTypes from "prop-types";
import js from "../../assets/TechApps/logos/js.png";
import java from "../../assets/TechApps/logos/java.png";
import csharp from "../../assets/TechApps/logos/csharp.png";
import net from "../../assets/TechApps/logos/net.svg";
import python from "../../assets/TechApps/logos/python.png";
import php from "../../assets/TechApps/logos/php.png";
import tsx from "../../assets/TechApps/logos/tsx.png";
import react from "../../assets/TechApps/logos/react.png";
import angular from "../../assets/TechApps/logos/angular.png";
import next from "../../assets/TechApps/logos/next.svg";
import node from "../../assets/TechApps/logos/node.png";
import express from "../../assets/TechApps/logos/express.png";
import mssql from "../../assets/TechApps/logos/mssql.png";
import mongodb from "../../assets/TechApps/logos/mongodb.png";
import postgres from "../../assets/TechApps/logos/postgres.png";
import aws from "../../assets/TechApps/logos/aws.png";
import mysql from "../../assets/TechApps/logos/mysql.png";
import oracle from "../../assets/TechApps/logos/oracle.png";
import dynamo from "../../assets/TechApps/logos/dynamo.png";
import mern from "../../assets/TechApps/logos/mern.png";
import mean from "../../assets/TechApps/logos/mean.png";
import arcgis from "../../assets/TechApps/logos/arcgis.png";
import django from "../../assets/TechApps/logos/django.png";
import flask from "../../assets/TechApps/logos/flask.png";
import springboot from "../../assets/TechApps/logos/springboot.png";
import hibernate from "../../assets/TechApps/logos/hibernate.png";
import laravel from "../../assets/TechApps/logos/laravel.png";
import canva from "../../assets/TechApps/logos/canva.png";
import figma from "../../assets/TechApps/logos/figma.svg";
import staruml from "../../assets/TechApps/logos/staruml.png";
import drawio from "../../assets/TechApps/logos/drawio.png";
import reactnative from "../../assets/TechApps/logos/reactnative.png";
import html from "../../assets/TechApps/logos/html.png";
import css from "../../assets/TechApps/logos/css.png";
import bootstrap from "../../assets/TechApps/logos/bootstrap.png";
import tailwind from "../../assets/TechApps/logos/tailwind.png";

import { Tab, Tabs } from "@mui/material";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div className="p-3">{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const TechStack = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="w-full">
      <div className="logos py-8">
        <p className="text-contrast text-sm md:text-lg text-justify font-inter py-4">
          We have strong in-house{" "}
          <span className="text-secondary font-medium">
            programming capabilities
          </span>
          . We offer:-
        </p>
        <div className="w-full">
          <div className="tabsinside flex items-center justify-center">
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="programming skills"
              className="flex"
              variant="scrollable"
            >
              <Tab
                sx={{ fontWeight: "600",fontSize: "1.05rem", minWidth: "fit-content" }}
                label="Tech Stacks"
                {...a11yProps(0)}
              />
              <Tab
                sx={{ fontWeight: "600", fontSize: "1.05rem", minWidth: "fit-content" }}
                label="Programming Languages"
                {...a11yProps(1)}
              />
              <Tab
                sx={{ fontWeight: "600", fontSize: "1.05rem", minWidth: "fit-content" }}
                label="Frameworks"
                {...a11yProps(2)}
              />
              <Tab
                sx={{ fontWeight: "600", fontSize: "1.05rem", minWidth: "fit-content" }}
                label="Tools and Databases"
                {...a11yProps(3)}
              />
            </Tabs>
          </div>
          <CustomTabPanel value={value} index={0}>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 pt-5">
              <div className="p-3 max-w-fit bg-white rounded-md shadow-custom">
                <img src={mern} alt="mern" className="w-25 h-20" />
              </div>
              <div className="p-3 max-w-fit bg-white rounded-md shadow-custom">
                <img src={mean} alt="mean" className="w-25 h-20" />
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="grid grid-cols-3 md:grid-cols-8 gap-4 lg:gap-8 pt-5">
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={js} alt="js" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Javascript
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={java} alt="java" className="w-8 h-12" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Java
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={python} alt="python" className="w-12 h-12" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Python
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={csharp} alt="csharp" className="w-10 h-12" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  C#
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={php} alt="php" className="w-12 h-10" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Php
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={tsx} alt="tsx" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  TypeScript
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={html} alt="html" className="w-10 h-12" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  HTML
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={css} alt="css" className="w-10 h-12" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  CSS
                </p>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-4 lg:gap-8 pt-5">
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={react} alt="react" className="w-12 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  React
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={angular} alt="angular" className="w-12 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Angular
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={net} alt="net" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  DotNet
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={next} alt="next" className="w-11 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Next
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={django} alt="django" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Django
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={flask} alt="flask" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Flask
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={springboot} alt="springboot" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Springboot
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={hibernate} alt="hibernate" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Hibernate
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={laravel} alt="laravel" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Laravel
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={node} alt="nodejs" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Node
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={express} alt="express" className="w-11 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Express
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img
                  src={reactnative}
                  alt="reactnative"
                  className="w-10 h-15"
                />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  React Native
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={tailwind} alt="tailwind" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-4 text-center leading-none">
                  Tailwind
                </p>
              </div>
              <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={bootstrap} alt="bootstrap" className="w-10 h-15" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Bootstrap
                </p>
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={3}>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-8 pt-5">
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={mssql} alt="mssql" className="w-11 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  SQL Server
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={mongodb} alt="mongodb" className="w-13 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  MongoDB
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={postgres} alt="postgres" className="w-11 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Postgre SQL
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={aws} alt="aws" className="w-12 h-8" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  AWS
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={mysql} alt="mysql" className="w-16 h-9" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  MySQL
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={oracle} alt="oracle" className="w-14 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Oracle
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={dynamo} alt="dynamo" className="w-15 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Dynamo
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={arcgis} alt="arcgis" className="w-15 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  ArcGIS
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={canva} alt="canva" className="w-15 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Canva
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={figma} alt="figma" className="w-15 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Figma
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={staruml} alt="staruml" className="w-15 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  StarUML
                </p>
              </div>
              <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center bg-white rounded-md shadow-custom">
                <img src={drawio} alt="drawio" className="w-15 h-11" />
                <p className="text-contrast text-xs font-medium font-inter pt-2 text-center leading-none">
                  Draw IO
                </p>
              </div>
            </div>
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
