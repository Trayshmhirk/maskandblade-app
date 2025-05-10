"use client";
import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import PaymentModal from "@/components/modals/PaymentModal";
import { serviceCategories as serviceData } from "@/lib/data/serviceCategories";
import SuccessMessage from "./SuccessMessage";

const flattenServices = () =>
  serviceData.flatMap((category: any) =>
    category.services.map((service: any) => ({
      ...service,
      categoryName: category.name,
    }))
  );

const BookingForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    location: "",
    serviceId: searchParams.get("serviceId") || "",
    hairstyleImageUrl: "",
    notes: "",
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email) {
      toast.error("Email is required");
      return;
    }

    setShowPaymentModal(true);
  };

  const handleCompleteBooking = async (paymentReceipt: any) => {
    setIsSubmitting(true);

    const selectedService = flattenServices().find(
      (s) => s.id === parseInt(formData.serviceId)
    );

    const appointmentData = {
      ...formData,
      serviceName: selectedService?.name || "Unknown Service",
      serviceCategory: selectedService?.categoryName || "Unknown Category",
      referenceImageIncluded: !!selectedImage,
      submittedAt: new Date().toISOString(),
    };

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Appointment data:", appointmentData);
      console.log("Payment receipt:", paymentReceipt);
      console.log("Reference image:", selectedImage);

      setShowPaymentModal(false);
      setShowSuccess(true);

      toast.success("Booking completed successfully!", {
        description: "We'll reach out shortly after confirming your payment.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("There was a problem submitting your booking");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {showSuccess ? (
        <SuccessMessage onReturnHome={() => router.push("/")} />
      ) : (
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container px-4 mx-auto max-w-2xl">
            <div className="bg-white p-8 border rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Your Appointment Details
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
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
                    placeholder="Enter your email address"
                    className="w-full"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Enter your phone number"
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Date
                    </label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      required
                      className="w-full"
                      min={new Date().toISOString().split("T")[0]}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Time
                    </label>
                    <Input
                      id="time"
                      name="time"
                      type="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="serviceId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service
                  </label>
                  <select
                    id="serviceId"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    required
                    className="form-select w-full rounded-md border border-input bg-background px-3 pr-6 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                  >
                    <option value="">Select a service</option>
                    {flattenServices().map((service) => (
                      <option key={service.id} value={service.id}>
                        {service.categoryName} – {service.name} ({service.price}
                        )
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="hairstyle"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sample Hairstyle (optional)
                  </label>
                  <Input
                    id="hairstyle"
                    name="hairstyle"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload an image of the style you&apos;d like to achieve
                  </p>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                    placeholder="Enter your location"
                    className="w-full"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Notes (optional)
                  </label>
                  <Textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Any specific requests or information we should know"
                    className="w-full min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-barber-gold hover:bg-amber-400 text-black"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Proceed to Payment"}
                </Button>
              </form>
            </div>

            <div className="mt-8 text-center text-gray-600">
              <p>Need to change or cancel an appointment?</p>
              <p>
                Call us at (+234)8133855524 or email at ghosthebarber@gmail.com
              </p>
            </div>
          </div>
        </section>
      )}

      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        bookingDetails={formData}
        onConfirm={handleCompleteBooking}
      />
    </>
  );
};

export default BookingForm;
