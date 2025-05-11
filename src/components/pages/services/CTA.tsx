import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <section className="py-20 bg-accent/10">
      <div className="app_container text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Experience Our Services?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Book your appointment today and let our expert barbers take care of
          you.
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
