import Info from "../../../components/Info/Info";
import Loading from "../../../components/Loading/Loading";
import {
  useProfileExamsData,
  useProfileExamsResultData,
} from "../../../queries/queries";
import ExamResultsCard from "../../../features/pages/Profile/ExamsResults/ExamResultsCard/ExamResultsCard";
import Button from "../../../components/Button/Button";
import styles from "./ExamResultShow.module.css";
import { Fragment } from "react";
import { useParams } from "react-router";

export default function ExamResultShow() {
  const { id } = useParams();
  const { data: examsData } = useProfileExamsData();
  const { data: examsResultData, isLoading } = useProfileExamsResultData(id);

  const newExamsData = examsData?.find((item) => {
    return item.id == id;
  });

  if (isLoading) return <Loading />;

  return (
    <div>
      <Button className="mb-4" as={"link"} to={"/profile/exams-results"}>
        العودة إلى نتائج الامتحانات
      </Button>
      <div>
        <div className={`${styles.watchCourseQuiz__summary}`}>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>عدد الاسئلة:</div>
            <div
              className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--yellow"]}`}
            >
              {newExamsData?.total_true_answers +
                newExamsData?.total_wrong_answers}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>النتيجة بالنسبه:</div>
            <div
              className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--primary"]}`}
            >
              {(
                (newExamsData?.studnt_degree / newExamsData?.total_quiz_degree) *
                100
              ).toFixed(2)}
              %
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>درجتك:</div>
            <div
              className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--green"]}`}
            >
              {newExamsData?.studnt_degree}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>عدد الاسئلة الصحيحة: </div>
            <div
              className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--gray"]}`}
            >
              {newExamsData?.total_true_answers}
            </div>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>عدد الاسئلة الغير صحيحة: </div>
            <div
              className={`${styles["watchCourseQuiz__summary-number"]} ${styles["watchCourseQuiz__summary-number--red-red"]}`}
            >
              {newExamsData?.total_wrong_answers}
            </div>
          </div>
        </div>
      </div>

      {examsResultData?.data?.answers && (
        <Fragment>
          <Info borderSmall variant="green" className={"mb-5"}>
            الاجابات
          </Info>
          <div className="w-100">
            {examsResultData?.data?.answers?.map((question, index) => (
              <ExamResultsCard key={index} question={question} />
            ))}
          </div>
        </Fragment>
      )}
    </div>
  );
}
