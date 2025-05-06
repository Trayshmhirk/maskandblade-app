import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";
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

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section className="py-16 md:py-20 bg-[#F5F5F5]">
      <div className="app_container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading mb-4">
            Our Premium Services
          </h2>

          <motion.div
            className="mx-auto h-1 bg-accent mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Professional grooming services tailored to your unique style.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                transition: { duration: 0.2 },
              }}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all"
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-accent hover:bg-amber-300 text-black hover:scale-107 hover:shadow-lg"
            >
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
