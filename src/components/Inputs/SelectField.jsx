import Select from "react-select";
import Error from "../Error/Error";
import styles from "./Inputs.module.css";
import { Field } from "formik";
import RequiredInd from "../RequiredInd/RequiredInd";
import { useStore } from "../../zustand/store";
import { useMemo } from "react";

export default function SelectField({
  options,
  name,
  error,
  backError,
  className = "",
  row = false,
  placeholder,
  title,
  id,
  required,
}) {

  return (
    <div
      className={`d-flex w-100 flex-column mb-4 ${
        row ? "flex-md-row align-items-md-center gap-3" : "flex-column gap-2"
      } ${className}`}
    >
      <div className="d-flex gap-2">
        <label htmlFor={id || name} className="modal__label">
          {title} {row ? ":" : ""}
        </label>
        {required && <RequiredInd />}
      </div>
      <div className="w-100 h-100">
        <Field
          name={name}
          id={id || name}
          component={SelectInp}
          options={options}
          className={`${styles.select} mb-1`}
          placeholder={placeholder}
        />
        {<Error>{backError || error}</Error>}
      </div>
    </div>
  );
}

const SelectInp = ({
  field,
  form,
  options,
  className,
  placeholder = "Select",
}) => {
  const theme = useStore((state) => state.theme);

  const customStyles = useMemo(() => {
    const isDarkTheme = theme === "dark";
    const textColor = isDarkTheme ? "white" : "black";
    const bgColor = isDarkTheme ? "#161717" : "white";

    return {
      container: (provided) => ({
        ...provided,
        width: "100%",
      }),
      option: (provided, { isFocused }) => ({
        ...provided,
        color: textColor,
        backgroundColor: isFocused
          ? isDarkTheme
            ? "#333"
            : "#f4f4f4"
          : bgColor,
        cursor: "pointer",
      }),
      control: (provided) => ({
        ...provided,
        backgroundColor: bgColor,
      }),
      placeholder: (provided) => ({
        ...provided,
        color: textColor,
      }),
      singleValue: (provided) => ({
        ...provided,
        color: textColor,
      }),
      input: (provided) => ({
        ...provided,
        color: textColor,
      }),
      menu: (provided) => ({
        ...provided,
        backgroundColor: bgColor,
        boxShadow: `0 0 10px 0px ${
          theme == "dark" ? "#ffffff6b" : "#0000006b"
        }`,
        border: `1px solid ${theme == "dark" ? "#ddd" : "#8F8F8F"}`,
        overflow: "hidden",
        color: textColor,
      }),
    };
  }, [theme]);

  return (
    <Select
      options={options}
      name={field.name}
      value={options?.find((option) => option.value === field.value) || null}
      className={className}
      onChange={(option) => form.setFieldValue(field.name, option.value)}
      onBlur={field.onBlur}
      placeholder={placeholder}
      styles={customStyles}
    />
  );
};
