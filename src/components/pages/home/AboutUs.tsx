import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-[#f9f8f6] py-16 md:py-20">
      <div className="app_container">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative h-[500px] md:h-[600px]">
            <Image
              src="/images/clean-shave2.jpeg"
              alt="Barber at work"
              fill
              className="object-cover rounded-xl shadow-2xl"
              priority
            />

            <div className="absolute -bottom-8 -right-8 hidden md:block">
              <div className="relative w-48 h-[325px] p-2 rounded-lg shadow-xl overflow-hidden">
                <Image
                  src="/images/about_small_image.png"
                  alt="Barber tools"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-black">
            <h2 className="text-4xl md:text-5xl font-heading mb-6">
              Crafting Confidence, One Cut at a Time
            </h2>

            <div className="space-y-4">
              <p className="text-lg leading-relaxed">
                A great haircut is more than just a style—it&apos;s a symbol
                that defines us. Haircutting is an art that expresses freedom,
                creativity, and innovation.
              </p>
              <p className="text-lg leading-relaxed">
                We believe in the power of a great haircut to boost confidence.
                Our barbers combine precision with passion to deliver
                personalized grooming experiences.
              </p>
              <p className="text-lg leading-relaxed">
                Honoring timeless traditions while embracing modern techniques,
                we create styles that make you look and feel exceptional.
              </p>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg shadow-md inline-block">
              <p className="text-xl font-medium">
                <span className="text-accent">Opening Hours:</span> 8:00am -
                10:00pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
