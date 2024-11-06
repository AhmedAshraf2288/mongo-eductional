import { Field } from "formik";
import Error from "../Error/Error";
import RequiredInd from "../RequiredInd/RequiredInd";
import styles from './Inputs.module.css'

export default function TextInput({
  label,
  placeholder,
  id,
  type,
  changeHandler,
  value,
  name,
  error,
  className,
  row,
  disabled,
  required,
}) {
  return (
    <div
      className={`inp-group flex-column text-inp d-flex ${
        row ? "flex-md-row align-items-md-center gap-3" : "flex-column gap-2"
      }  w-100 ${className}`}
    >
      <div className="d-flex gap-2">
        <label className="modal__label m-0">
          {label} {row ? ":" : ""}
        </label>{" "}
        {required ? <RequiredInd /> : ""}
      </div>
      <div className="w-100">
        <Field
          type={type}
          name={name}
          placeholder={placeholder}
          id={id}
          onChange={changeHandler}
          className={`${styles.input} ${styles['text-box']} w-100 mb-1`}
          disabled={disabled}
        />
        {<Error>{error}</Error>}
      </div>
    </div>
  );
}
