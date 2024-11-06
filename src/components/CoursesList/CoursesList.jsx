import { Col, Row } from "react-bootstrap";
import CourseCard from "../../features/components/CoursesList/CourseCard/CourseCard";
import { NavLink } from "react-router-dom";
import homeService from '../../features/pages/Home/HomeServices/HomeServices.module.css';
import styles from './CoursesList.module.css';

export default function CoursesList({ courses, withoutDesc }) {
  const hasCourses = courses?.length > 0;

  return (
    <section className="py-5">
      <h2 className={`${styles.headTitleCourse} text-center f-Almarai-700 f-size-34 text-black`}>
        احدث الكورسات
      </h2>
      <div className="d-flex justify-content-center align-items-center mb-5">
        <hr className="w-25" />
        <img
          className={homeService.imgMongoo}
          src="/assets/images/services/6e3555de155e3eb983b360e1e958d87c.gif"
          alt="شعار مانجو اديوكيشن"
          loading="lazy"
        />
        <hr className="w-25" />
      </div>
      {!hasCourses && (
        <h2 style={{ color: "var(--text-dark)" }} className="text-center my-5">
          لا يوجد كورسات
        </h2>
      )}
      <Row xs={1} md={2} lg={3}>
        {hasCourses && courses.map(course => (
          <Col key={`course-card-${course.slug}`}>
            <CourseCard course={course} withoutDesc={withoutDesc} />
          </Col>
        ))}
      </Row>
      {window.location.pathname !== "/allcourses" && (
        <div className="d-flex justify-content-center mt-4">
          <NavLink to="/allcourses" className={styles.btnAllCourses} aria-label="تصفح جميع الكورسات">
            تصفح جميع الكورسات
          </NavLink>
        </div>
      )}
    </section>
  );
}