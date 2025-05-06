import React from "react";
import { Clock, Calendar, Scissors, Award } from "lucide-react";

const Features = () => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose <span className="text-barber-gold">Ghost</span>Barber
          </h2>
          <div className="mx-auto h-1 w-24 bg-barber-gold mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine traditional barbering techniques with modern styles to
            give you the perfect look.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-barber-lightgray mb-4">
              <Award className="h-8 w-8 text-barber-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Expert Barbers</h3>
            <p className="text-gray-600">
              Our team of professional barbers bring years of experience and
              skill to every cut.
            </p>
          </div>

          <div
            className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-barber-lightgray mb-4">
              <Scissors className="h-8 w-8 text-barber-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Services</h3>
            <p className="text-gray-600">
              From classic cuts to modern styles, we offer a full range of
              premium services.
            </p>
          </div>

          <div
            className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-barber-lightgray mb-4">
              <Clock className="h-8 w-8 text-barber-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Convenient Hours</h3>
            <p className="text-gray-600">
              Open 7 days a week with early and late appointments available.
            </p>
          </div>

          <div
            className="bg-white p-6 border border-gray-200 rounded-lg shadow-md text-center"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-barber-lightgray mb-4">
              <Calendar className="h-8 w-8 text-barber-gold" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600">
              Schedule your appointment online in seconds, anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
