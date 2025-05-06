import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";
import { fadeIn, staggerContainer } from "@/utils/motion";

const CTA = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={staggerContainer()}
      className="relative py-20 text-white"
    >
      <div className="absolute inset-0 bg-[#121212]/90 -z-10" />
      <div className="container px-4 mx-auto text-center">
        <motion.h2
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="text-3xl md:text-4xl font-heading mb-6"
        >
          Ready for Your Next Great Look?
        </motion.h2>

        <motion.p
          variants={fadeIn("up", "spring", 0.4, 1)}
          className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg"
        >
          Book your appointment today and experience premium barbering service.
        </motion.p>

        <motion.div variants={fadeIn("up", "spring", 0.6, 1)}>
          <Link href="/appointment">
            <Button
              size="lg"
              className="bg-accent hover:bg-amber-300 text-black hover:scale-107"
            >
              Book Your Appointment
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CTA;
