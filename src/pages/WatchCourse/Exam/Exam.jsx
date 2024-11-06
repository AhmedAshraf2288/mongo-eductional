import { useParams } from "react-router";
import { useSingleQuizInfoData } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";
import styles from "./Exam.module.css";
import WatchCourseQuizStart from "../../../features/pages/WatchCourse/WatchCourseQuiz/WatchCourseQuizStart/WatchCourseQuizStart";
import WatchCourseQuizSubmitted from "../../../features/pages/WatchCourse/WatchCourseQuiz/WatchCourseQuizSubmitted/WatchCourseQuizSubmitted";
import { useStore } from "../../../zustand/store";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function Quiz() {
  const { itemSlug } = useParams();
  const { data: quizBasicData, isLoading } = useSingleQuizInfoData(
    itemSlug,
    "quiz"
  );
  const quizOpened = useStore((state) => state.quizOpened);
  const setQuizOpened = useStore((state) => state.setQuizOpened);
  const queryClient = useQueryClient();
  console.log(quizBasicData);
  
  

  useEffect(() => {
    if (quizOpened) {
      setQuizOpened(false);
    }
  }, []);

  useEffect(() => {
    queryClient.invalidateQueries({
      predicate: (query) =>
        query?.queryKey[0] == "watch-course" &&
        query?.queryKey[1] == "item" &&
        query?.queryKey[2] == itemSlug,
    });
  }, []);

  if (isLoading) return <Loading />;

  if (!quizBasicData) return null;

  return (
    <div className={`${styles["quiz-cont"]} w-100 user-select-none`}>
      <h1 className="text--dark mb-4">{quizBasicData?.quiz?.title}</h1>
      {quizBasicData?.quiz?.is_submitted_before && (
        <WatchCourseQuizSubmitted data={quizBasicData} />
      )}
      {!quizBasicData?.quiz?.reached_max_attempts || quizBasicData?.extraAttemps.length ? (
        <div>
          <div className={`${styles.watch_course__quizStart}`}>
            <WatchCourseQuizStart data={quizBasicData} />
          </div>
        </div>
      ) : (
        null
      )}
    </div>
  );
}
