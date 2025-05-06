import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
import { fadeIn, slideIn, staggerContainer } from "@/utils/motion";

const AboutUs = () => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer()}
      className="bg-[#f9f8f6] py-16 md:py-20 overflow-hidden"
    >
      <div className="app_container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            className="relative h-[500px] md:h-[600px]"
          >
            <Image
              src="/images/clean-shave2.jpeg"
              alt="Barber at work"
              fill
              className="object-cover rounded-xl shadow-2xl"
              priority
            />
            <motion.div
              variants={fadeIn("right", "spring", 0.6, 1)}
              className="absolute -bottom-8 -right-8 hidden md:block"
            >
              <div className="relative w-48 h-[325px] p-2 rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/about_small_image.png"
                  alt="Barber tools"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="text-black"
          >
            <motion.h2
              variants={fadeIn("up", "spring", 0.2, 1)}
              className="text-4xl md:text-5xl font-heading mb-6"
            >
              Crafting Confidence, One Cut at a Time
            </motion.h2>

            <motion.div
              variants={staggerContainer(0.1, 0.2)}
              className="space-y-4"
            >
              <motion.p
                variants={fadeIn("up", "spring", 0.3, 1)}
                className="text-lg leading-relaxed"
              >
                A great haircut is more than just a style—it&apos;s a symbol
                that defines us. Haircutting is an art that expresses freedom,
                creativity, and innovation.
              </motion.p>
              <motion.p
                variants={fadeIn("up", "spring", 0.4, 1)}
                className="text-lg leading-relaxed"
              >
                We believe in the power of a great haircut to boost confidence.
                Our barbers combine precision with passion to deliver
                personalized grooming experiences.
              </motion.p>
              <motion.p
                variants={fadeIn("up", "spring", 0.5, 1)}
                className="text-lg leading-relaxed"
              >
                Honoring timeless traditions while embracing modern techniques,
                we create styles that make you look and feel exceptional.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "spring", 0.6, 1)}
              className="mt-8 p-6 bg-white rounded-lg shadow-md inline-block"
            >
              <p className="text-xl font-medium">
                <span className="text-accent">Opening Hours:</span> 8:00am -
                10:00pm
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
