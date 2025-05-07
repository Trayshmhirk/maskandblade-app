"use client";
import React, { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

import { MapPin, Clock, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form data prepared for Firebase:", formData);
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="app_container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-6 md:p-8 border border-gray-100 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              Get in Touch
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-fit px-4 py-3 border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-fit px-4 py-3 border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full h-fit min-h-[150px] px-4 py-3 border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent"
                  placeholder="How can we help you?"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-fit py-3 bg-accent hover:bg-amber-300 text-gray-900 font-medium transition-colors"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Contact Details
              </h2>
              <p className="text-gray-600 mb-8">
                Have questions or need to book an appointment? Reach out to us
                through the form or contact us directly using the information
                below.
              </p>
            </div>

            <div className="bg-white p-6 border border-gray-200 rounded-xl shadow-md">
              <div className="flex items-start mb-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Our Location</h3>
                  <p className="text-gray-600">
                    123 Barber Street
                    <br />
                    Downtown, City 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                  <ul className="text-gray-600 space-y-2">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span className="font-medium">10:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span className="font-medium">11:00 AM - 5:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-accent/10 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Contact Us</h3>
                  <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
                  <p className="text-gray-600">Email: info@ghostbarber.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
