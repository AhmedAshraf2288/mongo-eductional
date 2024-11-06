import Error from "../Error/Error";
import RequiredInd from "../RequiredInd/RequiredInd";
import styles from "./Inputs.module.css";

export default function CheckboxInput({
  label,
  id,
  type,
  value,
  handleChange,
  name,
  error,
  className,
  disabled,
  required,
}) {
  return (
    <div
      className={`inp-group flex-column text-inp d-flex flex-md-row align-items-md-center gap-2 w-100 ${className}`}
    >
      <div>
        <input
          type={type || 'checkbox'}
          name={name}
          id={id}
          className={`${styles["checkbox"]}`}
          onChange={handleChange}
          value={value || ""}
          disabled={disabled}
        />
        {error && <Error>{error}</Error>}
      </div>
      <div className="d-flex gap-2">
        <label className="modal__label m-0" htmlFor={id}>{label}</label>{" "}
        {required ? <RequiredInd /> : ""}
      </div>
    </div>
  );
}
