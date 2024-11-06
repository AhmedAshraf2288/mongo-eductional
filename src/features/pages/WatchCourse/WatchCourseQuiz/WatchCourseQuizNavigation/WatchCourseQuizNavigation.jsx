import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "../../../../../components/Button/Button";
import styles from "./WatchCourseQuizNavigation.module.css";

export default function WatchCourseQuizNavigation({
  totalQuestions,
  currQuestion,
  setCurrQuestion,
  submitting,
  setSubmitting,
}) {
  return (
    <div>
      <div className={`${styles.navigation} ${submitting ? "" : "mb-5"}`}>
        {[...Array(totalQuestions).keys()].map((question,) => {
          return (
            <div
              key={`question-navigation-item-${question}`}
              onClick={() => {
                setCurrQuestion(question);
                setSubmitting(false);
              }}
              className={`${styles.navigation__item} ${currQuestion == question ? styles["navigation__item--active"] : ""}`}
            >
              {question + 1}
            </div>
          );
        })}
      </div>

      {!submitting && (
        <div
          className={`${styles.next_prev} d-flex align-items-center justify-content-center`}
        >
          {currQuestion != 0 && (
            <Button
              className="d-flex align-items-center"
              onClick={() => {
                setCurrQuestion(currQuestion - 1);
              }}
            >
              <IoIosArrowForward />
              <span style={{ paddingBottom: "2px" }}>السؤال السابق</span>
            </Button>
          )}
          {currQuestion != totalQuestions - 1 && (
            <Button
             
              className="d-flex align-items-center"
              onClick={() => {
                setCurrQuestion(currQuestion + 1);
              }}
            >
              <span style={{ paddingBottom: "2px" }}>السؤال التالي</span>
              <IoIosArrowBack />
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
