import React, { useEffect, useRef } from "react";
import "ol/ol.css"; // Import OpenLayers CSS
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { Feature } from "ol";
import { Point } from "ol/geom";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import { Style, Icon } from "ol/style";
import MapMarker from '../../assets/MapMarker.png'

const CompanyLocationMap = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Define company location (longitude, latitude) 28.541071529896733, 77.1864640951985
    const companyCoordinates = [77.1864640951985, 28.541071529896733]; // Example: Delhi, India (lon, lat)
    const pointWebMercator = fromLonLat(companyCoordinates);
    // Transform coordinates to OpenLayers format
    const companyLocation = fromLonLat(companyCoordinates);

    // Marker feature
    const marker = new Feature({
      geometry: new Point(companyLocation),
    });

    // Style for the marker
    marker.setStyle(
      new Style({
        image: new Icon({
          src: MapMarker, // Replace with your marker icon URL
          scale: 0.25, // Adjust the size
        }),
      })
    );


    // Map initialization
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap tiles
        }),
        new VectorLayer({
          source: new VectorSource({
            features: [marker],
          }),
        }),
      ],
      view: new View({
        center: companyLocation,
        zoom: 15, // Default zoom level
        extent: [ // Limit the map extent to a small bounding box around the point
          pointWebMercator[0] - 5000, // Longitude left
          pointWebMercator[1] - 1000, // Latitude bottom
          pointWebMercator[0] + 5000, // Longitude right
          pointWebMercator[1] + 1000  // Latitude top
      ],
      maxZoom: 20,
      minZoom: 4, 
      }),
    });

    return () => {
      map.setTarget(null); // Clean up on unmount
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full h-[400px] rounded-md"
    ></div>
  );
};

export default CompanyLocationMap;
