import { useEffect, useState } from "react";
import "./DatePicker.css";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.min.css";
import { SlCalender } from "react-icons/sl";
import en from "date-fns/locale/en-US";
import moment from "moment";
import DateCustomHeader from '../CustomDateComponents/DateCustomHeader';
registerLocale("en-US", en);

export default function DatePicker({
  date,
  setDate,
  initialValue,
  id,
  type,
  minDate,
  className,
}) {
  date ? date = new Date(date) : "";

  const [currDate, setCurrDate] = useState(initialValue || date ? date : "");
  function changeCurrDate(newDate) {
    setCurrDate(newDate);
    setDate(getFormatedDate(newDate, type));
  }

  useEffect(() => {
    if (date == "") setCurrDate();
  }, [date]);

  useEffect(() => {
    if (currDate) setDate(getFormatedDate(currDate, type));
  }, [currDate]);

  return (
    <div className={`position-relative ${className || ""}`}>
      <ReactDatePicker
        showTimeSelect={type == "datetime" || type == "time"}
        showTimeSelectOnly={type == "time"}
        showMonthYearPicker={type == "month"}
        selected={currDate || ""}
        id={id}
        minDate={minDate}
        autoComplete="off"
        locale="en-US"
        placeholderText={
          type == "datetime"
            ? "dd / mm / yyyy  -- : --  --"
            : type == "time"
              ? "--:-- --"
              : type == "month"
                ? "mm / yyyy"
                : "dd / mm / yyyy"
        }
        dateFormat={
          type == "datetime"
            ? "dd / MM / yyyy hh:mm aa"
            : type == "time"
              ? "hh:mm aa"
              : type == "month"
                ? "MM / yyyy"
                : "dd / MM / yyyy"
        }
        onChange={changeCurrDate}
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <DateCustomHeader
            date={date}
            changeYear={changeYear}
            changeMonth={changeMonth}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
          />
        )}
      />
      <SlCalender className="date__icon" />
    </div>
  );
}

function getFormatedDate(date, type) {
  if (type == "datetime") return moment(date).format("YYYY-MM-DD hh:mm:ss");
  else if (type == "time") return moment(date).format("hh:mm:ss");
  else return moment(date).format("YYYY-MM-DD");
}
