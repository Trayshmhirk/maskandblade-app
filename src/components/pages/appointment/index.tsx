import React from "react";
import Hero from "@/components/common/Hero";

const Appointment = () => {
  return (
    <>
      <Hero
        heroMinHeight={"min-h-[70vh]"}
        overlayOpacity={"bg-black/50"}
        className={"items-end pb-12"}
      >
        <h1 className="relative text-5xl md:text-7xl text-white font-semibold md:max-w-xl mb-6">
          Book an Appointment
        </h1>
        <p className="text-white text-2xl font-semibold max-w-xl mb-8">
          Schedule your premium grooming experience with us today.
        </p>
      </Hero>
    </>
  );
};

export default Appointment;
