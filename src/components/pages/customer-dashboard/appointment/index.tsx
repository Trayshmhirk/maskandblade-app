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
  X,
  Edit,
  Trash2,
} from "lucide-react";
import { toast } from "sonner";
import { Appointment } from "@/interface/appointments";
import AddEditAppointmentModal from "@/components/modals/AddEditAppointmentModal";

const CustomerAppointments = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);

  const [loading, setLoading] = useState(true);

  // Generate calendar days
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  useEffect(() => {
    // Simulate fetching appointments
    const timer = setTimeout(() => {
      // Sample appointment data
      const sampleAppointments = [
        {
          id: "a1",
          visitorName: "Alice Brown",
          purpose: "Interview",
          host: "HR Department",
          time: "09:30 AM",
          date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 12),
          notes: "Position: Marketing Manager",
          email: "alice@example.com",
          phone: "555-1234",
        },
        {
          id: "a2",
          visitorName: "Mark Wilson",
          purpose: "Client Meeting",
          host: "Sales Team",
          time: "11:00 AM",
          date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
          notes: "Quarterly review",
          email: "mark@clientcompany.com",
          phone: "555-5678",
        },
        {
          id: "a3",
          visitorName: "Sarah Johnson",
          purpose: "Vendor Discussion",
          host: "Procurement",
          time: "02:30 PM",
          date: new Date(),
          notes: "Contract renewal",
          email: "sarah@vendor.com",
          phone: "555-9012",
        },
        {
          id: "a4",
          visitorName: "David Lee",
          purpose: "Training",
          host: "IT Department",
          time: "10:00 AM",
          date: new Date(),
          notes: "New system onboarding",
          email: "david@training.com",
          phone: "555-3456",
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

  // Build calendar
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const firstDayOfMonth = getFirstDayOfMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

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
  const filteredAppointments = appointments.filter(
    (appointment) =>
      appointment.date.getDate() === selectedDate.getDate() &&
      appointment.date.getMonth() === selectedDate.getMonth() &&
      appointment.date.getFullYear() === selectedDate.getFullYear()
  );

  const renderCalendarDays = () => {
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-10 w-10"></div>);
    }

    // Cells for days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        day
      );
      const isToday =
        date.getDate() === new Date().getDate() &&
        date.getMonth() === new Date().getMonth() &&
        date.getFullYear() === new Date().getFullYear();

      const isSelected =
        date.getDate() === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      const hasAppointments = appointments.some(
        (appointment) =>
          appointment.date.getDate() === day &&
          appointment.date.getMonth() === date.getMonth() &&
          appointment.date.getFullYear() === date.getFullYear()
      );

      days.push(
        <div
          key={day}
          className={`h-10 w-10 flex items-center justify-center font-medium rounded-full cursor-pointer transition-colors duration-300
          ${isToday ? "bg-blue-100 dark:bg-blue-900/40" : ""}
          ${
            isSelected
              ? "bg-blue-500 dark:bg-blue-600 text-white"
              : "dark:hover:bg-gray-700"
          }
          ${
            hasAppointments && !isSelected && !isToday
              ? "bg-accent/30 text-black"
              : ""
          }
          hover:bg-gray-200 `}
          onClick={() => handleDateSelect(day)}
        >
          <span
            className={`${
              isSelected || isToday
                ? "dark:text-white"
                : "text-gray-800 dark:text-white"
            }`}
          >
            {day}
          </span>
        </div>
      );
    }

    return days;
  };

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
        <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800 dark:text-white flex items-center gap-2">
          <Calendar size={28} className="text-accent" />
          My Appointments
        </h1>
        <p className="text-gray-600 dark:text-gray-300">Manage appointments</p>
      </header>

      <div className="max-w-5xl">
        <div className="flex flex-wrap gap-6">
          {/* Calendar */}
          <div className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <ChevronLeft
                    size={20}
                    className="text-gray-800 dark:text-gray-300"
                  />
                </button>
                <button
                  onClick={handleNextMonth}
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <ChevronRight
                    size={20}
                    className="text-gray-800 dark:text-gray-300"
                  />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div
                  key={day}
                  className="text-center font-medium text-gray-600 text-sm"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">{renderCalendarDays()}</div>
          </div>

          {/* Selected Date Appointments */}
          <div className="w-full max-w-sm bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                {selectedDate.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </h2>
              <button
                onClick={handleAddAppointment}
                className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 flex items-center"
              >
                <Plus size={18} />
              </button>
            </div>

            {filteredAppointments.length === 0 ? (
              <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                No appointments scheduled for this date.
              </div>
            ) : (
              <div className="space-y-4">
                {filteredAppointments.map((appointment) => (
                  <div
                    key={appointment.id}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {appointment.visitorName}
                      </h3>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleEditAppointment(appointment)}
                          className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() =>
                            handleDeleteAppointment(appointment.id)
                          }
                          className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-1">
                      <Clock size={14} className="mr-1" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm mb-1">
                      <Bookmark size={14} className="mr-1" />
                      {appointment.purpose}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <User size={14} className="mr-1" />
                      Host: {appointment.host}
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
