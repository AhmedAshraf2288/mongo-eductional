import { Fragment } from "react";
import styles from "./WatchCourseQuizSubmitted.module.css";
import Button from "../../../../../components/Button/Button";
export default function WatchCourseQuizSubmitted({ data }) {
  return (
    <div className="mb-4">
      <div
        className={`text-center justify-content-center align-items-center d-flex flex-column gap-3`}
      >
        <div className={`${styles.watchCourseQuiz__summary}`}>
          <h4 className="text-center ">
            {data?.quiz?.after_submission_option?.value == 3 ? (
              <div>
                تم استنفاذ {data?.quiz?.num_of_submissions} محاولة من محاولاتك
              </div>
            ) : (
              <Fragment>
                <div className="mb-4">درجات المحاولات السابقة</div>
                {data?.last_submissions_info?.map((ele, idx) => {
                  return (
                    <div
                      className="d-flex align-items-center flex-column-reverse flex-md-row gap-3 py-3 border-bottom"
                      key={`quiz-submission-${ele?.id}`}
                    >
                      <Button as={"link"} to={`/profile/exams-results/${ele?.id}`}>
                        عرض درجاتك
                      </Button>
                      <div
                        className="fw-normal"
                        key={`quiz-submission-${ele?.id}`}
                      >
                        درجة المحاوله {idx + 1} :{" "}
                        <span className="text--primary">{ele?.degree}</span> من{" "}
                        <span className="text--primary">
                          {ele?.total_degrees}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </Fragment>
            )}
          </h4>
          {/* <div className="d-flex justify-content-between align-items-center mb-3 text--dark">
            <div className="text-dark">عدد الاسئلة:</div>
            <div
              className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--yellow"]}`}
            >
              {data?.quiz?.num_questions}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
