"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import PaymentModal from "@/components/modals/PaymentModal";
import { serviceCategories as serviceData } from "@/lib/data/serviceCategories";
import SuccessMessage from "./SuccessMessage";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bookingSchema } from "@/validation";

export const flattenServices = () =>
  serviceData.flatMap((category: any) =>
    category.services.map((service: any) => ({
      ...service,
      categoryName: category.name,
    }))
  );

const BookingForm = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const defaultServiceId = searchParams.get("serviceId") || "";

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      location: "",
      serviceId: defaultServiceId,
      notes: "",
    },
  });

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const formData = watch(); // watch form values for payment details

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
    }
  };

  const onValid = () => {
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
          <div className="app_container">
            {/* Header */}
            <div className="text-center mb-10">
              <h1 className="text-3xl md:text-4xl font-heading mb-4 text-primary">
                Book Your <span className="text-accent">Appointment</span>
              </h1>
              <div className="mx-auto h-1 w-24 bg-accent mb-6" />
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Reserve your spot for premium grooming services
              </p>
            </div>

            <div className="max-w-2xl mx-auto bg-white p-8 border border-gray-200 rounded-lg shadow-md">
              <h2 className="text-lg md:text-2xl font-bold mb-6 text-center">
                Personal & Appointment Details
              </h2>

              <form onSubmit={handleSubmit(onValid)} noValidate>
                {/* Name */}
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <Input
                    {...register("name")}
                    id="name"
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <Input
                    {...register("phone")}
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="date"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Date
                    </label>
                    <Input
                      {...register("date")}
                      id="date"
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                    />
                    {errors.date && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.date.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="time"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Preferred Time
                    </label>
                    <Input {...register("time")} id="time" type="time" />
                    {errors.time && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.time.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Select */}
                <div className="mb-4">
                  <label
                    htmlFor="serviceId"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Service
                  </label>

                  <Controller
                    control={control}
                    name="serviceId"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger className="w-full h-10">
                          <SelectValue placeholder="Choose a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {flattenServices().map((service) => (
                            <SelectItem
                              key={service.id}
                              value={String(service.id)}
                            >
                              {service.categoryName} - {service.name} (
                              {service.price})
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.serviceId && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.serviceId.message}
                    </p>
                  )}
                </div>

                {/* Image Upload */}
                <div className="mb-4">
                  <label
                    htmlFor="hairstyle"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Sample Hairstyle (optional)
                  </label>
                  <Input
                    id="hairstyle"
                    type="file"
                    accept="image/*"
                    onChange={onImageChange}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Upload an image of the style you&apos;d like to achieve
                  </p>
                </div>

                {/* Location */}
                <div className="mb-4">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Location
                  </label>
                  <Input
                    {...register("location")}
                    id="location"
                    placeholder="Enter your location"
                  />
                  {errors.location && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.location.message}
                    </p>
                  )}
                </div>

                {/* Notes */}
                <div className="mb-6">
                  <label
                    htmlFor="notes"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Notes (optional)
                  </label>
                  <Textarea
                    {...register("notes")}
                    id="notes"
                    placeholder="Any specific requests?"
                    className="w-full min-h-[120px]"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-amber-300 text-black"
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
        isSubmitting={isSubmitting}
      />
    </>
  );
};

export default BookingForm;
