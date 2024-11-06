import profileStyles from "../ProfileDetails/ProfileDetails.module.css";
import Button from "../../../components/Button/Button";
import { useProfileAssignmentsData } from "../../../queries/queries";
import { Fragment, useState } from "react";
import "moment/locale/ar";
import moment from "moment/moment";
import Loading from "../../../components/Loading/Loading";

import AssignmentResultShow from "../../../features/pages/Profile/AssignmentsResults/AssignmentResultShow/AssignmentResultShow";

export default function AssignmentsResults() {
  const [assignemntResults, setAssignmentResults] = useState(false);
  const { data, isLoading } = useProfileAssignmentsData();
  moment.locale("ar");

  console.log(data);
  

  if (isLoading) return <Loading />;


  return (
    <div className={`text-center`}>
      {assignemntResults ? (
        <AssignmentResultShow
          assignment={assignemntResults}
          backToResults={() => setAssignmentResults(false)}
        />
      ) : (
        ""
      )}
      {!assignemntResults && (
        <Fragment>
          {!data?.length ? (
        <h2 className="text-center fw-bold">لا يوجد نتائج</h2>
      ) : (
        <Fragment>
          <div className={`rounded ${profileStyles["table-container"]} mb-5`}>
            <div className={`${profileStyles["table-header"]}`}>
              <div>اسم الامتحان</div>
              <div>عدد الاسئلة</div>
              <div>الاجابات</div>
              <div>النتيجة</div>
              <div>الدرجة</div>
              <div>عدد الاسئلة المحلولة</div>
              <div>عدد الاسئلة الصحيحة</div>
              <div>وقت انتهاء الامتحان</div>
              <div>وقت بدا الامتحان</div>
            </div>
            <div className={`${profileStyles["table-body"]}`}>
              {data.map((result) => (
                <div
                  className={`${profileStyles["table-row"]}`}
                  key={`result-quiz-${result.id}`}
                >
                  <div>{result.assignment_name}</div>
                  <div>{result.total_assignment_questions}</div>
                  <div>
                    <Button
                      onClick={() => setAssignmentResults(result)}
                      className="m-auto"
                    >
                      عرض
                    </Button>
                  </div>
                  <div>
                    {(
                      (result.studnt_degree / result.total_assignment_degree) *
                      100
                    ).toFixed(2)}
                    %
                  </div>
                  <div>
                    {result.studnt_degree} من {result.total_assignment_degree}
                  </div>
                  <div>{result.total_answered_questions}</div>
                  <div>{result.total_true_answeres}</div>
                  <div>
                    {moment(result.quiz_start_at).format("dddd D MMMM YYYY")}
                  </div>
                  <div>
                    {moment(result.quiz_end_at).format("dddd D MMMM YYYY")}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Fragment>
      )}
        </Fragment>
      )}
    </div>
  );
}
