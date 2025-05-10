"use client";
import ServiceDetailsModal from "@/components/modals/ServiceDetailsModal";
import { Button } from "@/components/ui/button";
import { serviceCategories } from "@/lib/data/serviceCategories";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ServicesOffered = () => {
  const [activeCategory, setActiveCategory] = useState<string>("hair");
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleService = (id: number) => {
    const category = serviceCategories.find((cat) => cat.id === activeCategory);
    const service = category?.services.find((s) => s.id === id);

    if (service) {
      setSelectedService(service);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="app_container">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-heading mb-4 text-primary">
            Our <span className="text-accent">Services</span>
          </h1>
          <div className="mx-auto h-1 w-24 bg-accent mb-6" />
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Premium grooming services tailored to your unique style
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center px-5 py-2 rounded-full transition-colors shadow-sm cursor-pointer ${
                activeCategory === category.id
                  ? "bg-accent text-black"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="max-w-[400px] md:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories
            .find((cat) => cat.id === activeCategory)
            ?.services.map((service) => (
              <div
                key={service.id}
                className="relative bg-white border-2 border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Service Image */}
                <div className="relative h-60 w-full">
                  <Image
                    src={`${service.image}`}
                    alt={service.name}
                    fill
                    className="object-cover"
                    quality={85}
                  />
                  {service.badge && (
                    <div className="absolute top-4 right-4 bg-accent text-black px-3 py-1 text-xs font-bold rounded-full">
                      {service.badge}
                    </div>
                  )}
                </div>

                {/* Service Info */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{service.name}</h3>
                    <span className="text-accent font-bold">
                      {service.price}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Bottom row pushed to bottom */}
                  <div className="flex justify-between items-center mt-auto pt-2">
                    <span className="text-sm text-gray-500">
                      {service.duration}
                    </span>

                    <Button
                      variant="ghost"
                      className="text-accent py-1 px-2"
                      onClick={() => toggleService(service.id)}
                    >
                      <span className="flex items-center">
                        More details <ChevronDown className="ml-1 h-4 w-4" />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <ServiceDetailsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          service={selectedService}
        />
      )}
    </section>
  );
};

export default ServicesOffered;
