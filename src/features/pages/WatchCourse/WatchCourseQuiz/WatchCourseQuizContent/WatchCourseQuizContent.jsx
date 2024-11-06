import { Navigate, useNavigate, useParams } from "react-router";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Form, Formik } from "formik";
import styles from "./WatchCourseQuizContent.module.css";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useFormErr from "../../../../../hooks/useFormErr";
import {
  useSingleQuizInfoData,
  useSingleWatchItemData,
} from "../../../../../queries/queries";
import useAxios from "../../../../../hooks/useAxios";
import { queryClient } from "../../../../../queries/queryClient";
import Loading from "../../../../../components/Loading/Loading";
import WatchCourseQuizQuestions from "../WatchCourseQuizQuestions/WatchCourseQuizQuestions";
import WatchCourseQuizNavigation from "../WatchCourseQuizNavigation/WatchCourseQuizNavigation";
import WatchCourseQuizSubmitBtn from "../WatchCourseQuizSubmitBtn/WatchCourseQuizSubmitBtn";
import WatchCourseQuizSubmit from "../WatchCourseQuizSubmit/WatchCourseQuizSubmit";
import { useStore } from "../../../../../zustand/store";
import { Container } from "react-bootstrap";
import { BiErrorAlt } from "react-icons/bi";
import WatchCourseQuizTimer from "../WatchCourseQuizTimer/WatchCourseQuizTimer";

export default function WatchCourseQuizContent({ type, withTimer }) {
  const { itemSlug, slug, lessonSlug } = useParams();
  const quizOpened = useStore((state) => state.quizOpened);
  const { data: watchCourseQuizData, isLoading: watchCourseQuizDataLoading } =
    useSingleWatchItemData(itemSlug, type, quizOpened);

  const { handleMutationErr } = useFormErr();
  const [startTime, setStartTime] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currQuestion, setCurrQuestion] = useState(0);
  const { data: watchCourseQuizBasicData } = useSingleQuizInfoData(
    itemSlug,
    type
  );
  const axios = useAxios();
  const authData = useStore((state) => state.authData);

  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setSubmitting(false);
  }, [itemSlug]);

  const [codePosition, setCodePosition] = useState({ left: "0%", top: "0%" });


  function getRandomPosition() {
    setCodePosition({
      left: `${Math.floor(Math.random() * 90)}%`,
      top: `${Math.floor(Math.random() * 90)}%`,
    });
  }

  useEffect(() => {
    getRandomPosition();
    const timeOut = setInterval(() => {
      getRandomPosition();
    }, 2500);

    return () => clearInterval(timeOut);
  }, []);

  const { initialQuestionsValues, initialStartTime, loading } = useMemo(() => {
    return {
      initialQuestionsValues: {},
      initialStartTime: new Date(),
      loading: false,
    };
  }, [watchCourseQuizData]);

  useEffect(() => {
    if (!initialStartTime) return;
    setStartTime(new Date(initialStartTime));
  }, [initialStartTime]);

  function submitAssignmentApi(values) {
    return axios.post(`/my-learning/submit-${type}`, values);
  }

  const navigate = useNavigate();

  const submitAssignmentMutation = useMutation({
    mutationFn: submitAssignmentApi,
    onSuccess: (data) => {
      toast.success(data.data.message);
      queryClient.setQueryData(["watch-course", "basic-info", itemSlug], {
        ...watchCourseQuizBasicData,
        is_submitted_before: true,
      });

      navigate(`/courses/watch/${slug}/${lessonSlug}/${type}/${itemSlug}`);

      queryClient.invalidateQueries({
        predicate: (query) =>
          query.queryKey[0]?.startsWith("watch-course") &&
          query.queryKey[1]?.startsWith("item-basic-info"),
      });
    },
    onError: (err) => {
      handleMutationErr(err);
    },
  });

  function handleQuizSubmission(data) {
    let willSubmit = false;

    if (!isSubmitting) {
      setIsSubmitting(true);
      willSubmit = true;
    }

    if (willSubmit) {
      const finalAnswer = [];
      const answersNotSubmitted = [];

      for (let questionId in data) {
        if (data[questionId]?.option_id) {
          finalAnswer.push({
            question_id: questionId,
            ...data[questionId],
          });
        }
      }

      watchCourseQuizData?.questions.forEach((item) => {
        const isAnswered = finalAnswer.some(
          (answer) => answer.question_id == item.id
        );
        if (!isAnswered) {
          answersNotSubmitted.push(item);
        }
      });

      const convertToArrOfObj = answersNotSubmitted.map((item) => {
        return {
          question_id: item.id,
          option_id: null,
        };
      });

      submitAssignmentMutation.mutate({
        [`${type}_id`]: watchCourseQuizData?.id,
        answers: finalAnswer,
        not_answers_question: convertToArrOfObj,
      });

      localStorage.removeItem("watchCourseQuizes");
    }
  }

  if (!quizOpened) {
    return (
      <Navigate to={`/courses/watch/${slug}/${lessonSlug}/quiz/${itemSlug}`} />
    );
  }

  if (watchCourseQuizBasicData?.is_time_expired) {
    return (
      <div
        className="text--dark text-center rounded-4"
        style={{
          backgroundColor: "var(--primary-light)",
          maxWidth: "90%",
          margin: "auto",
          padding: "25px 0",
        }}
      >
        <h5 className="mb-4">
          انتهى وقت الامتحان <BiErrorAlt className="text--red" />
        </h5>
        <div className="">
          <span className="mb-3 d-block text--red fw-bold">
            تاريخ الامتحان من : {watchCourseQuizBasicData?.available_from}
          </span>
          <span className="d-block text--red fw-bold">
            الي : {watchCourseQuizBasicData?.available_to}
          </span>
        </div>
      </div>
    );
  }

  if (watchCourseQuizDataLoading || loading || !initialQuestionsValues)
    return <Loading />;

  return (
    <div className="exam-content">
      <Container>
        <Formik initialValues={initialQuestionsValues}>
          {(formik) => {
            return (
              <Form className={`${styles.container}`}>
                {submitting ? (
                  <>
                    <WatchCourseQuizSubmit
                      formik={formik}
                      watchCourseQuizData={watchCourseQuizData}
                      currQuestion={currQuestion}
                      handleQuizSubmission={() =>
                        handleQuizSubmission(formik.values)
                      }
                      setSubmitting={setSubmitting}
                      loading={submitAssignmentMutation?.isPending}
                    />
                  </>
                ) : (
                  <Fragment>
                    <>
                      <WatchCourseQuizTimer
                        timerWork={withTimer}
                        exam={watchCourseQuizData}
                        formValues={formik.values}
                        handleExamSubmission={() =>
                          handleQuizSubmission(formik.values)
                        }
                        start_time={startTime}
                      />
                    </>
                    <div
                      className={`${styles.watch_course__content} position-relative mb-4`}
                    >
                      <div
                        className="position-absolute text-warning z-1 fw-bold"
                        style={codePosition}
                        id="code"
                      >
                        {authData?.code}
                      </div>
                      <WatchCourseQuizSubmitBtn
                        startTime={startTime}
                        formik={formik}
                        handleQuizSubmission={() =>
                          handleQuizSubmission(formik.values)
                        }
                        quizdata={watchCourseQuizData}
                        withTimer={withTimer}
                        setSubmitting={setSubmitting}
                      />
                      <div className="mb-0 mb-lg-4 w-100">
                        <WatchCourseQuizQuestions
                          watchCourseQuizData={watchCourseQuizData}
                          currQuestion={currQuestion}
                          setCurrQuestion={setCurrQuestion}
                        />
                      </div>
                    </div>
                  </Fragment>
                )}
                <div>
                  <WatchCourseQuizNavigation
                    totalQuestions={watchCourseQuizData.questions.length}
                    currQuestion={currQuestion}
                    setCurrQuestion={setCurrQuestion}
                    submitting={submitting}
                    setSubmitting={setSubmitting}
                  />
                </div>
              </Form>
            );
          }}
        </Formik>
      </Container>
    </div>
  );
}
