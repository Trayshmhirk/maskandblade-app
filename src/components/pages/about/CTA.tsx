import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-16 bg-gray-50">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-3xl text-primary font-bold mb-6">
          Experience the Difference
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Booking a session is simple through our website. Choose your desired
          service, select a convenient time, and let GhostTheBarber handle the
          rest.
        </p>

        <Link href="/appointment">
          <Button className="bg-accent hover:bg-amber-300 text-black">
            Book Your Appointment
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
