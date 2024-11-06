import { useMyLeariningData } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";
import { Link } from "react-router-dom";
import styles from "./MyCourses.module.css";
import '../../../index.css';

export default function MyCourses() {
  const { data: coursesData, isLoading } = useMyLeariningData();
  console.log(coursesData);

  if (isLoading) return <Loading />;

  return (
    <section className="d-flex flex-wrap justify-content-center">
      {coursesData?.data?.map((ele) => (
        <div className={`myCourses d-flex justify-content-between mb-4`} key={ele.slug}>
          <div className="d-flex gap-3">
            <div className={`imgCourse `}>
              <img
                src={ele?.img || "/assets/images/a33d1caf273debfb325d951f49a20509.jpeg"}
                alt={`صورة الكورس: ${ele.title}`}
                loading="lazy"
                className="img-fluid rounded"
              />
            </div>
            <div className={`f-Almarai-400 f-size-16 d-flex flex-column justify-content-center mt-4`}>
              <h5>{ele.title}</h5>
              <p className={`mt-3 mb-2 rateCourse f-size-16 f-Cairo-500`}>خلصت 25% من الكورس</p>
              <div className={`range`}>
                <div className={`rate`}></div>
              </div>
              <p className={`mt-3 dateSubscribe d-flex justify-content-between`}>
                تاريخ الاشتراك
                <span className={`${styles.dateCourse}`}>{ele.created_at}</span>
              </p>
            </div>
          </div>
          <Link
            to={`/courses/watch/${ele.slug}`}
            className={`btnCourse d-flex justify-content-between btn btn-primary`}
            aria-label={`الدخول للكورس: ${ele.title}`}
          >
            <span className={`${styles.textCourse}`}>الدخول للكورس</span>
            <span>
              <img src="/assets/images/arrow-left.png" alt="سهم للدخول" />
            </span>
          </Link>
        </div>
      ))}
    </section>
  );
}
