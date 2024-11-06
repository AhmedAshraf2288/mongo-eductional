import styles from "./OTP.module.css";
import inputStyles from "../Inputs.module.css";
import { Fragment, useEffect, useMemo, useRef, useState } from "react";

export default function OTP({ setFieldValue, values, name, count }) {
  const [activeInput, setActiveInput] = useState(0);
  const inputRef = useRef();

  function handleInputChange(e, index) {
    const value = e.target.value;
    const newArr = [...values[name]];
    newArr[index] = value.replaceAll(/\D/g, "").slice(-1);
    setFieldValue(name, newArr);
    if (newArr[index] != "" && index + 1 != count) {
      setActiveInput((prev) => prev + 1);
    }
  }

  useEffect(() => {
    inputRef.current?.focus();
  }, [activeInput]);

  const fields = useMemo(() => {
    const fieldsArr = [];
    for (let i = 0; i < count; i++) {
      fieldsArr.push(
        <Fragment>
          <div className={`${styles["otp__input-div"]}`}>
            <input
              ref={activeInput == i ? inputRef : null}
              className={`${inputStyles.input} ${styles.otp__input} ${
                values.numbers[i] ? styles["otp__input--done"] : ""
              } h-100 w-100`}
              type="text"
              name={`numbers[${i}]`}
              value={values.numbers[i]}
              onChange={(e) => handleInputChange(e, i)}
              onKeyDown={(e) => {
                if (e.key == "Backspace" && i != 0) {
                  e.preventDefault();
                  const newArr = [...values[name]];
                  newArr[i] = "";
                  setFieldValue(name, newArr);
                  setActiveInput((prev) => prev - 1);
                }
              }}
              onFocus={() => {
                if (inputRef.current) inputRef.current.focus();
              }}
            />
          </div>
          {i + 1 < count ? <span>-</span> : ""}
        </Fragment>
      );
    }
    return fieldsArr;
  }, [activeInput, count, handleInputChange, name, setFieldValue, values]);

  return (
    <div className="d-flex gap-2 justify-content-between mb-3 align-items-center">
      {fields}
    </div>
  );
}
