import Hero from "@/components/common/Hero";
import AboutUs from "@/components/pages/home/AboutUs";
import CTA from "@/components/pages/home/CTA";
import Features from "@/components/pages/home/Features";
import Services from "@/components/pages/home/Services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
// React Server Components
import * as motion from "motion/react-client";
import { fadeIn, staggerContainer } from "@/utils/motion";

const Homepage = () => {
  return (
    <>
      <Hero
        heroBg="/images/home-hero-bg.jpg"
        heroMinHeight={"min-h-[80vh]"}
        overlayOpacity={"bg-black/10"}
      >
        <motion.div
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.h1
            variants={fadeIn("up", "spring", 0.2, 1)}
            className="text-5xl md:text-7xl font-heading max-w-lg text-white mb-6"
          >
            Unmask Your Best Look.
          </motion.h1>
          <motion.p
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="text-white text-xl md:text-2xl max-w-lg mb-8"
          >
            Experience barbering at its finest - where traditional craftsmanship
            meets modern trends.
          </motion.p>
          <motion.div
            variants={fadeIn("up", "spring", 0.6, 1)}
            className="flex gap-4"
          >
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
          </motion.div>
        </motion.div>
      </Hero>

      <AboutUs />
      <Features />
      <Services />
      <CTA />
    </>
  );
};

export default Homepage;
