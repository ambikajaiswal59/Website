import React, { useState } from 'react'
import PropTypes from 'prop-types';
import js from '../../assets/TechApps/logos/js.png'
import java from '../../assets/TechApps/logos/java.png'
import csharp from '../../assets/TechApps/logos/csharp.png'
import net from '../../assets/TechApps/logos/net.svg'
import python from '../../assets/TechApps/logos/python.png'
import php from '../../assets/TechApps/logos/php.png'
import tsx from '../../assets/TechApps/logos/tsx.png'
import react from '../../assets/TechApps/logos/react.png'
import angular from '../../assets/TechApps/logos/angular.png'
import next from '../../assets/TechApps/logos/next.svg'
import node from '../../assets/TechApps/logos/node.png'
import express from '../../assets/TechApps/logos/express.png'
import mssql from '../../assets/TechApps/logos/mssql.png'
import mongodb from '../../assets/TechApps/logos/mongodb.png'
import postgres from '../../assets/TechApps/logos/postgres.png'
import aws from '../../assets/TechApps/logos/aws.png'
import mysql from '../../assets/TechApps/logos/mysql.png'
import oracle from '../../assets/TechApps/logos/oracle.png'
import dynamo from '../../assets/TechApps/logos/dynamo.png'
import mern from '../../assets/TechApps/logos/mern.png'
import mean from '../../assets/TechApps/logos/mean.png'
import arcgis from '../../assets/TechApps/logos/arcgis.png'
import django from '../../assets/TechApps/logos/django.png'
import flask from '../../assets/TechApps/logos/flask.png'
import springboot from '../../assets/TechApps/logos/springboot.png'
import hibernate from '../../assets/TechApps/logos/hibernate.png'
import laravel from '../../assets/TechApps/logos/laravel.png'
import canva from '../../assets/TechApps/logos/canva.png'
import figma from '../../assets/TechApps/logos/figma.svg'
import staruml from '../../assets/TechApps/logos/staruml.png'
import drawio from '../../assets/TechApps/logos/drawio.png'
import reactnative from '../../assets/TechApps/logos/reactnative.png'
import html from '../../assets/TechApps/logos/html.png'
import css from '../../assets/TechApps/logos/css.png'
import bootstrap from '../../assets/TechApps/logos/bootstrap.png'
import tailwind from '../../assets/TechApps/logos/tailwind.png'

import { Tab, Tabs } from '@mui/material'

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
            {value === index && <div className='p-3'>{children}</div>}
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
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const IntroContent = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='py-4 w-screen'>

            <div className='px-8 py-2 md:px-10 md:py-4 lg:px-20 lg:py-8'>

                <div className='tech content'>
                    <p className='text-[1rem] md:text-4xl font-bold text-[#0C315B] mb-2'><span className="text-[#b20000]">TECH</span>NOLOGY</p>
                    <p className='text-sm md:text-[1rem] text-justify text-[#3f3f3f] font-parkinsans'>ML Infomap is a one-stop-shop for developing GIS solutions for informed decision making and ease of operations. With over three decades of experience in the geospatial sector, we are able to provide technological expertise and unmatched support to clients in their digital transformation experience in planning, implementation and operational functions.</p>
                    <p className='text-sm md:text-[1rem] text-justify text-[#3f3f3f] font-parkinsans pt-2'>We develop real-time location-based apps for countrywide asset management and field operations. We have powerful enterprise solutions for road and railway transportation, management of the skills development ecosystem, health environment, digital mapping and imagery data processing.</p>
                    <p className='text-sm md:text-[1rem] text-justify text-[#3f3f3f] font-parkinsans pt-2'>Our solutions offer complete automated work flows to ensure routine work is conducted smoothly. All routine functions like generation of orders, approvals, compliances, reports, alerts and contractual billing are all possible from our unified GIS platform.</p>
                    <p className='text-sm md:text-[1rem] text-justify text-[#3f3f3f] font-parkinsans pt-2'>We design and develop :-</p>
                    <ul className='list-disc pl-5'>
                        <li className='text-sm md:text-[1rem] text-[#3f3f3f] font-parkinsans'>GIS solutions on ESRI technology and Open Source.</li>
                        <li className='text-sm md:text-[1rem] text-[#3f3f3f] font-parkinsans'>Apps on Cloud, Desktop & Mobile platforms.</li>
                    </ul>
                </div>

                <div className='tech-stack w-full'>

                    {/* <div className="specialisation w-full mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="border-[#b20000] border-2 rounded-md shadow-custom3D p-3">
                            <p className='text-xs md:text-sm leading-normal font-parkinsans'>Our Technology strengths are in modeling, cloud computing, database, data analytics, AI:ML processing satellite and drone images, Mixed Reality, full stack Web app development.</p>
                        </div>
                        <div className="border-[#b20000] border-2 rounded-md shadow-custom3D p-3">
                            <p className='text-xs md:text-sm leading-normal font-parkinsans'>Our extensive Platform Experience includes AWS and Azure for cloud, and Android and iOS for mobiles.</p>
                        </div>
                        <div className="border-[#b20000] border-2 rounded-md shadow-custom3D p-3">
                            <p className='text-xs md:text-sm leading-normal font-parkinsans'>Our System Integration capabilities include linking apps, platforms & technologies like GPS, images, database, SAP, video and other sensors.</p>
                        </div>
                        <div className="border-[#b20000] border-2 rounded-md shadow-custom3D p-3">
                            <p className='text-xs md:text-sm leading-normal font-parkinsans'>Our IT/GIS solutions cover fleet management, management of healthcare and skills environment, digitizing, 3D visualization, pattern and change detection using AI:ML.</p>
                        </div>
                    </div> */}

                    <div className="logos pt-8 h-[20rem]">
                        <p className="text-sm md:text-[1rem] text-justify font-parkinsans py-4">
                            We have strong in-house <span className="text-[#0c315b] font-medium">programming capabilities</span>. We offer:-
                        </p>
                        <div className="w-full">
                            <div className="tabsinside flex items-center justify-center" >

                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    aria-label="programming skills"
                                    className="flex"
                                    variant='scrollable'
                                >
                                    <Tab sx={{ fontWeight: '600', minWidth: 'fit-content' }} label="Tech Stacks" {...a11yProps(0)} />
                                    <Tab sx={{ fontWeight: '600', minWidth: 'fit-content' }} label="Programming Languages" {...a11yProps(1)} />
                                    <Tab sx={{ fontWeight: '600', minWidth: 'fit-content' }} label="Frameworks" {...a11yProps(2)} />
                                    <Tab sx={{ fontWeight: '600', minWidth: 'fit-content' }} label="Tools and Databases" {...a11yProps(3)} />
                                </Tabs>
                            </div>
                            <CustomTabPanel value={value} index={0}>
                                <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                                    <div className="p-3 max-w-fit bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={mern} alt="mern" className="w-25 h-20" />
                                    </div>
                                    <div className="p-3 max-w-fit bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={mean} alt="mean" className="w-25 h-20" />
                                    </div>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={1}>
                                <div className="grid grid-cols-3 md:grid-cols-8 gap-4 lg:gap-8">
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={js} alt="js" className="w-10 h-15" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={java} alt="java" className="w-8 h-12" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={python} alt="python" className="w-12 h-12" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={csharp} alt="csharp" className="w-10 h-12" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={php} alt="php" className="w-12 h-10" />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={tsx} alt="tsx" className='w-10 h-15' />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={html} alt="html" className="w-10 h-12" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={css} alt="css" className="w-10 h-12" />
                                    </div>
                                </div>

                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={2}>
                                <div className="grid grid-cols-3 md:grid-cols-7 gap-4 lg:gap-8">
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={react} alt="react" className='w-12 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={angular} alt="angular" className='w-12 h-15' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={net} alt="net" className='w-10 h-15' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={next} alt="next" className='w-11 h-11' />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={django} alt="django" className="w-10 h-15" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={flask} alt="flask" className="w-10 h-15" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={springboot} alt="springboot" className="w-10 h-15" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={hibernate} alt="hibernate" className="w-10 h-15" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={laravel} alt="laravel" className="w-10 h-15" />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={node} alt="nodejs" className='w-10 h-15' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={express} alt="express" className='w-11 h-11' />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={reactnative} alt="reactnative" className="w-10 h-15" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={tailwind} alt="tailwind" className="w-10 h-15" />
                                    </div>
                                    <div className=" p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={bootstrap} alt="bootstrap" className="w-10 h-15" />
                                    </div>
                                </div>
                            </CustomTabPanel>
                            <CustomTabPanel value={value} index={3}>
                                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 lg:gap-8">
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={mssql} alt="mssql" className='w-11 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={mongodb} alt="mongodb" className='w-13 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={postgres} alt="postgres" className='w-11 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={aws} alt="aws" className='w-12 h-8' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={mysql} alt="mysql" className='w-16 h-9' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={oracle} alt="oracle" className='w-14 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={dynamo} alt="dynamo" className='w-15 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={arcgis} alt="arcgis" className='w-15 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={canva} alt="canva" className='w-15 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={figma} alt="figma" className='w-15 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={staruml} alt="staruml" className='w-15 h-11' />
                                    </div>
                                    <div className="p-3 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-[#fcebeb] rounded-md shadow-custom">
                                        <img src={drawio} alt="drawio" className='w-15 h-11' />
                                    </div>
                                </div>
                            </CustomTabPanel>
                        </div>

                    </div>

                </div>
            </div >
        </div >
    )
}

export default IntroContent

