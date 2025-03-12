"use client";

import { CompressOutlined } from "@mui/icons-material";
import { cn } from "../../lib/utils";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "slow",
    pauseOnHover = true,
    className
}) => {
    const containerRef = useRef(null);
    const scrollerRef = useRef(null);
    const [start, setStart] = useState(false);
    useEffect(() => {
        addAnimation();
    }, []);

    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);
            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }

    const getDirection = () => {
        if (containerRef.current) {
            containerRef.current.style.setProperty(
                "--animation-direction",
                direction === "left" ? "forwards" : "reverse"
            );
        }
    };

    const getSpeed = () => {
        if (containerRef.current) {
            const duration = speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
            containerRef.current.style.setProperty("--animation-duration", duration);
        }
    };

      const navigate = useNavigate(); // Hook for redirection
    
      const handleRedirect = (id) => {
        navigate(`/MLWebsite/tech-apps/${id}`);// Redirect to AnotherComponent
      };

    return (
        <div
            ref={containerRef}
            className={cn("scroller relative max-w-full overflow-hidden", className)}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        className="relative w-[350px] bg-secondary max-w-full rounded-md flex-shrink-0 px-4 py-3 transition duration-300 ease-in-out group overflow-hidden"
                        key={item.id}
                    >
                        <blockquote>
                            <div className="relative w-full h-auto mb-4 rounded-md overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={`${item.name} - ${item.title}`}
                                    className="w-full h-[160px] object-cover"
                                />
                            </div>
                            <div className="relative mt-2 grid gap-1 text-center">
                                {/* <div className="text-sm text-[#0C315B] font-bold">
                                    {item.name}
                                </div> */}
                                <div className="text-base md:text-lg text-white font-inter font-semibold leading-tight">
                                    {item.title}
                                </div>
                            </div>
                        </blockquote>
                        <div className="absolute inset-0 bg-contrast bg-opacity-50 flex items-center justify-center transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 ">
                            <div className="flex flex-col items-center">
                                {/* <div className="text-white font-bold mb-2">
                                    More Information
                                </div> */}
                                <button className="text-primary bg-primary-light font-bold font-inter py-2 px-4 border border-primary rounded hover:bg-primary  hover:text-white transition" 
                                onClick={() => handleRedirect(item.id)}>
                                    Know More
                                </button>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
