import { Outlet, useParams } from "react-router";
import Accordion from "../../../../components/NavsAndTabs/NavsAndTabs";
import { useWatchCourseData } from "../../../../queries/queries";
import { useMemo } from "react";
import WatchCourseLectureTab from "./WatchCourseLectureTab";
import Loading from "../../../../components/Loading/Loading";
import { FaLock } from "react-icons/fa";
import Button from "../../../../components/Button/Button";
import styels from "../../../../components/WatchLeacture/WatchLeacture.module.css";
import { BiCategory } from "react-icons/bi";
import NavAndTabs from "../../../../components/NavsAndTabs/NavsAndTabs";
export default function WatchCourseLecture({ nextItem }) {
  const { slug, lessonSlug } = useParams();
  const { data: courseData, isLoading } = useWatchCourseData(slug);

  const {
    lectureData,
    videosData,
    materialsData,
    assignmentsData,
    quizesData,
  } = useMemo(() => {
    const lectureData = courseData?.lectures?.find(
      (ele) => ele.slug === lessonSlug
    );
    const videosData = lectureData?.items?.filter((ele) => ele.type == "video");
    const materialsData = lectureData?.items?.filter(
      (ele) => ele.type == "material"
    );
    const assignmentsData = lectureData?.items?.filter(
      (ele) => ele.type == "assignment"
    );
    const quizesData = lectureData?.items?.filter((ele) => ele.type == "quiz");
    return {
      lectureData,
      videosData,
      materialsData,
      assignmentsData,
      quizesData,
    };
  }, [courseData?.lectures, lessonSlug]);
  if (isLoading) return <Loading />;

  const joinedOrNot = courseData?.lectures?.map((ele) => {
    return ele;
  });

  const find = joinedOrNot.find((ele) => ele.slug == lessonSlug);

  if (!find?.has_passed_pre_quiz) {
    return (
      <div className="h-100 d-flex flex-column justify-content-center align-items-center text--dark fs-3 gap-3">
        <h3 className="d-flex align-items-center gap-3">
          <span>يجب اجتياز الامتحان اولا{" "}</span>
          <span style={{ color: "#dc3545", lineHeight: "2px" }}>
            <FaLock />
          </span>
        </h3>
        <div><span className="fw-bold">الأمتحان: </span><span>{find?.pre_quiz?.quiz_title}</span></div>
        <div><span className="fw-bold">المحاضرة: </span><span>{find?.pre_quiz?.lesson_title}</span></div>
        <div style={{ lineHeight: 1 }}><Button variant="blue" as="link" to={`/courses/watch/${slug}/${find?.pre_quiz?.lesson_slug}/quiz/${find?.pre_quiz?.quiz_slug}`}>الذهاب للامتحان</Button></div>
      </div>
    );
  }

  if (!find?.is_user_enrolled) {
    return (
      <div className="h-100 d-flex justify-content-center align-items-center text--dark">
        <h2>
          انت غير مشترك{" "}
          <span style={{ color: "#dc3545", lineHeight: "2px" }}>
            <FaLock />
          </span>
        </h2>
      </div>
    );
  }







  return <>

    <div>
      <NavAndTabs

        tabs={[
          { target: "video", element: "فيديوهات" },
          { target: "material", element: "ملفات" },
          {
            target: "assignment",
            element: "واجبات",
          },
          { target: "quiz", element: "امتحانات" },
          { target: "links", element: "روابط" },
        ]}
        rerenderer={[lessonSlug, slug]}
        route={`/${slug}/${lessonSlug}`}

        tabsContent={[

          {
            id: "materials",
            element: (
              <WatchCourseLectureTab
                items={materialsData || []}
                type="material"
                lectureData={lectureData}
                imageCourse={courseData?.img}
              />
            ),
          },
          {
            id: "assignments",
            element: (
              <WatchCourseLectureTab
                items={assignmentsData || []}
                type="assignment"
                lectureData={lectureData}
                imageCourse={courseData?.img}
              />
            ),
          },
          {
            id: "quizes",
            element: (
              <WatchCourseLectureTab
                items={quizesData || []}
                type="quiz"
                lectureData={lectureData}
                imageCourse={courseData?.img}
              />
            ),
          }
        ]}
      />
    </div>
  </>
}
