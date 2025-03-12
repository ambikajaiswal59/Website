import React, { useState } from "react";
import { Button } from "@mui/material";
import datalist from "./DataList";

const DataCards = () => {
  const [visibleCards, setVisibleCards] = useState(8);
  const [expandedCardId, setExpandedCardId] = useState(null);

  const toggleReadMore = (id) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  const handleViewMore = () => {
    setVisibleCards((prev) => (prev === 8 ? prev + 10 : 8));
  };

  return (
    <div>
      {/* Heading Section */}
      <div className="flex flex-col justify-center items-center">
        <p className="text-primary text-2xl md:text-4xl font-semibold font-inter">
          Our Data
        </p>
        <p className="text-contrast font-semibold text-lg md:text-2xl font-inter text-center leading-tight pb-12">
          Some of our popular map data are listed below:
        </p>
      </div>

      {/* Card List Section */}
      <div className="flex justify-center items-center ">
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-8">
            {datalist.slice(0, visibleCards).map((data) => (
              <Card
                key={data.id}
                data={data}
                isExpanded={expandedCardId === data.id}
                toggleReadMore={toggleReadMore}
              />
            ))}
          </div>

          {/* View More Button */}
          <div className="flex justify-center mt-12 margin-top">
            <Button
              onClick={handleViewMore}
              sx={{ className: "px-4 py-1" }}
              color="primary"
              size="medium"
              variant="contained"
            >
              {visibleCards === 8 ? "View More" : "View Less"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ data, isExpanded, toggleReadMore }) => {
  const maxWords = 15;
  const contentPreview =
    data.content.split(" ").slice(0, maxWords).join(" ") +
    (data.content.split(" ").length > maxWords ? "..." : "");

  return (
    <div className="flex flex-col border-[0.1rem] border-primary bg-primary-bg rounded-xl w-full overflow-hidden">
      <img className="rounded-t-xl" src={data.imgsrc} alt="map.png" />
      <div className="p-4 flex flex-col">
        <p className="text-contrast text-sm md:text-base font-semibold font-inter !leading-tight">
          {data.title}
        </p>
        <p className="text-contrast text-xs md:text-sm font-inter mt-2 flex-grow !leading-tight">
          {isExpanded ? data.content : contentPreview}
          {data.content.split(" ").length > maxWords && (
            <button
              onClick={() => toggleReadMore(data.id)}
              className="text-primary text-xs font-inter font-semibold"
            >
              {isExpanded ? "(Show Less)" : "(Read More)"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default DataCards;
