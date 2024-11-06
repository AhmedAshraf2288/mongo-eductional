import { Navigate, useNavigate, useParams } from "react-router";
import { useWatchCourseData } from "../../queries/queries";
import Loading from "../../components/Loading/Loading";
import styles from "./WatchCourse.module.css";
import { useEffect, useMemo, useState } from "react";
import WatchCourseLecture from "../../features/pages/WatchCourse/WatchCourseLecture/WatchCourseLecture";
import { useStore } from "../../zustand/store";

export default function WatchCourse() {
  const { slug, lessonSlug } = useParams();
  const { data: courseData, isLoading } = useWatchCourseData(slug);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const firstItem = courseData?.lectures?.[0];

  // Redirect to the first lecture if no lessonSlug is provided
  useEffect(() => {
    if (!lessonSlug && slug && courseData && firstItem) {
      navigate(`/courses/watch/${slug}/${firstItem.slug}`, { replace: true });
    }
  }, [slug, lessonSlug, courseData, firstItem, navigate]);

  // Get the next item in the lecture list
  const nextItem = useMemo(() => {
    const allItems = courseData?.lectures?.flatMap((lecture) => lecture.items) || [];
    const currItemIdx = allItems.findIndex((ele) => ele.slug === lessonSlug);
    return (currItemIdx >= 0 && currItemIdx < allItems.length - 1) ? allItems[currItemIdx + 1] : null;
  }, [lessonSlug, courseData]);

  // Loading state
  if (isLoading) {
    return (
      <div className="my-5 py-5">
        <Loading />
      </div>
    );
  }

  // Redirect if user is not enrolled
  if (!courseData?.is_user_enrolled) {
    return <Navigate to={`/courses/${slug}`} replace />;
  }

  // No lectures available
  if (courseData?.lectures?.length === 0) {
    return (
      <p className="py-5 fs-3 fw-bold text-center text--dark">
        سوف يتم إضافة محاضرات قريبا
      </p>
    );
  }

  // Main content
  return <>
      <div className={`${styles.watch_course}`}>
        <div className={`w-100 ${styles.mainContent}`}>
          <WatchCourseLecture nextItem={nextItem} />
        </div>
      </div>
  </>
}