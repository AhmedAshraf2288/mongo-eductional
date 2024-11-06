import styles from "./WatchCourseQuizStart.module.css";
import Button from "../../../../../components/Button/Button";
import { Container } from "react-bootstrap";
import ProgressBarCard from "../../../../../components/ProgressBarCard/ProgressBarCard";
import { getTimeFromSeconds } from "../../../../../utils/helpers";
import { useStore } from "../../../../../zustand/store";
import { useNavigate } from "react-router";
import TableAssigExam from './../../../../components/TableAssigExam/TableAssigExam';

export default function WatchCourseQuizStart({ data, assignment }) {
  const setQuizOpened = useStore((state) => state.setQuizOpened);
  const navigate = useNavigate();
  console.log(data);

  return (
    <div>
      <Container className="d-flex flex-column algin-items-center">
        {/* <div className=" d-xl-block d-none">
          <table className={`${styles.start_table} m-auto`}>
            <thead>
              <th>السيريال</th>
              <th>تاريخ البداية</th>
              <th>تاريخ النهاية</th>
              <th>عدد الاسئلة</th>
              <th>عدد المحاولات</th>
              <th>بدأ الامتحان</th>
            </thead>
            <tbody className={`${styles.assignmentStart_tbody}`}>
              <tr>
                <td>{data?.quiz?.id}</td>
                <td>{data?.quiz?.available_from}</td>
                <td>{data?.quiz?.available_to}</td>
                <td>{data?.quiz?.num_questions}</td>
                <td>{data?.extraAttemps.length ? data?.quiz?.quiz_attempts_number + 1 : data?.quiz?.quiz_attempts_number}</td>
                <td>
                  {!data?.quiz?.has_quiz_time_started_yet ? (
                    "الامتحان لم يبدأ بعد"
                  ) : data?.quiz?.has_quiz_time_expired ? (
                    "انتهي وقت الامتحان"
                  ) : (
                    <Button
                      onClick={() => {
                        setQuizOpened(true);
                        navigate("start");
                      }}
                      className="fw-bold"
                    >
                      بدأ الامتحان
                    </Button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          {data?.quiz?.time_limit && (
            <div
              className={`mt-3 mx-auto d-flex justify-content-center gap-4 ${styles.prog__content}`}
            >
              <div
                className={`${styles.prog__item} `}
                style={{ border: "1px solid #FF7E84" }}
              >
                <ProgressBarCard
                  value={50}
                  maxValue={100}
                  text={getTimeFromSeconds(data?.quiz?.time_limit * 60)}
                  color={"#FF7E84"}
                  label={"وقت الامتحان"}
                />
              </div>
            </div>
          )}
        </div>
        <div className="d-xl-none d-block">
          <table className={`${styles.start_table} m-auto`}>
            <tbody>
              <tr>
                <th className="p-3 text-center align-middle">السيريال</th>
                <td className="p-3 align-middle">{data?.quiz?.id}</td>
              </tr>
              <tr>
                <th className="p-3 text-center align-middle">تاريخ البداية</th>
                <td className="p-3 align-middle">
                  {data?.quiz?.available_from}
                </td>
              </tr>
              <tr>
                <th className="p-3 text-center align-middle">تاريخ النهاية</th>
                <td className="p-3 align-middle">{data?.quiz?.available_to}</td>
              </tr>
              <tr>
                <th className="p-3 text-center align-middle">عدد الاسئلة</th>
                <td className="p-3 align-middle">
                  {data?.quiz?.num_questions}
                </td>
              </tr>
              <tr>
                <th className="p-3 text-center align-middle">عدد المحاولات</th>
                <td className="p-3 align-middle">
                  {data?.extraAttemps.length ? data?.quiz?.quiz_attempts_number + 1 : data?.quiz?.quiz_attempts_number}
                </td>
              </tr>
              <tr>
                <th className="p-3 text-center align-middle">بدأ الامتحان</th>
                <td>
                  {!data?.quiz?.has_quiz_time_started_yet ? (
                    "الامتحان لم يبدأ بعد"
                  ) : data?.quiz?.has_quiz_time_expired ? (
                    "انتهي وقت الامتحان"
                  ) : (
                    <Button
                      onClick={() => {
                        setQuizOpened(true);
                        navigate("start");
                      }}
                      className="fw-bold"
                    >
                      بدأ الامتحان
                    </Button>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <div
            className={`mt-5 mx-auto d-flex flex-column justify-content-center gap-4 ${styles.prog__content}`}
          >
            <div
              className={`${styles.prog__item}`}
              style={{ border: "1px solid #FF7E84" }}
            >
              <ProgressBarCard
                value={100}
                maxValue={100}
                text={`${data?.quiz?.quiz_duration >= 60
                    ? data?.quiz?.quiz_duration
                    : "00"
                  }:${data?.quiz?.quiz_duration < 60
                    ? data?.quiz?.quiz_duration
                    : "00"
                  }:00`}
                color={"#FF7E84"}
                label={"وقت الامتحان"}
              />
            </div>
          </div>
        </div> */}

      <TableAssigExam type={"امتحان"} data={data}/>


    </Container>
    </div >
  );
}
