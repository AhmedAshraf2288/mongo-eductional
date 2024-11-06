import { FaRegClock, FaUsers } from "react-icons/fa6";
import Accordion from "../../../../components/Accordion/Accordion";
import styles from "./SingleCourseContentLesson.module.css";
import { IoIosInformationCircleOutline } from "react-icons/io";

export default function SingleCourseContentLesson({ setReRender, item, course}) {

  const getTypeIcon = (type) => {
    if (type === "video") {
      return (
        <svg
          style={{ width: "26px", height: "26px", objectFit: "contain" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>
      );
    }

    if (type === "material") {
      return (
        <svg
          style={{ width: "26px", height: "26px", objectFit: "contain" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
          />
        </svg>
      );
    }

    if (type === "assignment") {
      return (
        <svg
          style={{ width: "26px", height: "26px", objectFit: "contain" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      );
    }

    if (type === "quiz") {
      return (
        <svg
          style={{ width: "26px", height: "26px", objectFit: "contain" }}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      );
    }

    return (
      <svg
        style={{ width: "26px", height: "26px", objectFit: "contain" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    );
  };

  

  return (
    <>
      <Accordion
      title={item.title}
      icon={getTypeIcon(item.type)}
      onToggle={() =>
        setTimeout(() => setReRender((prev) => (prev + 1) % 200), 200)
      }
      body={
        <div
          className={`${styles["single__course__content-lesson-content"]} d-flex flex-column gap-2`}
        >
          <div className="d-flex gap-2 align-items-center">
            <span className="text--primary">
              <IoIosInformationCircleOutline />
            </span>
            <span className="text--dark">الوصف:</span>
            <span className="text--primary text-truncate">
              {item.description}
            </span>
          </div>
          {item.duration === undefined ? null : (
            <div className="d-flex gap-2 align-items-center">
              <span className="text--primary">
                <FaRegClock />
              </span>
              <span className="text--dark">مدة الفيديو:</span>
              <span className="text--primary">{item.duration} دقيقة</span>
            </div>
          )}
          {item.number_of_views === undefined ? null : (
            <div className="d-flex gap-2 align-items-center">
              <span className="text--primary">
                <FaUsers />
              </span>
              <span className="text--dark">عدد المشاهدات:</span>
              <span className="text--primary">
                {item.number_of_views} مشاهدة
              </span>
            </div>
          )}
          {item.total_time_of_watch === undefined ? null : (
            <div className="d-flex gap-2 align-items-center">
              <span className="text--primary">
                <FaUsers />
              </span>
              <span className="text--dark">إجمالي وقت المشاهدة:</span>
              <span className="text--primary">
                {item.total_time_of_watch} دقيقة
              </span>
            </div>
          )}
        </div>
      }
      activeHeaderClass={styles["single__course__content-lesson"]}
    />
    </>
  );
}
