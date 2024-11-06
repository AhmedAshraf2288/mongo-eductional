import profileStyles from "../ProfileDetails/ProfileDetails.module.css";
import Button from "../../../components/Button/Button";
import { Fragment, useState } from "react";
import { useProfileExamsData } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";
import ExamCertificate from "../../../features/pages/Profile/ExamsResults/ExamCertificate/ExamCertificate";
import styles from './ExamResults.module.css'
import ModalResultCourse from './ModalResultCourse';

export default function ExamsResults() {
  const { data, isLoading } = useProfileExamsData();
  const [showCertificate, setShowCertificate] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  if (isLoading) return <Loading />;
  console.log(data);


  if (showCertificate) {
    return (
      <ExamCertificate backToResults={() => setShowCertificate(false)} exam={showCertificate} />
    )
  }

  return <>
    {/* <div className={`text-center`}>
      <>
        {!data?.length ? (
          <h2 className="text-center fw-bold">لا يوجد نتائج</h2>
        ) : (
          <>
            <div className={`${st} mb-5`}>
              <div className={` d-flex`}>
                <table className={``}>
                  <thead className={``}>
                    <tr>
                      <th>اسم الامتحان</th>
                      <th>عدد الاسئلة</th>
                      <th>الاجابات</th>
                      <th>شهادة الامتحان</th>
                      <th>النسبة</th>
                      <th>الدرجة</th>
                      <th>عدد الاسئلة المحلولة</th>
                      <th>عدد الاسئلة الصحيحة</th>
                    </tr>
                  </thead>
                  <tbody className={`${profileStyles["table-body"]}`}>
                    {data.map((result, index) => (
                      <tr
                        className={`${profileStyles["table-row"]}`}
                        key={index}
                      >
                        <td className="word-break-all">{result.quiz_name}</td>
                        <td>
                          {result?.total_true_answers +
                            result?.total_wrong_answers}
                        </td>
                        <td>
                          {result?.after_submission_option?.value == 2 ? (
                            <Button
                              as={"link"}
                              to={`/profile/exams-results/${result?.id}`}
                              className="m-auto"
                            >
                              عرض
                            </Button>
                          ) : (
                            <div>غير متاح</div>
                          )}
                        </td>
                        <td>
                          {result?.quiz_has_certificacion && result?.student_can_get_certificacion ? (
                            <Button
                              className="m-auto text-white fw-bold"
                              onClick={() => setShowCertificate(result)}
                            >
                              عرض
                            </Button>
                          ) : (
                            <div>غير متاح</div>
                          )}
                        </td>
                        <td>
                          {result?.after_submission_option?.value != 3 ? (
                            <>
                              {(
                                (result.studnt_degree /
                                  result.total_quiz_degree) *
                                100
                              ).toFixed(2)}
                              %
                            </>
                          ) : (
                            <>غير متاح</>
                          )}
                        </td>
                        <td>
                          {result?.after_submission_option?.value != 3 ? (
                            <>
                              {result.studnt_degree} من{" "}
                              {result.total_quiz_degree}
                            </>
                          ) : (
                            <>غير متاح</>
                          )}
                        </td>
                        <td>{result.total_answered_questions}</td>
                        <td>
                          {result?.after_submission_option?.value != 3 ? (
                            result.total_true_answers
                          ) : (
                            <>غير متاح</>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </>
    </div> */}

    <section >
      <div className="row justify-content-center">
        {
          data.map((result) => <> <div key={result.id} className={`${styles.boxDetailsResult} d-flex flex-xl-row flex-column flex-sm-column justify-content-between align-items-center text-center mb-4`}>
            <div className={`${styles.nameExam}`}>
              <p className={`${styles.headName} f-Cairo-400 f-size-16`}>اسم الامتحان</p>
              <p className={`${styles.name} f-Cairo-600 f-size-18`}>{result.quiz_name
              } </p>
            </div>
            <div className={`${styles.degreeExam}`}>
              <p className={`${styles.headDegree} f-Cairo-400 f-size-16`}> الدجة</p>
              <p className={`${styles.resultDegree} f-Cairo-600 f-size-18`}>{result.studnt_degree} من {result.total_quiz_degree} </p>
            </div>
            <div className={`${styles.btnReviewResults} f-Almarai-400 f-size-16`}>
              <button onClick={() => setModalShow(true)}>
                مراجعة الاجابات
              </button>
            </div>

            <div className={`${styles.btnDetailsDegree} mt-xl-0 mt-lg-0 mt-4  f-Almarai-400 f-size-16`}>
              <button onClick={() => setModalShow(true)}>
                تفاصيل النتيجة
              </button>
            </div>
          </div>
          
          </>

          )
        }


      </div>


    </section>
    <ModalResultCourse
      show={modalShow}
      onHide={() => setModalShow(false)}
    />

  </>
}
