import Button from "../../../../components/Button/Button";
import styles from "./SingleCourseMoreInfo.module.css";
import SubscribeModal from "../SubscribeModal/SubscribeModal";
import { useNavigate } from "react-router";
import { useStore } from "../../../../zustand/store";
import useAxios from "../../../../hooks/useAxios";
import { useState } from "react";
import { toast } from "react-toastify";
import Info from "../../../../components/Info/Info";

import { Col, Row } from "react-bootstrap";

export default function SingleCourseMoreInfo({ courseData }) {
  const [authData, setAuthData] = useStore((state) => [
    state.authData,
    state.setAuthData,
  ]);
  const navigate = useNavigate();
  const axios = useAxios();
  const [enrollConfirmOpen, setEnrollConfirmOpen] = useState(false);

  const enrollInCourse = async (paymentData) => {
    const data = {
      entity: courseData?.course?.slug,
      enroll_type: 1,
      ...paymentData,
    };
    try {
      const response = await axios.post("/courses/enroll", data);
      console.log({ response }, "response");
      setAuthData({
        ...authData,
        wallet_balance: response.data.data.wallet_balance,
      });
      navigate(`/courses/watch/${courseData?.course?.slug}`);
    } catch (err) {
      if (err.response.status === 401) {
        console.log("Unauthorized!");
      }
      toast.error(err.response.data.message);
    }
  };

 

  return (
    <>
      <div>
        <Row className="flex-lg-row flex-column-reverse">
          <Col lg={6} className="mb-5 mb-lg-0">
            {/* <div className={`${styles.course__info} h-100 d-flex flex-column justify-content-between`}>
              <p className={`${styles.course__info__description}`}>
                {courseData?.course?.description}
              </p>
              <div className="d-flex justify-content-between align-items-end flex-column flex-lg-row gsp-lg-0 gap-3">
                {courseData.course.is_user_enrolled && authData ? (
                  <div className="w-100">
                    {courseData.course.is_user_fully_enrolled ? (
                      <>
                        <Info className="w-100 text-center mb-3">
                          أنت مشترك فى الكورس بالكامل
                        </Info>
                        <Button
                          className={`w-100 ${styles.course__info__btn}`}
                          as="link"
                          to={`/courses/watch/${courseData?.course?.slug}`}
                        >
                          شاهده الآن
                        </Button>
                      </>
                    ) : (
                      <>
                        <Info
                          variant="primary"
                          className="w-100 text-center mb-3"
                        >
                          أنت مشترك فى أحد / بعض محاضرات الكورس
                        </Info>
                        <Button
                          className={`${styles.course__info__btn} w-100`}
                          bigPadding
                          onClick={() => setEnrollConfirmOpen(true)}
                        >
                          اشترك الان!
                        </Button>
                      </>
                    )}
                  </div>
                ) : (
                  <div className={`w-75 ${styles.course__info_not_shared} `}>
                    {authData ? (
                      <Button
                        className={`${styles.course__info__btn} w-100`}
                        bigPadding
                        onClick={() => setEnrollConfirmOpen(true)}
                      >
                        اشترك الان!
                      </Button>
                    ) : (
                      <Button
                        className={`${styles.course__info__btn}`}
                        as="link"
                        to="/login"
                        style={{ whiteSpace: "unset" }}
                      >
                        قم بتسجيل الدخول لتتمكن من الاشتراك فى الكورس
                      </Button>
                    )}
                  </div>
                )}
                {courseData?.course?.is_user_enrolled ? (
                  ""
                ) : (
                  <div
                    className={`${styles.course__price} d-flex flex-column justify-content-center align-items-center`}
                  >
                    <p>سعر الاشتراك </p>
                    <h6>{courseData?.course?.price}جنيه</h6>
                  </div>
                )}
              </div>
            </div> */}
          </Col>


          {/* <Col lg={6} className={` mb-3 mb-lg-0`}>

          </Col> */}
        </Row>

        <SubscribeModal
          isOpen={enrollConfirmOpen}
          setIsOpen={setEnrollConfirmOpen}
          confirmFunc={enrollInCourse}
        />
      </div>
    </>
  );
}
