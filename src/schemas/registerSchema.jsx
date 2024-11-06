import * as yup from "yup";

const registerSchema = yup.object().shape({
  name: yup.string().required("Name field is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
  phone: yup
    .number()
    .required("Phone field is required")
    .min(0, "Phone field cannot be negative"),
  password: yup
    .string()
    .required("Password field is required")
    .min(8, "Password should be at least 8 characters"),
  password_confirmation: yup
    .string()
    .required("Confirm password field is required")
    .oneOf([yup.ref("password")], "Passwords does not match"),
});

export default registerSchema;
