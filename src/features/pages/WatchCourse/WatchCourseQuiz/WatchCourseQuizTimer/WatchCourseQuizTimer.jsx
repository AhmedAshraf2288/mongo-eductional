import { useEffect, useState } from "react";
import { useStore } from "../../../../../zustand/store";
import {
  getTimeDifference,
  getTimeFromSeconds,
} from "../../../../../utils/helpers";
import styles from "./WatchCourseQuizTimer.module.css";
import useIsTabActive from "../../../../../hooks/useIsTabActive";

export default function WatchCourseQuizTimer({
  exam,
  start_time,
  formValues,
  handleExamSubmission,
  timerWork,
}) {
  const [timeRemaining, setTimeRemaining] = useState(null);
  const authData = useStore((state) => state.authData);

  const isTabVisible = useIsTabActive();

  useEffect(() => {
    if(!isTabVisible){
      handleExamSubmission();
    }
  }, [isTabVisible])

  useEffect(() => {
    if (!timerWork || !exam.time_limit || !start_time) return;

    const updateTimeRemaining = () => {
      const remaining = getCurrRemaining(start_time, exam.time_limit);
      setTimeRemaining(remaining);
      if (remaining <= 0) {
        handleExamSubmission();
        clearInterval(interval);
      }
    };

    updateTimeRemaining();
    const interval = setInterval(updateTimeRemaining, 1000);

    const quizesInfo =
      JSON.parse(localStorage.getItem("watchCourseQuizes")) || [];
    const updatedQuizes = quizesInfo.filter((quiz) => quiz.slug !== exam.slug);
    localStorage.setItem(
      "watchCourseQuizes",
      JSON.stringify([
        ...updatedQuizes,
        {
          slug: exam.slug,
          questions: formValues,
          user_id: authData.username,
          start_time,
        },
      ])
    );

    return () => {
      clearInterval(interval);
    };
  }, [authData, formValues, exam.slug, start_time, exam.time_limit, timerWork]);


  if (!timerWork || timeRemaining === null) return null;

  return (
    <div
      className={`mb-3 mx-auto flex-lg-row flex-column d-flex justify-content-center gap-4 ${styles.prog__content}`}
    >
      <div
        className={`${styles.prog__item} d-flex align-items-center gap-3 fs-4 fw-bolder`}
      >
        <span>الوقت المتبقي:</span> {getTimeFromSeconds(timeRemaining)}
      </div>
    </div>
  );
}

function getCurrRemaining(start_time, timeLimit) {
  const currentTime = new Date();
  const timeElapsed = getTimeDifference(new Date(start_time), currentTime);
  return Math.max(timeLimit * 60 - timeElapsed, 0);
}