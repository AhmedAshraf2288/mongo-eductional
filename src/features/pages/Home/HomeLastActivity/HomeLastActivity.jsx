import styles from "./HomeLastActivity.module.css";
import "moment/locale/ar";
import moment from "moment/moment";
import { Link } from "react-router-dom";
import homeService from '../../Home/HomeServices/HomeServices.module.css';

export default function HomeLastActivity({ lastActivity }) {
  return (
    <>
      <section className={`${styles.homeLastActivity} d-flex flex-column gap-5 align-items-center ${lastActivity.length === 0 ? "d-none" : "d-block"} py-5`}>
        <div className={`${homeService.headLine} d-flex flex-column`}>
          <h2 className="text-center f-Almarai-700 f-size-34 text-light">نشاط الاخير</h2>
          <div className="d-flex justify-content-center align-items-center">
            <hr className="w-25" />
            <img
              className={homeService.imgMongoo}
              src="/assets/images/services/6e3555de155e3eb983b360e1e958d87c.gif"
              alt="شعار مانجو اديوكيشن"
              loading="lazy"
            />
            <hr className="w-25" />
          </div>
        </div>
        <div className={`myCourses d-flex flex-column flex-md-row justify-content-between align-items-center w-100`}>
          <div className="d-flex gap-3 align-items-center">
            <div className={`imgCourse`}>
              <img
                src={lastActivity?.course_img}
                alt={`صورة الكورس: ${lastActivity?.title}`}
                loading="lazy"
                className="img-fluid"
              />
            </div>
            <div className={`f-Almarai-400 f-size-16 d-flex flex-column justify-content-center mt-4`}>
              <h5>{lastActivity?.title}</h5>
              <p className={`mt-3 mb-2 rateCourse f-size-16 f-Cairo-500`}>خلصت 25% من الكورس</p>
              <div className={`range`}>
                <div className={`rate`}></div>
              </div>
              <p className={`mt-3 dateSubscribe d-flex justify-content-between f-size-14 f-Cairo-500`}>
                اخر نشاط
                <span className={`dateCourse`}>
                  {moment(lastActivity?.created_at)?.format("dddd D MMMM YYYY")}
                </span>
              </p>
            </div>
          </div>
          <Link
            to={`/courses/watch/${lastActivity?.course_slug}/${lastActivity?.lesson_slug}/video/${lastActivity?.slug}`}
            className={`btnCourse d-flex justify-content-between align-items-center mt-4 mt-md-0`}
            aria-label={`الدخول للكورس: ${lastActivity?.title}`}
          >
            <span className={`f-size-16 f-Almarai-400`}>الدخول للكورس</span>
            <span>
              <img src="/assets/images/arrow-left.png" alt="سهم للإشارة للدخول" />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
}