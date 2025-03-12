"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import RouteMap from '../../assets/route-map.svg';
import HomeHeader from '../../assets/Home/HomeHeader.png'

export const MaskContainer = ({
  children,
  revealText,
  size = 10,
  className
}) => {
  const containerRef = useRef(null);
  const [revealSize, setRevealSize] = useState(window.innerWidth > 768 ? 320 : 200);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setRevealSize(300); // Larger size for larger screens
      } else {
        setRevealSize(250); // Smaller size for smaller screens
      }
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      ref={containerRef}
      className={cn("relative", className)}
      animate={{
        backgroundImage: `url(${HomeHeader})`,
        backgroundSize: "cover", 
        backgroundPosition: "center", 
      }}
    >
      <motion.div
        className="w-full h-[17rem] md:h-[25rem] flex items-center justify-center text-6xl absolute bg-black bg-grid-white/[0.2] text-white [mask-image:url(/mask.svg)] [mask-repeat:no-repeat]"
        animate={{
          // Oscillating motion from left to right and back
          maskPosition: ["0% 50%", "100% 50%", "0% 50%"], // Left, right, then back to left
        }}
        style={{
          maskSize: `${revealSize}px`, // Fixed mask size
        }}
        transition={{
          duration: 20, // Slow movement
          repeat: Infinity, // Infinite loop
          ease: "linear", // Smooth continuous movement
        }}
      >
        <div
          className="absolute inset-0 bg-cover bg-no-repeat h-[25rem] w-dvw z-0 blur-sm md:blur-none"
          style={{ backgroundImage: `url(${RouteMap})` }}
        />
        <div className="px-10 md:px-20 text-center text-black text-3xl w-dvw md:text-5xl font-bold relative z-20">
          {children}
        </div>
      </motion.div>
      <div className="w-dvw h-[17rem] md:h-[25rem] flex items-center justify-center text-black">
        {revealText}
      </div>
    </motion.div>
  );
};