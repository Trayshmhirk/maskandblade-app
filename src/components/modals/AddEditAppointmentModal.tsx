import React, { useEffect, useState } from "react";
import { Appointment } from "@/interface/appointments";
import { X } from "lucide-react";
import { toast } from "sonner";

interface AddEditAppointmentModalProps {
  setShowModal: (arg: boolean) => void;
  modalMode: "add" | "edit";
  selectedDate: Date;
  setAppointments: (arg: Appointment[]) => void;
  appointments: Appointment[];
  selectedAppointment: Appointment | null;
}

const AddEditAppointmentModal = ({
  setShowModal,
  modalMode,
  selectedDate,
  setAppointments,
  appointments,
  selectedAppointment,
}: AddEditAppointmentModalProps) => {
  const [formData, setFormData] = useState({
    visitorName: "",
    purpose: "",
    host: "",
    time: "",
    notes: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    if (modalMode === "edit" && selectedAppointment) {
      setFormData({
        visitorName: selectedAppointment.visitorName,
        purpose: selectedAppointment.purpose,
        host: selectedAppointment.host,
        time: selectedAppointment.time,
        notes: selectedAppointment.notes,
        email: selectedAppointment.email,
        phone: selectedAppointment.phone,
      });
    }
  }, [modalMode, selectedAppointment]);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (modalMode === "add") {
      const newAppointment: Appointment = {
        id: `a${Date.now()}`,
        ...formData,
        date: selectedDate,
      };
      setAppointments([...appointments, newAppointment]);
      toast.success("Appointment added successfully");
    } else if (modalMode === "edit" && selectedAppointment) {
      const updatedAppointments = appointments.map((appointment) =>
        appointment.id === selectedAppointment.id
          ? { ...appointment, ...formData }
          : appointment
      );
      setAppointments(updatedAppointments);
      toast.success("Appointment updated successfully");
    }

    setShowModal(false);
  };

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center" />

      <div className="relative w-full max-w-lg bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-4 right-4 text-gray-600 cursor-pointer"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          {modalMode === "add" ? "Add New Appointment" : "Edit Appointment"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Visitor Name
              </label>
              <input
                type="text"
                name="visitorName"
                value={formData.visitorName}
                onChange={handleFormChange}
                className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Purpose
                </label>
                <input
                  type="text"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleFormChange}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Time
                </label>
                <input
                  type="text"
                  name="time"
                  value={formData.time}
                  onChange={handleFormChange}
                  placeholder="e.g. 09:30 AM"
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Host
              </label>
              <input
                type="text"
                name="host"
                value={formData.host}
                onChange={handleFormChange}
                className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  className="w-full p-2 border dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-800 dark:text-white transition-all duration-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Notes
              </label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleFormChange}
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
      </div>
    </>
  );
};

export default AddEditAppointmentModal;
