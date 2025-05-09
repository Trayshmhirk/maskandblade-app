import Hero from "@/components/common/Hero";
import React from "react";
import Story from "./Story";
import Meet from "./Meet";
import CTA from "./CTA";

const About = () => {
  return (
    <>
      <Hero
        heroMinHeight={"min-h-[65vh]"}
        overlayOpacity={"bg-black/60"}
        backgroundPosition="center -50px"
      >
        <h1 className="relative text-5xl md:text-7xl text-white font-semibold md:max-w-xl mb-6">
          About <span className="text-amber-300">MaskAndBlade</span>
        </h1>
        <p className="text-white text-2xl font-semibold max-w-xl mb-8">
          Your premier mobile grooming service
        </p>
      </Hero>

      <Story />
      <Meet />
      <CTA />
    </>
  );
};

export default About;
