import { Link } from "react-router-dom";
import Button from "../../../../components/Button/Button";
import styles from "./CourseCard.module.css";

export default function CourseCard({ course, withoutDesc }) {
  return (
    <section className="cardCourse">
      <Link to={`/courses/${course.slug}`} aria-label={`تفاصيل الكورس: ${course.title}`}>
        <div className={`${styles.card} `}>
          <div className={`${styles.card__image} d-flex flex-wrap justify-content-between align-items-center mx-auto`}>
            <img
              src={course.img}
              alt={`صورة الكورس: ${course.title}`}
              loading="lazy"
            />
          </div>
          <div className={`${styles.card__body}   mx-auto d-flex flex-column flex-wrap justify-content-between align-items-center`}>
            <div className="d-flex gap-2 justify-content-between align-items-center">
              {!withoutDesc ? (
                <div className={`${styles.card__body__text} f-size-20 f-Almarai-700 px-3 pt-3`}>
                  <p className={`fw-bold ${styles.card__body_title}`}>{course.title}</p>
                  <div>{course.content}</div>
                </div>
              ) : (
                <p className="text-start f-Almarai-400 f-size-14">{course.description}</p>
              )}
              <div className={`${styles.details__subscribe} d-flex flex-column gap-2 justify-content-center align-items-center`}>
                <Button
                  className={`w-100 ${styles.cardBodyLink} ${styles.btnCardDetails}`}
                  as="link"
                  to={`/courses/${course.slug}`}
                  aria-label={`عرض تفاصيل الكورس: ${course.title}`}
                >
                  <span className="f-Almarai-400 f-size-14">التفاصيل</span>
                </Button>
                <Button
                  className={`w-100 ${styles.cardBodyLink} ${styles.btnSubscribe}`}
                  as="link"
                  to={`/courses/${course.slug}`}
                  aria-label={`اشترك الآن في الكورس: ${course.title}`}
                >
                  <span className="f-Almarai-400 f-size-14">اشترك الان</span>
                </Button>
              </div>




              
            </div>
            <div className="imgLineCard mt-1 mb-4">
              <img src="/assets/images/cardCourses/lineCardCourses.svg" alt="زخرفة خطية" loading="lazy" />
            </div>
            <div className={`d-flex justify-content-between w-100 f-Almarai-400 f-size-14 ${styles.calenderDate}`}>
              <div className="text-start align-self-end mt-4">
                {course.updated_at}
              </div>
              <Button
                className={` ${styles.cardBodyLink} f-Almarai-400 f-size-14 text-dark ${styles.btnCardPrice}`}
                as="link"
                to={`/courses/${course.slug}`}
                aria-label={`سعر الكورس: ${course.title}`}
              >
                {`${course.price}`} جنيه
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}

