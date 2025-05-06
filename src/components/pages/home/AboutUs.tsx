import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="bg-[#f9f8f6] py-16 md:py-20">
      <div className="app_container">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image Column */}
          <div className="flex flex-col md:flex-row items-start">
            <div className="w-full md:w-[70%]">
              <Image
                src="/images/clean-shave2.jpeg"
                alt="about_image"
                className="w-full h-[400px] md:h-[500px] object-cover"
                width={400}
                height={500}
              />
            </div>
            <div className="w-full md:w-[30%] self-end">
              <Image
                src="/images/about_small_image.png"
                alt="about_image"
                className="w-full h-[400px] md:h-auto p-3 bg-transparent object-contain"
                width={200}
                height={400}
              />
            </div>
          </div>

          {/* Text Column */}
          <div className="text-black lg:pt-7">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <div className="space-y-4">
              <p className="text-sm leading-relaxed">
                A great haircut is more than just a style it&apos;s a symbol
                that defines us. Haircutting is an art that expresses freedom,
                it&apos;s more than just trimming hair-it&apos;s a form of
                self-expression, creativity, and innovation.
              </p>
              <p className="text-sm leading-relaxed">
                We believe in the power of a great haircut to boost confidence
                and showcase your personality. That&apos;s why we offer classic
                cuts, modern styles, and premium grooming services tailored to
                your unique look. Our passion for delivering exceptional service
                drives us to stay ahead of the latest trends and techniques
                while honoring the timeless traditions that have defined
                barbering for generations.
              </p>
              <p className="text-sm leading-relaxed">
                Our experienced barbers take the time to listen to your needs,
                provide expert advice, and deliver a personalized grooming
                experience that exceeds expectations. By combining precision,
                creativity, and passion, we craft styles that not only look
                great but also make you feel confident and comfortable.
              </p>
            </div>

            <p className="text-xl mt-8">
              <b>Opening Hours</b> 8:00am - 10:00pm
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
