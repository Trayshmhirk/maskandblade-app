// components/gallery/GalleryGrid.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/lib/data/gallery-images";

interface FilterButton {
  id: string;
  label: string;
}

const filterButtons: FilterButton[] = [
  { id: "all", label: "All Work" },
  { id: "haircuts", label: "Haircuts" },
  { id: "beard", label: "Beard Care" },
  { id: "shaving", label: "Shaving" },
  { id: "others", label: "Others" },
];

export const GalleryGrid = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredImages =
    activeCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openModal = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="app_container">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filterButtons.map(({ id, label }) => (
            <Button
              key={id}
              variant={activeCategory === id ? "default" : "outline"}
              onClick={() => setActiveCategory(id)}
              className="rounded-full"
            >
              {label}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => openModal(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={500}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-medium text-lg px-4 py-2 bg-black/50 rounded-lg">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-accent transition-colors cursor-pointer"
              >
                <X size={32} />
              </button>

              <div className="relative w-full h-full">
                <Image
                  src={
                    galleryImages.find((img) => img.id === selectedImage)!.src
                  }
                  alt={
                    galleryImages.find((img) => img.id === selectedImage)!.alt
                  }
                  width={1200}
                  height={800}
                  className="object-contain w-full h-full max-h-[80vh]"
                />
              </div>

              <div className="mt-4 text-center text-white">
                <p className="text-lg">
                  {galleryImages.find((img) => img.id === selectedImage)!.alt}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
