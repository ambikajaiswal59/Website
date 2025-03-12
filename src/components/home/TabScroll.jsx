"use client";
import React, { useState, useEffect } from "react";
import { ContainerScroll } from "../ui/tab-scroll";
import SIDH from "../../assets/Maps/SIDH.JPG";
import MarketsIndia from "../../assets/Maps/MarketsIndia.JPG";
import MSSDS from "../../assets/Maps/MSSDS.JPG";
import IOCL from "../../assets/Maps/IOCL.JPG";
import RouteGIF from "../../assets/Location Map.mp4";

const images = [SIDH, MarketsIndia, IOCL, MSSDS];

export function TabScroll() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 500); // Match this duration to the CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex flex-col overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover transform scale-25 opacity-80"
        src={RouteGIF} // Replace with the path to your .mp4 video file
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay content */}
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-lg md:text-2xl text-contrast font-semibold text-black my-4 lg:mb-8 lg:mt-0 font-inter">
              Experience the ease of{" "}
              <span className="text-primary">ROUTES</span> with <br />
              <span className="text-2xl md:text-4xl font-bold mt-1 leading-none">
                ML Maps
              </span>
            </h1>
          </>
        }
      >
        <div className="relative w-full h-full mx-auto rounded-2xl overflow-hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              height={720}
              width={1400}
              className={`absolute top-0 left-0 w-full h-full object-fill transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              draggable={false}
            />
          ))}
        </div>
        {/* <div
          className={`mx-auto rounded-2xl overflow-hidden relative transition-transform duration-500 ease-in-out transform ${
            isFading ? "translate-x-[100%]" : "translate-x-0"
          }`}
          style={{ whiteSpace: "nowrap" }}
        >
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            height={720}
            width={1400}
            className="inline-block object-cover h-full object-left-top"
            draggable={false}
          />
        </div> */}
      </ContainerScroll>
    </div>
  );
}

// export function TabScroll() {
//   return (
//     (<div className="flex flex-col overflow-hidden">
//       <ContainerScroll
//         titleComponent={
//           <>
//             <h1 className="text-2xl md:text-4xl font-semibold text-black dark:text-white">
//               Experience the ease of <span className="text-[#b20000]">ROUTES</span> with <br />
//               <span className="text-4xl md:text-[5rem] font-bold mt-1 leading-none">
//                 ML Maps
//               </span>
//             </h1>
//           </>
//         }>
//         <img
//           src={MapImage}
//           alt="hero"
//           height={720}
//           width={1400}
//           className="mx-auto rounded-2xl object-cover h-full object-left-top"
//           draggable={false} />
//       </ContainerScroll>
//     </div>)
//   );
// }
