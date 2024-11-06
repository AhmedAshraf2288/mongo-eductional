import { Field } from "formik";
import Error from "../Error/Error";
import RequiredInd from "../RequiredInd/RequiredInd";
import styles from "./Inputs.module.css";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function TextInput({
  label,
  icon,
  placeholder,
  id,
  type,
  name,
  error,
  backError,
  className,
  disabled,
  required,
  onChange,
  onBlur,
  value,
  as,
  center,
}) {
  const [inputType, setInputType] = useState(type || "text");

  return (
    <div
      className={`${styles["inp-group"]} flex-column text-inp d-flex mb-4
        flex-column w-100 ${className}`}
    >
      <div className={`d-flex gap-2 ${center ? "justify-content-center" : ""}`}>
        <label className="modal__label m-0 d-flex gap-2" htmlFor={id}>
          <span className={`${styles.icon}`}>{icon}</span> {label}
        </label>{" "}
        {required ? <RequiredInd /> : ""}
      </div>
      <div className="w-100">
        <div className="position-relative">
          {type == "password" && (
            <div
              className="inp-eye position-absolute end-0 top-50 translate-middle-y px-3 cursor-pointer"
              onClick={() => {
                console.log("Here");
                setInputType((prev) =>
                  prev == "password" ? "text" : "password"
                );
              }}
            >
              {inputType == "password" ? <FaEyeSlash /> : <FaEye />}
            </div>
          )}
          {as == "field" ? (
            <TextField
              type={inputType}
              placeholder={placeholder}
              name={name}
              id={id}
              disabled={disabled}
              onChange={onChange}
            />
          ) : (
            <TextInp
              type={inputType}
              placeholder={placeholder}
              name={name}
              id={id}
              disabled={disabled}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        </div>
        {<Error>{backError || error}</Error>}
      </div>
    </div>
  );
}

function TextField({ type, placeholder, name, id, disabled, onChange }) {
  let otherProps = {};
  if (onChange) otherProps = { onChange };
  return (
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      className={`${styles.input} ${styles["text-box"]} w-100 mb-1`}
      disabled={disabled}
      {...otherProps}
    />
  );
}

function TextInp({
  type,
  placeholder,
  name,
  id,
  disabled,
  onChange,
  onBlur,
  value,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={id}
      className={`${styles.input} ${styles["text-box"]} w-100 mb-1`}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
    />
  );
}
