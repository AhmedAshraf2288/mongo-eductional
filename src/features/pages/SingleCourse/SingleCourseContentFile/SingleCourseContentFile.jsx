import Accordion from "../../../../components/Accordion/Accordion";
import styles from "./SingleCourseContentFile.module.css";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaRegFileAlt } from "react-icons/fa";

export default function SingleCourseContentFile({ setReRender, material }) {
  return (
    <Accordion
      title={material.title}
      icon={<FaRegFileAlt />}
      onToggle={() => setTimeout(() => setReRender(prev => (prev + 1) % 200), 200)}
      body={
        <div
          className={`${styles["single__course__content-lesson-content"]} d-flex flex-column gap-2`}
        >
          <div className="d-flex gap-2 align-items-center">
            <span className="text--tertary-light">
              <IoIosInformationCircleOutline />
            </span>
            <span>الوصف:</span>
            <span className="text--tertary-light text-truncate">
              {material.description}
            </span>
          </div>
        </div>
      }
      type=""
      activeHeaderClass={styles["single__course__content-lesson"]}
    />
  );
}
