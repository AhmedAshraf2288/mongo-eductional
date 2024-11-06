
import { ErrorMessage } from "formik";
import DatePicker from "../../../features/components/DateInput/DatePicker/DatePicker";
import Error from "../../Error/Error";
import styles from '../Inputs.module.css'

export default function DateInput({
  date,
  name,
  setDate,
  initialValue,
  id,
  type,
  minDate,
  className,
  label,
  error,
  row,
}) {
  return (
    <div
      className={` d-flex gap-2 ${row ? "align-items-center" : "flex-column"
        } w-100 ${className} mb-4`}
    >
      <label className="modal__label">
        {label} {row ? ":" : ""}
      </label>
      <div className="w-100">
        <DatePicker
          date={date}
          setDate={setDate}
          initialValue={initialValue}
          id={id}
          type={type}
          minDate={minDate}
          className={`${styles["date"]}`}
        />
        {error ? <Error>{error}</Error> : <ErrorMessage name={name}/>}
      </div>
    </div>
  );
}
