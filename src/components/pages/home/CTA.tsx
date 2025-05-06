import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="py-20 bg-[#121212]/80 text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready for Your Next Great Look?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Book your appointment today and experience the premium barbering
          service that keeps our clients coming back.
        </p>

        <Link href="/appointment">
          <Button size="lg" className="bg-accent hover:bg-amber-300 text-black">
            Book Your Appointment
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
