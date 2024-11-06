import { BiCategory } from "react-icons/bi";
import Accordion from "../../../../components/Accordion/Accordion";
import styles from "./SingleCourseInfo.module.css";
import SingleCourseContentLesson from "../SingleCourseContentLesson/SingleCourseContentLesson";
import { useState } from "react";
import Button from "../../../../components/Button/Button";
import useAxios from "../../../../hooks/useAxios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { useStore } from "../../../../zustand/store";
import SubscribeModal from "../SubscribeModal/SubscribeModal";
import HomeTitle from "../../Home/HomeTitle/HomeTitle";

export default function SingleCourseInfo({ courseData }) {
  const axios = useAxios();
  const queryClient = useQueryClient();
  const [rerenderHeight, setRerenderHeight] = useState(0);
  const [enrollConfirmOpen, setEnrollConfirmOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const authData = useStore((state) => state.authData);
  const setAuthData = useStore((state) => state.setAuthData);

  const enrollInCourse = async (paymentData) => {
    const data = { entity: enrollConfirmOpen, enroll_type: 2, ...paymentData };
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

  console.log(enrollInCourse);
  



  return (
    <>
      <div className="section my-5 w-75 mx-auto">
        <div className={`${styles.course__content} d-flex flex-column gap-3`}>
          {courseData?.course_content[0]?.lessons.map((lesson) => (
            <Accordion
              rerender={rerenderHeight}
              title={lesson.title}
              body={
                <div className="w-100 overflow-hidden">
                  {lesson?.content?.map((content, index) => (
                    <div className="mb-3" key={index}>
                      <SingleCourseContentLesson
                        setReRender={setRerenderHeight}
                        item={content}
                        course={courseData?.course?.latest_viewed_video}
                      />
                    </div>
                  ))}
                </div>
              }
              icon={<BiCategory />}
              className={`${styles.course__content__item}`}
              key={lesson.id}
              extraButton={
                authData ? (
                  <>
                    {lesson.is_user_enrolled ? (
                      <Button
                        className={styles.course__content__button}
                        variant="secondary"
                        as="link"
                        to={`/courses/watch/${courseData.course.slug}${lesson.items?.[0]
                          ? `/${lesson.items?.[0]?.type}/${lesson.items?.[0]?.slug}`
                          : ""
                          }`}
                      >
                        الدخول للمحاضرة
                      </Button>
                    ) : (
                      <Button
                        className="mt-2 mt-lg-0"
                        variant="secondary"
                        onClick={() => setEnrollConfirmOpen(lesson.slug)}
                      >
                        شراء المحاضرة ({lesson.price} جنية)
                      </Button>
                    )}
                  </>
                ) : (
                  <Button variant="secondary" as="link" to="/login">
                    شراء المحاضرة ({lesson.price} جنية)
                  </Button>
                )
              }
            />
          ))}
        </div>
      </div>
      <SubscribeModal
        isOpen={enrollConfirmOpen}
        setIsOpen={setEnrollConfirmOpen}
        confirmFunc={enrollInCourse}
        loading={loading}
      />
    </>
  );
}
