import range from "lodash.range";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const years = range(1900, new Date().getFullYear() + 10, 1);
const months = [
  { value: "January", label: "يناير" },
  { value: "February", label: "فبراير" },
  { value: "March", label: "مارس" },
  { value: "April", label: "إبريل" },
  { value: "May", label: "مايو" },
  { value: "June", label: "يونيو" },
  { value: "July", label: "يوليو" },
  { value: "August", label: "أغسطس" },
  { value: "September", label: "سبتمبر" },
  { value: "October", label: "أكتوبر" },
  { value: "November", label: "نوفمبر" },
  { value: "December", label: "ديسمبر" },
];

export default function DateCustomHeader({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
})
{
  return (
    <div className="date__picker">
      <button
        type="button"
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        className="date__button"
      >
        <GrFormNext />
      </button>
      <select
        value={new Date(date).getFullYear()}
        onChange={({ target: { value } }) => changeYear(value)}
        className="p-1"
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <select
        value={months[new Date(date).getMonth()].value}
        onChange={({ target: { value } }) =>
          changeMonth(
            months.indexOf(months.find((month) => month.value == value))
          )
        }
        className="p-1"
      >
        {months.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <button
        type="button"
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        className="date__button"
      >
        <GrFormPrevious />
      </button>
    </div>
  );
}