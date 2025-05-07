import Hero from "@/components/common/Hero";
import React from "react";
import ContactForm from "./ContactForm";
import SocialIcon from "@/components/common/SocialIcon";

const Contact = () => {
  return (
    <>
      <Hero
        heroMinHeight={"min-h-[65vh]"}
        overlayOpacity={"bg-black/50"}
        className={"items-end pb-12"}
      >
        <h1 className="relative text-5xl md:text-7xl text-white font-semibold md:max-w-xl mb-6">
          Contact Us
        </h1>
        <p className="text-white text-2xl font-semibold max-w-xl mb-8">
          Have questions or need to get in touch? We&apos;re here to help.
        </p>
      </Hero>

      <ContactForm />

      <section className="py-16 md:py-20">
        <div className="app_container">
          <div className="bg-white rounded-lg border border-gray-200 shadow-lg overflow-hidden h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2421.6605590739173!2d-1.1554673229558021!3d52.62997792808084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487760c3b6b710ef%3A0xf297666ca7b31df1!2s92%20Livingstone%20St%2C%20Leicester%20LE3%200QY%2C%20UK!5e0!3m2!1sen!2sng!4v1742806425883!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Livingston Street, Leicester"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#f9f8f6]">
        <div className="app_container text-center">
          <h2 className="text-dark_primary font-bold text-xl mb-8">
            Connect With Us on Social Media
          </h2>

          <div className="flex justify-center items-center gap-6">
            <SocialIcon
              icon="/images/facebook.png"
              link="https://facebook.com"
              alt="Facebook"
            />
            <SocialIcon
              icon="/images/insta.png"
              link="https://instagram.com"
              alt="Instagram"
            />
            <SocialIcon
              icon="/images/x.png"
              link="https://twitter.com"
              alt="Twitter/X"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
