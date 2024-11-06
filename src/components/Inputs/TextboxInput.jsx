import { Field } from "formik";
import Error from "../Error/Error";
import RequiredInd from "../RequiredInd/RequiredInd";
import styles from "./Inputs.module.css";

export default function TextboxInput({
  label,
  placeholder,
  id,
  name,
  backError,
  error,
  className,
  row,
  required,
  as,
  onChange,
  onBlur,
  value,
}) {
  return (
    <div
      className={`inp-group flex-column text-inp d-flex ${
        row ? "flex-md-row align-items-md-center gap-3" : "flex-column gap-2"
      } w-100 ${className}`}
    >
      <div className="d-flex gap-2">
        <label className="m-0 modal__label" htmlFor={id}>
          {label} {row ? ":" : ""}
        </label>{" "}
        {required ? <RequiredInd /> : ""}
      </div>
      <div className="w-100">
        {as == "field" ? (
          <TextBoxField placeholder={placeholder} name={name} id={id} />
        ) : (
          <TextBoxInp
            placeholder={placeholder}
            name={name}
            id={id}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
        <Error>{backError || error}</Error>
      </div>
    </div>
  );
}

function TextBoxField({ placeholder, name, id }) {
  return (
    <Field
      as="textarea"
      name={name}
      placeholder={placeholder}
      id={id}
      className={`${styles.input} ${styles["text-area"]} w-100`}
    />
  );
}

function TextBoxInp({
  placeholder,
  name,
  id,
  disabled,
  onChange,
  onBlur,
  value,
}) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      id={id}
      value={value || ""}
      className={`${styles.input} ${styles["text-box"]} w-100 mb-1`}
      disabled={disabled}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
}
