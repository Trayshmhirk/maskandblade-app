import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Services = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F5F5F5]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Premium Services</h2>
          <div className="mx-auto h-1 w-24 bg-barber-gold mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of barbering services to keep you looking your
            best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-md service-card">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Haircut & Fade</h3>
              <p className="text-gray-600 mb-4">
                Expert haircut with perfect fading technique, customized to your
                style.
              </p>
              <Button
                asChild
                variant="link"
                className="text-barber-gold p-0 hover:text-amber-500"
              >
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md service-card">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Beard Trim & Styling
              </h3>
              <p className="text-gray-600 mb-4">
                Professional beard trimming and styling to enhance your facial
                features.
              </p>
              <Button
                asChild
                variant="link"
                className="text-barber-gold p-0 hover:text-amber-500"
              >
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-md service-card">
            <div className="h-48 bg-gray-300"></div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Hot Towel Shave</h3>
              <p className="text-gray-600 mb-4">
                Luxurious classic hot towel shave for the ultimate relaxation
                experience.
              </p>
              <Button
                asChild
                variant="link"
                className="text-barber-gold p-0 hover:text-amber-500"
              >
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Button
            asChild
            variant="default"
            className="bg-accent hover:bg-amber-300 text-black"
          >
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
