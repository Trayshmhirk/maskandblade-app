"use client";
import React from "react";
import { Clock, Calendar, Scissors, Award } from "lucide-react";

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
    <section className="py-16 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Why Choose <span className="text-accent">MaskAndBlade</span>
          </h2>

          <div className="mx-auto w-24 h-1 bg-accent mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We combine traditional barbering techniques with modern styles for
            your perfect look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-accent/10 text-accent mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
