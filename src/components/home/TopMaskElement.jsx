"use client";
import { MaskContainer } from "../ui/top-mask-element";

export function TopMaskElement() {
  return (
    <div className=" w-full flex items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="text-white px-10 md:px-20 text-center text-2xl md:text-4xl font-bold font-inter">
            <span className="text-primary">ML Infomap</span> brings you{" "}
            <span className="text-primary">GIS solutions</span>, data, maps and
            apps.
          </p>
        }
      >
        <p className="text-contrast text-center text-2xl md:text-4xl font-bold font-inter">
          <span className="text-primary">ML Infomap</span> brings you{" "}
          <span className="text-primary">GIS solutions</span>, data, maps and
          apps.
        </p>
      </MaskContainer>
    </div>
  );
}
