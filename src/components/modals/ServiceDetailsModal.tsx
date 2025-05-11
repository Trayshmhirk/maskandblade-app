import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    id: number;
    name: string;
    price: string;
    description: string;
    duration: string;
    details: string;
    image: string;
    badge?: string;
  };
}

const ServiceDetailsModal = ({
  isOpen,
  onClose,
  service,
}: ServiceDetailsModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[calc(100%-4rem)] smd:max-w-lg max-h-[85vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-2">
            {service.name}
          </DialogTitle>
          <div className="flex items-center justify-between">
            <span className="text-accent font-bold">{service.price}</span>
            <span className="text-sm text-gray-500">{service.duration}</span>
          </div>
        </DialogHeader>

        <div className="flex-1 space-y-6 py-4 custom-scrollbar overflow-y-auto pr-2">
          <div className="relative h-60 w-full rounded-lg overflow-hidden">
            <Image
              src={service.image}
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

          <div>
            <h3 className="font-semibold mb-2">Service Description</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Service Details</h3>
            <p className="text-gray-600">{service.details}</p>
          </div>
        </div>

        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="hover:bg-gray-200"
          >
            Back
          </Button>
          <Link href={`/appointment?serviceId=${service.id}`}>
            <Button className="w-full bg-accent hover:bg-amber-300 text-black">
              Book This Service
            </Button>
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailsModal;
