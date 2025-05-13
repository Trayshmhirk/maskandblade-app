import React, { useEffect } from "react";
import { Appointment } from "@/interface/appointments";
import { X } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { appointmentSchema } from "@/validation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";

interface AddEditAppointmentModalProps {
  setShowModal: (arg: boolean) => void;
  modalMode: "add" | "edit";
  selectedDate: Date;
  setAppointments: (arg: Appointment[]) => void;
  appointments: Appointment[];
  selectedAppointment: Appointment | null;
}

export type AppointmentFormValues = Omit<Appointment, "id" | "date">;

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
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(appointmentSchema),
    defaultValues: {
      visitorName: "",
      purpose: "",
      host: "",
      time: "",
      notes: "",
      email: "",
      phone: "",
    },
  });

  useEffect(() => {
    if (modalMode === "edit" && selectedAppointment) {
      reset({
        visitorName: selectedAppointment.visitorName,
        purpose: selectedAppointment.purpose,
        host: selectedAppointment.host,
        time: selectedAppointment.time,
        notes: selectedAppointment.notes,
        email: selectedAppointment.email,
        phone: selectedAppointment.phone,
      });
    }
  }, [modalMode, selectedAppointment, reset]);

  const onSubmit = (data: AppointmentFormValues) => {
    const appointmentData: Appointment = {
      ...data,
      date: selectedDate,
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
      <DialogContent className="sm:max-w-[calc(100%-3rem)] smd:max-w-lg md:max-w-[600px] max-h-[85vh] flex flex-col overflow-hidden">
        <DialogHeader>
          <DialogTitle>
            {modalMode === "add" ? "Add New Appointment" : "Edit Appointment"}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Visitor Name
              </label>
              <input
                type="text"
                placeholder="Visitor Name"
                {...register("visitorName")}
                className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
              />
              {errors.visitorName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.visitorName.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Purpose
                </label>
                <input
                  type="text"
                  placeholder="Purpose"
                  {...register("purpose")}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                />
                {errors.purpose && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.purpose.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Time
                </label>
                <input
                  type="time"
                  {...register("time")}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                />
                {errors.time && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.time.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Host
              </label>
              <input
                type="text"
                placeholder="Host"
                {...register("host")}
                className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
              />
              {errors.host && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.host.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email")}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Phone"
                  {...register("phone")}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Notes
              </label>

              <textarea
                placeholder="Notes"
                {...register("notes")}
                className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                rows={3}
              ></textarea>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-lg transition-all duration-200"
              >
                {modalMode === "add" ? "Add Appointment" : "Update Appointment"}
              </button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddEditAppointmentModal;
