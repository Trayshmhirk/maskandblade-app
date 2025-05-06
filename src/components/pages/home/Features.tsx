"use client";
import React from "react";
import { Clock, Calendar, Scissors, Award } from "lucide-react";
import * as motion from "motion/react-client";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { cardVariants } from "@/lib/utils";

const Features = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Expert Barbers",
      description:
        "Our professional barbers bring years of experience to every cut.",
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Premium Services",
      description:
        "From classic cuts to modern styles, we offer full grooming services.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Convenient Hours",
      description: "Open 7 days a week with flexible appointment times.",
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: "Easy Booking",
      description: "Schedule your appointment online in seconds.",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      // viewport={{ once: false }}
      variants={staggerContainer()}
      className="py-16 md:py-20 bg-white"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          variants={fadeIn("up", "spring", 0.2, 1)}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Why Choose <span className="text-accent">MaskAndBlade</span>
          </h2>

          <motion.div
            className="mx-auto h-1 bg-accent mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine traditional barbering techniques with modern styles for
            your perfect look.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="bg-white p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
