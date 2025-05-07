import React from "react";
import Hero from "@/components/common/Hero";
import AboutUs from "@/components/pages/home/AboutUs";
import CTA from "@/components/pages/home/CTA";
import Features from "@/components/pages/home/Features";
import Services from "@/components/pages/home/Services";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Hero
        heroBg="/images/home-hero-bg.jpg"
        heroMinHeight={"min-h-[80vh]"}
        overlayOpacity={"bg-black/10"}
      >
        <div className="max-w-lg">
          <h1 className="text-5xl md:text-7xl font-heading text-white mb-6">
            Unmask Your Best Look.
          </h1>
          <p className="text-white text-xl md:text-2xl mb-8">
            Experience barbering at its finest - where traditional craftsmanship
            meets modern trends.
          </p>
          <div className="flex gap-4">
            <Link href="/appointment">
              <Button className="h-fit px-6 py-3 text-lg font-semibold bg-accent hover:bg-amber-300 text-black rounded">
                Book Now
              </Button>
            </Link>
            <Link href="/services">
              <Button
                variant="outline"
                className="h-fit px-6 py-3 text-lg font-semibold border-white text-black hover:bg-white hover:text-black rounded"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </Hero>

      <AboutUs />
      <Features />
      <Services />
      <CTA />
    </>
  );
};

export default Home;
