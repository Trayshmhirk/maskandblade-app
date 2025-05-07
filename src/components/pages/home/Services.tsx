import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Haircut & Fade",
      description:
        "Expert haircut with perfect fading technique, customized to your style.",
      image: "/images/service1.jpg",
    },
    {
      title: "Beard Trim & Styling",
      description:
        "Professional beard trimming and styling to enhance your facial features.",
      image: "/images/service2.jpg",
    },
    {
      title: "Hot Towel Shave",
      description:
        "Luxurious classic hot towel shave for the ultimate relaxation experience.",
      image: "/images/service3.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-[#F5F5F5]">
      <div className="app_container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Our Premium Services
          </h2>

          <div className="mx-auto w-24 h-1 bg-accent mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional grooming services tailored to your unique style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button
                  asChild
                  variant="link"
                  className="text-accent p-0 hover:text-accent/80 font-medium"
                >
                  <Link href="/services">
                    Learn More <ChevronRight size={18} />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/services">
            <Button
              size="lg"
              className="bg-accent hover:bg-amber-300 text-black hover:scale-107 hover:shadow-lg"
            >
              View All Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
