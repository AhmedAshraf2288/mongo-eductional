import { useEffect } from "react";
import Info from "../../../../../components/Info/Info";
import Loading from "../../../../../components/Loading/Loading";
import { useProfileAssignmentResultData } from "../../../../../queries/queries";
import { useStore } from "../../../../../zustand/store";
import AssignmentResultsCard from "../AssignmentResultsCard/AssignmentResultsCard";

export default function AssignmentResultShow({ assignment }) {
  const { data, isLoading } = useProfileAssignmentResultData(assignment.assignment_slug);
  const editPagination = useStore((state) => state.editPagination);

  console.log(data, "data");

  useEffect(() => {
    editPagination("studentAssignmentResults", 1)
  }, [assignment])

  if (isLoading) return <Loading />;

  return (
    <div className="d-flex flex-column align-items-center gap-3">
      <p>عدد الاسئلة {assignment.total_assignment_questions}</p>
      <Info borderSmall variant="gray">
        <div>
          <div>
            النتيجة{" "}
            {((assignment.studnt_degree / assignment.total_assignment_degree) * 100).toFixed(2)}%
          </div>
          <div>
            {assignment.total_true_answeres} من {assignment.total_assignment_questions}
          </div>
        </div>
      </Info>
      <p>عدد الاسئلة المحلولة {assignment.total_answered_questions}</p>
      <Info borderSmall variant="gray">
        عدد الاسئلة الصحيحة {assignment.total_true_answeres}
      </Info>
      <Info borderSmall>
        عدد الاسئلة الخاطئة{" "}
        {assignment.total_assignment_questions - assignment.total_true_answeres}
      </Info>
      <Info borderSmall variant="red">
        الاجابات
      </Info>
      <div className="w-100">
        {data?.data?.answers?.map((question) => (
          <AssignmentResultsCard
            key={`assignment-result-${assignment.assignment_slug}`}
            question={question}
          />
        ))}
      </div>
    </div>
  );
}
