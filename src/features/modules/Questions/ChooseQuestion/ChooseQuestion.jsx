import QuestionOption from "../QuestionOption/QuestionOption";
import styles from "./ChooseQuestion.module.css";
export default function ChooseQuestion({
  questionData,
  selectedOption,
  handleQuestionAnswer,
}) {
  return (
    <div className=" d-flex flex-column justify-content-center">
      <div className="mb-4">
        {questionData?.img == null ? (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: questionData?.content }}
              className={`fs-5 fw-bolder mb-3 user-select-none ${styles.question}`}
            ></div>
          </>
        ) : (
          <>
            <div
              dangerouslySetInnerHTML={{ __html: questionData?.content }}
              className={`fs-5 fw-bolder mb-3 user-select-none ${styles.question}`}
            ></div>
            <div className={`${styles.question_img}`}>
              <img src={questionData?.img} alt="question image" />
            </div>
          </>
        )}
      </div>
      <div>
        {questionData.options.map((option, idx) => (
          <QuestionOption
            key={`question-option-${option.id}`}
            option={option}
            selected={selectedOption == option.id}
            handleQuestionAnswer={handleQuestionAnswer}
            order={idx}
            numberingType={questionData.options_sorting_type?.value}
          />
        ))}
      </div>
    </div>
  );
}
