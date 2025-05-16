import { Appointment } from "@/interface/appointments";
import React from "react";

interface RenderCalendarDaysProps {
  currentDate: Date;
  selectedDate: Date;
  appointments: Appointment[];
  handleDateSelect: (date: number) => void;
}

// Generate calendar days
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

const RenderCalendarDays = ({
  currentDate,
  selectedDate,
  appointments,
  handleDateSelect,
}: RenderCalendarDaysProps) => {
  // Build calendar
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

  const firstDayOfMonth = getFirstDayOfMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );

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

export default RenderCalendarDays;
