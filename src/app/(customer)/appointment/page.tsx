import Hero from "@/components/common/Hero";
import React from "react";

const AppointmentPage = () => {
  return (
    <>
      <Hero
        heroMinHeight={"min-h-[60vh]"}
        overlayOpacity={"bg-black/80"}
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

export default AppointmentPage;
