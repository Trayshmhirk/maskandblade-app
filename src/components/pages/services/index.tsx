import Hero from "@/components/common/Hero";
import React from "react";
import ServicesOffered from "./ServicesOffered";
import CTA from "./CTA";

const Services = () => {
  return (
    <>
      <Hero
        heroMinHeight={"min-h-[75vh]"}
        overlayOpacity={"bg-black/40"}
        backgroundPosition="center -100px"
        className={"items-end pb-12"}
      >
        <h1 className="relative text-5xl md:text-7xl text-white font-semibold md:max-w-xl mb-6">
          Our Services
        </h1>
        <p className="text-white text-2xl font-semibold max-w-xl mb-8">
          We offer a comprehensive range of premium barbering services to keep
          you looking sharp.
        </p>
      </Hero>

      <ServicesOffered />
      <CTA />
    </>
  );
};

export default Services;
