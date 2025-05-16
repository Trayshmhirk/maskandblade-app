"use client";
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  User,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Plus,
} from "lucide-react";
import { toast } from "sonner";
import { Appointment } from "@/interface/appointments";
import AddEditAppointmentModal from "@/components/modals/AddEditAppointmentModal";
import { Button } from "@/components/ui/button";
import EmptyData from "@/components/common/EmptyData";
import RenderCalendarDays from "./RenderCalendarDays";

const CustomerAppointments = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching appointments
    const timer = setTimeout(() => {
      // Sample appointment data
      const sampleAppointments: Appointment[] = [
        {
          id: "a1",
          name: "Signature Cut",
          time: "09:30 AM",
          date: String(
            new Date(currentDate.getFullYear(), currentDate.getMonth(), 12)
          ),
          notes: "Position: Marketing Manager",
          email: "alice@example.com",
          phone: "555-1234",
          serviceId: "1",
          location: "",
        },
        {
          id: "a2",
          name: "Hair Design",
          time: "11:00 AM",
          date: String(
            new Date(currentDate.getFullYear(), currentDate.getMonth(), 15)
          ),
          notes: "Quarterly review",
          email: "mark@clientcompany.com",
          phone: "555-5678",
          serviceId: "3",
          location: "",
        },
        {
          id: "a3",
          name: "Executive Refresh",
          time: "02:30 PM",
          date: String(new Date()),
          notes: "Contract renewal",
          email: "sarah@vendor.com",
          phone: "555-9012",
          serviceId: "7",
          location: "",
        },
        {
          id: "a4",
          name: "Royal Treatment",
          time: "10:00 AM",
          date: String(new Date()),
          notes: "New system onboarding",
          email: "david@training.com",
          phone: "555-3456",
          serviceId: "5",
          location: "",
        },
      ];

      setAppointments(sampleAppointments);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateSelect = (date: number) => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      date
    );
    setSelectedDate(newDate);
  };

  const handleAddAppointment = () => {
    setModalMode("add");
    setShowModal(true);
  };

  const handleEditAppointment = (appointment: Appointment) => {
    setModalMode("edit");
    setSelectedAppointment(appointment);
    setShowModal(true);
  };

  const handleDeleteAppointment = (id: string) => {
    if (window.confirm("Are you sure you want to delete this appointment?")) {
      setAppointments(
        appointments.filter((appointment) => appointment.id !== id)
      );
      toast.success("Appointment deleted successfully");
    }
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Filter appointments for the selected date
  const filteredAppointments = appointments.filter((appointment) => {
    const appointmentDate = new Date(appointment.date);

    return (
      appointmentDate.getDate() === selectedDate.getDate() &&
      appointmentDate.getMonth() === selectedDate.getMonth() &&
      appointmentDate.getFullYear() === selectedDate.getFullYear()
    );
  });

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-600 dark:text-gray-300">Loading schedules...</p>
      </div>
    );
  }

  return (
    <>
      <header className="mb-10">
        <h1 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white flex items-center gap-2">
          <Calendar size={26} className="text-accent" />
          My Appointments
        </h1>
        <p className="text-gray-600 dark:text-gray-300">Manage appointments</p>
      </header>

      <div className="max-w-5xl">
        <div className="flex flex-col gap-7">
          {/* Calendar */}
          <div className="w-full h-fit max-w-md bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                >
                  <ChevronLeft
                    size={20}
                    className="text-gray-800 dark:text-gray-300"
                  />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 cursor-pointer"
                >
                  <ChevronRight
                    size={20}
                    className="text-gray-800 dark:text-gray-300"
                  />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1.5 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center font-medium text-gray-600 text-sm"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              <RenderCalendarDays
                currentDate={currentDate}
                selectedDate={selectedDate}
                appointments={appointments}
                handleDateSelect={handleDateSelect}
              />
            </div>
          </div>

          {/* Selected Date Appointments */}
          <div className="w-full bg-white dark:bg-gray-800 p-4 md:p-6 pb-5 md:pb-7 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
              <Button
                onClick={handleAddAppointment}
                className="size-10 p-2 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 text-white rounded-md transition-colors duration-300 flex items-center"
              >
                <Plus strokeWidth={2.5} size={20} className="size-5" />
              </Button>
            </div>

            {filteredAppointments.length === 0 ? (
              <EmptyData message="No appointments scheduled for this date." />
            ) : (
              <div className="grid smd:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="relative w-full p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div className="mb-7">
                      <h3 className="font-semibold text-gray-800 dark:text-white mb-3">
                        {appointment.name}
                      </h3>

                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-1">
                        <Clock size={14} className="mr-1" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-1">
                        <Bookmark size={14} className="mr-1" />
                        Service Name: {appointment.serviceId}
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                        <User size={14} className="mr-1" />
                        Email: {appointment.email}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Button
                        onClick={() => handleEditAppointment(appointment)}
                        className="w-full bg-accent/70 hover:bg-amber-300 text-primary transition-colors duration-200"
                      >
                        Reschedule
                      </Button>
                      <Button
                        onClick={() => handleDeleteAppointment(appointment.id)}
                        className="w-full bg-transparent hover:bg-red-500/10 border border-red-400 text-red-500 transition-colors duration-200"
                      >
                        Cancel Appointment
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Add/Edit Appointment Modal */}
      {showModal && (
        <AddEditAppointmentModal
          setAppointments={setAppointments}
          selectedAppointment={selectedAppointment}
          modalMode={modalMode}
          appointments={appointments}
          setShowModal={setShowModal}
          selectedDate={selectedDate}
        />
      )}
    </>
  );
};

export default CustomerAppointments;
