import ReactDOMServer from "react-dom/server";
import Select from "react-select";
import Error from "../Error/Error";
import RequiredInd from "../RequiredInd/RequiredInd";
import styles from './Inputs.module.css'

export default function SelectInp({
  options,
  className,
  placeholder,
  title,
  id,
  value,
  onChange,
  onInputChange,
  loading,
  error,
  row,
  disabled,
  required,
  name
}) {
  return (
    <div
      className={`d-flex w-100 flex-column  ${
        row ? "flex-md-row align-items-md-center gap-3" : "flex-column gap-2"
      } ${className ? className : ""}`}
    >
      <div className="d-flex gap-2">
        <label htmlFor={id} className={`${styles.input__label}`}>
          {title} {row ? ":" : ""}
        </label>{" "}
        {required ? <RequiredInd /> : ""}
      </div>
      <div className="w-100 h-100">
        <Select
          options={options}
          placeholder={placeholder}
          value={value.value ? value : ""}
          onChange={onChange}
          name={name}
          inputId={id}
          isDisabled={disabled}
          onInputChange={onInputChange || (() => {})}
          className={`${styles.select} mb-1`}
          isLoading={loading}
          filterOption={(option, inputValue) => {
            if (inputValue.trim().length == 0) return true;
            if (option.label.props) {
              return ReactDOMServer.renderToString(option.label)
                .toLowerCase()
                .includes(inputValue.toLowerCase());
            } else {
              return option.label
                .toLowerCase()
                .includes(inputValue.toLowerCase());
            }
          }}
        />
        {error && <Error>{error}</Error>}
      </div>
    </div>
  );
}
