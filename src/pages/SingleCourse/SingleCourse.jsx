import { Container, Row, Col, Button } from "react-bootstrap";
import SingleCourseInfo from "../../features/pages/SingleCourse/SingleCourseInfo/SingleCourseInfo";
import SingleCourseContent from "../../features/pages/SingleCourse/SingleCourseContent/SingleCourseContent";
import { useSingleCourseData } from "../../queries/queries";
import Loading from "../../components/Loading/Loading";
import { useParams } from "react-router";
import styles from "./SingleCourse.module.css";
import { useStore } from "../../zustand/store";
import { Link } from "react-router-dom";
import SubscribeModal from "../../features/pages/SingleCourse/SubscribeModal/SubscribeModal";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import IsLoggedIn from './../../components/ProtectedRoutes/IsLoggedIn';

export default function SingleCourse() {
  const { slug } = useParams();
  const { data: courseData, isLoading } = useSingleCourseData(slug);
  const axios = useAxios();
  const queryClient = useQueryClient();
  const [enrollConfirmOpen, setEnrollConfirmOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const authData = useStore((state) => state.authData);
  const setAuthData = useStore((state) => state.setAuthData);


  if (isLoading) {
    return (
      <div className="my-5 py-5">
        <Loading />
      </div>
    );
  }


  const enrollInCourse = async (paymentData) => {
    const data = { entity: enrollConfirmOpen, enroll_type: 1, ...paymentData };
    setLoading(true);
    try {
      const response = await axios.post("/courses/enroll", data);
      console.log({ response });
      setAuthData({
        ...authData,
        wallet_balance: response.data.data.wallet_balance,
      });
      console.log(response);

      queryClient.invalidateQueries("single-course");
      toast.success("تم الاشتراك بنجاح");
    } catch (err) {
      console.log(err);
      if (err.response.status === 401) {
        console.log("Unauthorized!");
      }
      toast.error(err.response.data.message);
    } finally {
      setEnrollConfirmOpen(false);
      setLoading(false);
    }

    console.log(paymentData);

  };

  console.log(courseData);

  return (
    <div>
      <div>
        <div className={`${styles.single__course_more_info} section`}>




          <Container>
            <Row className="d-flex justify-content-between">
              <Col lg={6} md={6} sm={12} className={`${styles.boxBlur}`}>
                <div className={`${styles.singleCourseTitle}`}>
                  <h2 className="mb-4">{courseData?.course?.title}</h2>
                  <div className={`${styles.course__info}`}>
                    {courseData?.course.lectures.map((lecture, index) => (
                      <p className={`${styles.course__info__description}`} key={index}>{lecture.title}</p>
                    ))}
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} className={`${styles.single_course_content} d-flex flex-column align-items-center`}>
                <div className={`${styles.imgSingleCourse} w-100 `}>
                  <img src={courseData?.course?.img} alt="Course" />
                </div>
                <div className={`${styles.detailsCourse} w-100 p-3`}>
                  <div className={`${styles.hours} d-flex justify-content-between`}>
                    <span>
                      <img src="/assets/images/Single cources/clock-three (2) 1.png" alt="clock hours single course " />
                      عدد الساعات
                    </span>
                    <span className={`${styles.clockText}`}>{courseData.course?.total_hours} ساعه</span>
                  </div>
                  <div className={`${styles.questions} mt-2 d-flex justify-content-between`}>
                    <span>
                      <img src="/assets/images/Single cources/interrogation (6) 1.png" alt="questions single course " />
                      عدد الاسئلة
                    </span>
                    <span className={`${styles.questionText}`}>{courseData.counts?.questions_count} سؤال</span>
                  </div>
                  {authData ? <>{courseData.course.is_user_enrolled ? <> <p className="text-center mt-4 f-Cairo-600 f-size-22 text-success">مدفوع</p></> : <div className={`${styles.btnSubscribe}`}>
                    <Link
                      className={`${styles.btnLink} d-block text-center`}
                      variant="secondary"
                      onClick={() => setEnrollConfirmOpen(courseData.course.slug)}
                    >
                      اشترك الان
                    </Link>
                  </div>}
                  </> : <IsLoggedIn />}







                  <div className={`${styles.price__date} d-flex justify-content-between mt-3`}>
                    <span className="align-self-end d-flex align-items-center gap-2">
                      <img src="/assets/images/Single cources/calendar (3) 1.png" alt="calender single course " />
                      <span>{courseData.course?.created_at}</span>
                    </span>
                    {courseData.course.is_user_enrolled || <Button variant="outline-secondary">{courseData.course?.price} جنيه</Button>}

                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>




        <SubscribeModal
          isOpen={enrollConfirmOpen}
          setIsOpen={setEnrollConfirmOpen}
          confirmFunc={enrollInCourse}
          loading={loading}
        />

        <div>
          <SingleCourseContent courseData={courseData} />
          <SingleCourseInfo className courseData={courseData} slug={slug} />
        </div>
      </div>
    </div>
  );
}
