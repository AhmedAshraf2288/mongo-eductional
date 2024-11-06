import { FaCheck, FaXmark } from "react-icons/fa6";
import Info from "../../../../../components/Info/Info";
import { Fragment, useMemo } from "react";
import YoutubeVideoPlayer from "../../../../../components/YoutubeVideoPlayer/YoutubeVideoPlayer";
import AudioPlayer from "../../../../../components/AudioPlayer/AudioPlayer";

export default function AssignmentResultsCard({ question }) {
  const { correctAnswer, correct, selectedAnswer } = useMemo(() => {
    const correctAnswer = question.options?.find(
      (option) => option.is_correct_option
    );
    const selectedAnswer = question.options?.find(
      (option) => option.is_selected
    );
    return {
      correctAnswer,
      correct: correctAnswer.is_selected,
      selectedAnswer,
    };
  }, []);

  return (
    <div className="bg--primary p-3 mb-3 rounded w-100 text-start fs-5 text-white">
      <div className="d-flex align-items-center justify-content-center gap-3">
        <Info className="m-auto mb-3" variant="yellow">
          عدد درجات السؤال: {question.question_degree}
        </Info>
        <Info className="m-auto mb-3" variant="yellow">
          درجتك: {question.my_question_degree}
        </Info>
      </div>
      <p
        className="fw-bold"
        dangerouslySetInnerHTML={{ __html: question?.content }}
      ></p>
      {!selectedAnswer ? (
        <div>
          <Info className="mb-3" variant="red">
            <FaXmark /> لم يتم الاجابة
          </Info>
          <div className="d-flex align-items-center gap-3">
            <p className="fw-bold fs-5">الاجابة الصحيحة:</p>
            <p>{correctAnswer?.content}</p>
          </div>
        </div>
      ) : !correct ? (
        <div>
          <Info className="mb-3" variant="red">
            <FaXmark /> الإجابة خاظئة
          </Info>
          <div className="d-flex align-items-center gap-3">
            <p className="fw-bold fs-5">الاجابة الصحيحة:</p>
            <p>{correctAnswer?.content}</p>
          </div>
        </div>
      ) : (
        <div>
          <Info className="mb-3" variant="green">
            <FaCheck /> الإجابة صحيحة
          </Info>
          {/* <p className="bg-success text-white"><FaCheck /> الإجابة صحيحة</p> */}
          <div className="d-flex align-items-center gap-3">
            <p className="fw-bold fs-5">الاجابة:</p>
            <p>{correctAnswer?.content}</p>
          </div>
        </div>
      )}
      {correctAnswer && (
        <Fragment>
          {correctAnswer?.correct_option_description && (
            <div>
              <p className="fw-bold fs-5">سبب الاجابه الصحيحة</p>
              {correctAnswer?.correct_option_description?.type?.value == 1 ? (
                <div
                  className="bg-white p-3 rounded"
                  dangerouslySetInnerHTML={{
                    __html:
                      correctAnswer?.correct_option_description
                        ?.correct_description,
                  }}
                ></div>
              ) : correctAnswer?.correct_option_description?.type?.value ==
                2 ? (
                <YoutubeVideoPlayer
                  type={2}
                  url={
                    correctAnswer?.correct_option_description
                      ?.correct_description
                  }
                />
              ) : correctAnswer?.correct_option_description?.type?.value ==
                3 ? (
                <AudioPlayer
                  url={
                    correctAnswer?.correct_option_description
                      ?.correct_description
                  }
                />
              ) : (
                ""
              )}
            </div>
          )}
        </Fragment>
      )}
    </div>
  );
}
