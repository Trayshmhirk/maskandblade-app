import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});
