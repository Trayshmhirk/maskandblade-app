import Hero from "@/components/common/Hero";
import AboutUs from "@/components/pages/home/AboutUs";
import CTA from "@/components/pages/home/CTA";
import Features from "@/components/pages/home/Features";
import Services from "@/components/pages/home/Services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero
        heroBg="/images/home-hero-bg.jpg"
        heroMinHeight={"min-h-[80vh]"}
        overlayOpacity={"bg-black/10"}
      >
        <h1 className="relative text-7xl text-white max-w-lg mb-6">
          Unmask Your Best Look.
        </h1>
        <p className="text-white text-2xl font-semibold max-w-lg mb-8">
          Experience barbering at its finest - where traditional craftsmanship
          meets modern trends.
        </p>

        <div className="flex gap-4">
          <Link href="/appointment">
            <Button className="h-fit my-5 px-6 py-3 text-lg font-semibold bg-secondary hover:bg-amber-300 text-black transition-colors rounded">
              Book Now
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="outline"
              className="h-fit my-5 px-6 py-3 text-lg font-semibold border-white text-black hover:bg-white hover:text-black rounded"
            >
              Our Services
            </Button>
          </Link>
        </div>
      </Hero>

      <AboutUs />
      <Features />
      <Services />
      <CTA />
    </>
  );
}
