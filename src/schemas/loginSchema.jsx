import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email field is required"),
  password: yup.string().required("Password field is required"),
});

export default loginSchema;
