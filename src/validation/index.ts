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
