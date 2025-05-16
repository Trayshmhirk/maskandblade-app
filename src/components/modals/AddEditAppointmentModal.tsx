import React, { useEffect } from "react";
import { Appointment } from "@/interface/appointments";
import { toast } from "sonner";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { bookingSchema } from "@/validation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { flattenServices } from "@/components/pages/appointment/BookingForm";
import { Button } from "@/components/ui/button";

interface AddEditAppointmentModalProps {
  setShowModal: (arg: boolean) => void;
  modalMode: "add" | "edit";
  selectedDate: Date;
  setAppointments: (arg: Appointment[]) => void;
  appointments: Appointment[];
  selectedAppointment: Appointment | null;
}

export type AppointmentFormValues = Omit<Appointment, "id">;

const AddEditAppointmentModal = ({
  setShowModal,
  modalMode,
  selectedDate,
  setAppointments,
  appointments,
  selectedAppointment,
}: AddEditAppointmentModalProps) => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      location: "",
      serviceId: selectedAppointment?.serviceId,
      notes: "",
    },
  });

  useEffect(() => {
    if (modalMode === "edit" && selectedAppointment) {
      reset({
        name: selectedAppointment.name,
        email: selectedAppointment.email,
        phone: selectedAppointment.phone,
        date: selectedAppointment.date,
        time: selectedAppointment.time,
        location: selectedAppointment.location,
        serviceId: selectedAppointment.serviceId,
        notes: selectedAppointment.notes,
      });
    }
  }, [modalMode, selectedAppointment, reset]);

  const onSubmit = (data: AppointmentFormValues) => {
    const appointmentData: Appointment = {
      ...data,
      date: String(selectedDate),
      id:
        modalMode === "edit" && selectedAppointment
          ? selectedAppointment.id
          : `a${Math.random().toString(36).substring(7)}`,
    };

    if (modalMode === "add") {
      setAppointments([...appointments, appointmentData]);
      toast.success("Appointment added");
    } else if (modalMode === "edit") {
      setAppointments(
        appointments.map((appt) =>
          appt.id === selectedAppointment?.id ? appointmentData : appt
        )
      );
      toast.success("Appointment updated");
    }

    setShowModal(false);
    reset();
  };

  return (
    <Dialog open onOpenChange={setShowModal}>
      <DialogContent className="sm:max-w-[calc(100%-3rem)] smd:max-w-lg md:max-w-[600px] max-h-[85vh] bg-white flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle className="mb-2">
            {modalMode === "add" ? "Add New Appointment" : "Edit Appointment"}
          </DialogTitle>
        </DialogHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex-1 py-4 px-1 space-y-4 custom-scrollbar overflow-y-auto"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input
              type="text"
              placeholder="Visitor Name"
              {...register("name")}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <Input type="date" {...register("date")} />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <Input type="time" {...register("time")} />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">
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
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full h-10">
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {flattenServices().map((service) => (
                      <SelectItem key={service.id} value={String(service.id)}>
                        {service.categoryName} - {service.name} ({service.price}
                        )
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

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input type="email" placeholder="Email" {...register("email")} />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <Input type="text" placeholder="Phone" {...register("phone")} />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>

            <Textarea
              placeholder="Any specific requests?"
              {...register("notes")}
              className="w-full min-h-[100px]"
            />
          </div>

          <DialogFooter>
            <div className="flex justify-end space-x-3 mt-6">
              <Button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                Cancel
              </Button>

              <Button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-white rounded-lg transition-all duration-200"
              >
                {modalMode === "add" ? "Add Appointment" : "Update Appointment"}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditAppointmentModal;
