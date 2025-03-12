"use client";;
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

let interval;

export const CardStack = ({
  items,
  offset,
  scaleFactor
}) => {
  const CARD_OFFSET = offset || 8;
  const SCALE_FACTOR = scaleFactor || 0.04;
  const [cards, setCards] = useState(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    (<div className="relative h-72 w-[20rem] md:h-60 md:w-[40rem] ">
      {cards.map((card, index) => {
        return (
          (<motion.div
            key={card.id}
            className="absolute bg-white h-64 w-[20rem] md:h-64 md:w-[40rem] rounded-3xl p-4 border border-primary shadow-custom3D flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}>
            <div className="text-sm md:text-lg font-inter text-contrast">
              {card.content}
            </div>
            <div>
              <p className="text-secondary text-lg lg:text-2xl font-inter font-semibold">
                {card.name}
              </p>
            </div>
          </motion.div>)
        );
      })}
    </div>)
  );
};
