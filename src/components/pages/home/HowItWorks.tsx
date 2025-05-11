import React from "react";
import { Calendar, Truck, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: <Calendar className="h-8 w-8" />,
    title: "Book Your Service",
    description:
      "Select your preferred service and time through our easy online booking system.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "We Come to You",
    description:
      "Our barber arrives at your location with premium tools and equipment.",
    color: "bg-amber-100 text-amber-600",
  },
  {
    icon: <Smile className="h-8 w-8" />,
    title: "Enjoy the Experience",
    description:
      "Relax while receiving top-tier grooming in your preferred environment.",
    color: "bg-green-100 text-green-600",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="app_container max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading mb-4 text-primary">
            The <span className="text-accent">MaskAndBlade</span> Experience
          </h2>
          <div className="mx-auto h-1 w-24 bg-accent mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium grooming delivered to your doorstep in three simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="group">
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col items-center text-center transition-all duration-300 group-hover:shadow-xl">
                <div
                  className={`${step.color} h-16 w-16 rounded-full flex items-center justify-center mb-6`}
                >
                  {step.icon}
                </div>
                <div className="relative mb-4">
                  <span className="absolute -left-8 text-5xl font-bold text-gray-100 -z-10">
                    0{index + 1}
                  </span>
                  <h3 className="text-xl font-semibold relative z-10">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6 flex-grow">
                  {step.description}
                </p>
                <div className="h-0.5 w-16 bg-gray-200 group-hover:bg-accent transition-colors" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button className="px-8 py-3 bg-accent hover:bg-amber-300 text-black font-medium rounded-lg transition-colors shadow-md hover:shadow-lg">
            Book Your Appointment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
