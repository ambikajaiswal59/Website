"use client";
import { CardStack } from "../ui/data-maps";
import { cn } from "../../lib/utils";
import { Button } from "@mui/material";
import { DoubleArrowRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export function DataMaps() {
  const navigate = useNavigate(); // Hook for redirection
  
  const handleRedirect = () => {
    navigate("/MLWebsite/mapdata"); // Redirect to AnotherComponent
  };
  return (
    <div className="h-[30rem] lg:h-[25rem] mx-10 px-2 md:px-10 grid lg:flex items-center justify-between w-full">
      <div className="flex flex-col items-center lg:items-start">
        <div className="text-primary font-semibold text-lg md:text-2xl font-inter text-left">
          Get reliable and accurate
        </div>
        <div className="text-contrast text-2xl md:text-4xl font-semibold font-inter text-left pb-6">
          Map Data
        </div>
        <Button
          size="small"
          className="hover:bg-white hover:text-primary transition"
          variant="contained"
          color="secondary"
          endIcon={<DoubleArrowRounded />}
          onClick={handleRedirect}
        >
          See More
        </Button>
      </div>
      <div className="pt-6 lg:pt-0">
        <CardStack items={CARDS} />
      </div>
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({ children, className }) => {
  return (
    <span
      className={cn(
        "font-medium bg-red-100 text-primary px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "India National Basemap December 2024",
    content: (
      <p>
        This is a great data set to begin your collection with. The map layers
        include: international, state, district and subdistrict{" "}
        <Highlight>boundaries</Highlight>; position of all cities/towns, road
        network (expressways, highways & major roads),{" "}
        <Highlight>railway lines</Highlight>, and important{" "}
        <Highlight>water bodies</Highlight>.
      </p>
    ),
  },
  {
    id: 1,
    name: "India Village Boundaries",
    content: (
      <p>
        There are over <Highlight>640,000 villages</Highlight> for 2011 and
        around <Highlight>638,000 villages</Highlight> marked for 2001. These
        villages are also offered as point locations. Villages are also
        available linked to Census demographics.
      </p>
    ),
  },
  {
    id: 2,
    name: "100 Years of India Historical Districts",
    content: (
      <p>
        All Administrative districts from{" "}
        <Highlight>Census 1911 to 2011</Highlight>, linked to Census
        demographics, are available for India. District boundaries are updated
        till <Highlight>December 2024</Highlight>.
      </p>
    ),
  },
  {
    id: 3,
    name: "India Navigable Road Network",
    content: (
      <p>
        More than <Highlight>one million kilometres</Highlight> of seamless road
        network for the nation is available. All highways and expressways are
        marked. Pavement, lanes, direction, junctions, landmarks are provided
        for<Highlight> routing and navigation solutions</Highlight> for AVNs,
        PDAs, mobile phones and Web. Optionally, data can be provided for
        historical investments and upgrade of roads across the country.
      </p>
    ),
  },
  {
    id: 4,
    name: "India Parliamentary Constituencies",
    content: (
      <p>
        Includes current parliamentary constituency boundaries with demographic
        profile and <Highlight>2014, 2019 and 2024 elections</Highlight>{" "}
        results. In addition,
        <Highlight>Pre-1974 constituency</Highlight> boundaries with multiple
        Lok Sabha elections data are also available.
      </p>
    ),
  },
];
