import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

// booking form schema
export const bookingSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  phone: yup.string().required("Phone number is required"),
  date: yup.string().required("Preferred date is required"),
  time: yup.string().required("Preferred time is required"),
  serviceId: yup.string().required("Please select a service"),
  location: yup.string().required("Location is required"),
  notes: yup.string().optional(),
});

// customer appointment validation form
export const appointmentSchema = yup.object({
  visitorName: yup
    .string()
    .required("Name is required")
    .min(2, "Name is too short"),
  purpose: yup
    .string()
    .required("Purpose is required")
    .min(2, "Purpose is too short"),
  host: yup.string().required("Host is required").min(2, "Host is too short"),
  time: yup.string().required("Time is required"),
  notes: yup.string().optional(),
  email: yup.string().required("Email is required").email("Invalid email"),
  phone: yup
    .string()
    .required("Phone is required")
    .min(10, "Phone is too short"),
});

export type AppointmentFormValues = yup.InferType<typeof appointmentSchema>;
