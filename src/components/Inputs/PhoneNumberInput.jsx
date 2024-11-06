import Error from "../Error/Error";
import RequiredInd from "../RequiredInd/RequiredInd";
import styles from "./Inputs.module.css";
import IntlTelInput from "react-intl-tel-input-18";

export default function PhoneNumberInput({
  label,
  id,
  error,
  backError,
  className,
  row,
  required,
  onChange,
  value
}) {
  return (
    <div
      className={`inp-group flex-column text-inp d-flex ${
        row ? "flex-md-row align-items-md-center gap-3" : "flex-column gap-2"
      }  w-100 ${className}`}
    >
      <div className="d-flex gap-2">
        <label className="modal__label m-0" htmlFor={id}>
          {label} {row ? ":" : ""}
        </label>{" "}
        {required ? <RequiredInd /> : ""}
      </div>
      <div className="w-100">
        <IntlTelInput
          containerClassName="intl-tel-input w-100"
          inputClassName={`${styles.input} w-100`}
          onPhoneNumberChange={onChange}
          defaultCountry="eg"
          value={value}
        />
        {<Error>{backError || error}</Error>}
      </div>
    </div>
  );
}
