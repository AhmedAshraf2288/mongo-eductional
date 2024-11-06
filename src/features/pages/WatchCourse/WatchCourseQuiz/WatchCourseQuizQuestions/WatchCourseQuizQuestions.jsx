import { useMemo } from "react";
import { useFormikContext } from "formik";
import ChooseQuestion from "../../../../modules/Questions/ChooseQuestion/ChooseQuestion";

export default function WatchCourseQuizQuestions({
  watchCourseQuizData,
  currQuestion,
  currQuestionData,
}) {
  const questionData = useMemo(() => {
    return currQuestionData || watchCourseQuizData?.questions?.[currQuestion] || {};
  }, [currQuestionData, watchCourseQuizData?.questions, currQuestion]);
  
  const formik = useFormikContext();

  function handleQuestionAnswer(value) {
    formik.setFieldValue(questionData.id, {
      option_id: value,
    });
  }

  return (
    <div>
      <ChooseQuestion
        handleQuestionAnswer={handleQuestionAnswer}
        questionData={questionData}
        selectedOption={formik.values[questionData.id]?.option_id}
      />
    </div>
  );
}
