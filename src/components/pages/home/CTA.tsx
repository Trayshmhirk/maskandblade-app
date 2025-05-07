import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="relative py-20 text-white">
      <div className="absolute inset-0 bg-[#121212]/90 -z-10" />

      <div className="app_container text-center">
        <h2 className="text-3xl md:text-4xl font-heading mb-6">
          Ready for Your Next Great Look?
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8 text-lg">
          Book your appointment today and experience premium barbering service.
        </p>

        <div>
          <Link href="/appointment">
            <Button
              size="lg"
              className="bg-accent hover:bg-amber-300 text-black hover:scale-107"
            >
              Book Your Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
