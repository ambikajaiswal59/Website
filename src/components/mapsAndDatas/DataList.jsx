import React, { useState } from 'react';
import Card from './Card';
import Button from '@mui/material/Button';
import indiamap from '../../assets/indiaMap1.png'

const DataList = () => {
    const [visibleCards, setVisibleCards] = useState(6);
    const [expandedCardId, setExpandedCardId] = useState(null); 

    const toggleReadMore = (id) => {
        debugger
      setExpandedCardId((prev) => (prev === id ? null : id));
    };

    const handleViewMore = () => {
        visibleCards === 6
            ? setVisibleCards((prev) => prev + 12)
            : setVisibleCards((prev) => prev - 12)
    };
    const datamaps = [
        {
            id: 1,
            imgsrc: indiamap,
            title: 'INDIA NATIONAL BASEMAP DECEMBER 2021',
            content: ' This is a great data set to begin your collection with. The map layers include: international, state, district and subdistrict boundaries; position of all cities/towns, road network (expressways, highways & major roads), railway lines, and important water bodies.'
        },
        {
            id: 2,
            imgsrc: indiamap,
            title: 'INDIA VILLAGE BOUNDARIES',
            content: 'There are over 640,000 villages for 2011 and around 638,000 villages marked for 2001. These villages are also offered as point locations. Villages are also available linked to Census demographics.'
        },
        {
            id: 3,
            imgsrc: indiamap,
            title: '100 YEARS OF INDIA HISTORICAL DISTRICTS',
            content: 'All Administrative districts from Census 1911 to 2011, linked to Census demographics, are available for India. District boundaries are updated till January 2024.'
        },
        {
            id: 4,
            imgsrc: indiamap,
            title: 'GOVERNMENT POINTS OF INTEREST',
            content: ' More than 300,000 accurately positioned and named government offices across India are available.'
        },
        {
            id: 5,
            imgsrc: indiamap,
            title: 'INDIA PARLIAMENTARY CONSTITUENCEIES',
            content: ' Includes current parliamentary constituency boundaries with demographic profile and 2009, 2014 and 2019 elections results. In addition, Pre-1974 constituency boundaries with multiple Lok Sabha elections data are also available.'
        },
        {
            id: 6,
            imgsrc: indiamap,
            title: ' INDIA STATE ASSEMBLY CONSTITUENCEIES',
            content: ' Includes all current state assembly constituency boundaries with demographic profile, recent and earlier elections data. In addition,Pre-1974 constituency boundaries with multiple elections data are also available.'
        },
        {
            id: 7,
            imgsrc: indiamap,
            title: 'CITY MUNICIPAL WARDS',
            content: 'City municipal limit and ward boundary maps are available for cities of India. The ward boundaries are linked to 2011 Census demographics. In addition, for most cities, wards are further subdivided into named neighbourhoods.'
        },
        {
            id: 8,
            imgsrc: indiamap,
            title: 'INDIAPOST POSTAL CODE',
            content: '20,300 unique six-digit Post Code (PIN code) boundaries are included. Optionally, PIN codes are available linked to demographics and all parliamentary and state assembly constituencies.'
        },
        {
            id: 9,
            imgsrc: indiamap,
            title: 'HEALTH INFRASTRUCTURE MAPS',
            content: 'More than one million kilometres of seamless road network for the nation is available. All highways and expressways are marked. Pavement, lanes, direction, junctions, landmarks are provided for routing and navigation solutions for AVNs, PDAs, mobile phones and Web. Optionally, data can be provided for historical investments and upgrade of roads across the country.'
        },
        {
            id: 10,
            imgsrc: indiamap,
            title: 'GOLDEN QUADRILATERAL',
            content: 'We have a current road map for the Golden Quadrilateral, North-South and East-West Corridors of India. This comes with data on length, lanes, direction, etc. for each road section.'
        },
        {
            id: 11,
            imgsrc: indiamap,
            title: 'CLIMATE MAPS INDIA',
            content: 'Based on IMD published climatic data, we have organized years of meteorological statistics of India. Researchers can now study climatic variables, their trends and patterns, for several decades across the country.'
        },
        {
            id: 12,
            imgsrc: indiamap,
            title: 'INDIA TERRAIN MAPS',
            content: 'We provide 50mX50m and 100mx100m pixels raster elevation data in geotiff; contour vectors (small intervals for gentle slopes and plains); DEM and isometric colour height maps.'
        },
        {
            id: 13,
            imgsrc: indiamap,
            title: 'INDIA LANDCOVER/ LANDUSE BOUNDARIES',
            content: 'Broad physical categories like arable, irrigated, forest, large water bodies, urban areas are marked as polygons. This map is developed from satellite images and secondary sources.'
        },
        {
            id: 14,
            imgsrc: indiamap,
            title: 'INDIA SOIL BOUNDARIES',
            content: 'This comprehensive and countrywide soil map of India shows soil categories in polygons, which are linked to descriptive data of their physical properties, collated from secondary sources.'
        },
        {
            id: 15,
            imgsrc: indiamap,
            title: 'MINES ACROSS INDIA',
            content: 'legally approved mines correctly identified and positioned.'
        },
        {
            id: 16,
            imgsrc: indiamap,
            title: 'INDIA WATER MAP',
            content: 'Drainage network map includes major rivers, streams and large reservoirs. Catchment areas/ watershed boundaries, basins and sub-basins are identified and their boundaries marked on the map.'
        },
        {
            id: 17,
            imgsrc: indiamap,
            title: 'AGRICULTURAL CROPS',
            content: 'This rich data set covers numerous major crops from different parts of India. It includes production and acreage figures for several years that can be mapped.'
        },
        {
            id: 18,
            imgsrc: indiamap,
            title: 'INCOME MAPS',
            content: 'Annual estimates of Income, Expenditure and Savings for all districts and wards of major cities are available. The data is presented by number of households in income categories.'
        },

    ]
    return (
        <div className='flex flex-col'>
            <div className='px-8 py-2 md:px-10 md:py-4 lg:px-20 lg:pt-4 lg:py-8'>
                <p className='text-xl text-[#0c315b] font-bold md:text-2xl text-justify'>Some of our popular map data are listed below:</p>
            </div>
            <div className='flex justify-center items-center px-8 pt-2 pb-4 md:px-10 md:py-4 lg:px-20 lg:pt-2 lg:pb-4'>
                <div className='w-full'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:grid-cols-3 justify-items-center items-stretch w-full'>
                        {datamaps.slice(0, visibleCards).map((data,index) => (
                            <Card 
                            key={index}
                            data={data}
                            isExpanded={expandedCardId === data.id} 
                            toggleReadMore={toggleReadMore}
                            />
                        ))}
                    </div>


                    <div className='flex justify-center mt-6'>
                        <Button onClick={handleViewMore} sx={{ className: 'px-4 py-2' }} color='primary' size='medium' variant='contained' >
                            {
                                visibleCards === 6 ? "View More" : "View Less"
                            }
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataList