import React from "react";
import Hero from "@/components/common/Hero";
import { GalleryGrid } from "./GalleryGrid";

const Gallery = () => {
  return (
    <>
      <Hero
        heroMinHeight={"min-h-[70vh]"}
        overlayOpacity={"bg-black/50"}
        className={"items-end pb-12"}
      >
        <div className="max-w-xl">
          <h1 className="relative text-5xl md:text-7xl text-white font-semibold mb-6">
            Our Gallery
          </h1>
          <p className="text-white text-xl md:text-2xl font-medium mb-8">
            Explore our premium grooming transformations and find inspiration
            for your next look
          </p>
        </div>
      </Hero>

      <GalleryGrid />
    </>
  );
};

export default Gallery;
