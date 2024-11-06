import { useParams } from "react-router";
import { useSingleQuizInfoData } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";
import { useEffect, useMemo, useState } from "react";
import { useStore } from "../../../zustand/store";
import styles from "./Assignment.module.css";
import { Modal } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import WatchCourseQuizSubmitted from "../../../features/pages/WatchCourse/WatchCourseQuiz/WatchCourseQuizSubmitted/WatchCourseQuizSubmitted";
import WatchCourseQuizStart from "../../../features/pages/WatchCourse/WatchCourseQuiz/WatchCourseQuizStart/WatchCourseQuizStart";
import WatchCourseQuizContent from "../../../features/pages/WatchCourse/WatchCourseQuiz/WatchCourseQuizContent/WatchCourseQuizContent";

export default function Assignment() {
  const { itemSlug } = useParams();
  const authData = useStore((state) => state.authData);
  const { data: assignmentBasicData, isLoading } = useSingleQuizInfoData(
    itemSlug,
    "assignment"
  );
  
  
  const assignmentStartData = useMemo(() => {
    const assignmentesInfo =
      JSON.parse(localStorage.getItem("watchCourseQuizes")) || [];
    const localQuizInfo = assignmentesInfo.find(
      (ele) =>
        (ele.id == itemSlug || ele.slug == itemSlug) &&
        ele.user_id == authData.username
    );
    return localQuizInfo;
  }, []);


  const [assignmentOpened, setAssignmentOpened] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setSubmitting(false);
  }, [itemSlug])

  if (isLoading) return <Loading />;

  if (!assignmentBasicData) return null;

  return (
    <div className={`${styles["quiz-cont"]} w-100 user-select-none`}>
      <h1 className="mb-5 text--dark">{assignmentBasicData?.title}</h1>
      {assignmentBasicData.is_submitted_before ? (
        <WatchCourseQuizSubmitted data={assignmentBasicData} />
      ) : (
        <WatchCourseQuizStart
          data={assignmentBasicData}
          setCourseStart={setAssignmentOpened}
          assignment
        />
      )}
      <Modal
        show={assignmentOpened}
        centered
        onHide={() => setAssignmentOpened(false)}
        className={`${styles.modal}`}
        backdrop="static"
        size="xl"
      >
        <div
          className={`${styles.modal__close}`}
          onClick={() => setAssignmentOpened(false)}
        >
          <IoClose />
        </div>
        <div className={`${styles.modal__content}`}>
          <WatchCourseQuizContent
            assignmentStartData={assignmentStartData}
            submitting={submitting}
            setSubmitting={setSubmitting}
            type="assignment"
            setQuizOpened={setAssignmentOpened}
          />
        </div>
      </Modal>
    </div>
  );
}
