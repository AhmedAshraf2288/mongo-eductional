import styles from "./QuestionOption.module.css";

export default function QuestionOption({
  option,
  handleQuestionAnswer,
  selected,
  noBorders,
  order,
}) {
  return (
    <div
      className={`${styles.answer} user-select-none ${
        noBorders ? "rounded-0" : ""
      } mb-4 gap-2`}
      onClick={() => handleQuestionAnswer(option.id)}
    >
      <input
        checked={selected}
        className={`${styles.answer__checkbox}`}
        type="checkbox"
        id={`${option.content}-${order}`}
      />
      <label
        htmlFor={`${option.content}-${order}`}
        className={`${styles.answer__text}`}
      >
        {option.type.value == 1 ? (
          option.content
        ) : (
          <div className={styles.question_option_image}>
            <img
              src={option.content}
              alt="option image"
            />
          </div>
        )}
      </label>
    </div>
  );
}
