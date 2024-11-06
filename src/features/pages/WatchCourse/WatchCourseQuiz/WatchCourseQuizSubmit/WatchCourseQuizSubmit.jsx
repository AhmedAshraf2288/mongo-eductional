import Button from "../../../../../components/Button/Button";
import styles from "./WatchCourseQuizSubmit.module.css";
import { useMemo } from "react";

export default function WatchCourseQuizSubmit({
  formik,
  watchCourseQuizData,
  currQuestion,
  handleQuizSubmission,
  loading,
  setSubmitting
}) {
  const totalAnswerd = useMemo(() => {
    return Object.values(formik.values).filter(
      (ele) => ele.option_id || ele.blank_answer || ele.text_answer
    ).length;
  }, [formik.values]);

  return (
    <div
      className={`text-center justify-content-center align-items-center d-flex flex-column gap-3 mb-5`}
    >
      <Button variant="red" isLoading={loading} onClick={() => handleQuizSubmission()}>انهاء الاختبار</Button>
      <Button variant="secondary" onClick={() => setSubmitting(false)}>إستكمال الاختبار</Button>
      <div className={`${styles.watchCourseQuiz__summary}`}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>عدد الاسئلة:</div>
          <div
            className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--yellow"]}`}
          >
            {watchCourseQuizData?.questions?.length}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>عدد الغير محلولة:</div>
          <div
            className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--blue"]}`}
          >
            {watchCourseQuizData?.questions?.length - totalAnswerd}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>عدد الاسئلة المحلولة:</div>
          <div
            className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--red"]}`}
          >
            {totalAnswerd}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>إجمالي درجات الاختبار:</div>
          <div
            className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--gray"]}`}
          >
            {watchCourseQuizData?.questions?.length}
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>السؤال الحالي:</div>
          <div
            className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--primary"]}`}
          >
            {currQuestion + 1}
          </div>
        </div>
      </div>
    </div>
  );
}
