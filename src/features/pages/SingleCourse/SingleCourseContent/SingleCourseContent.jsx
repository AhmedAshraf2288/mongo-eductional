import styles from "./SingleCourseContent.module.css";

export default function SingleCourseContent({ courseData }) {
  return (
    <>
      <div className="section my-5 ms-4">
        <h2 className="mb-4">محتوي الكورس</h2>
        <div className={`${styles.course__content} d-flex gap-3`}>
          <div className={`${styles.content} d-flex gap-2`}>
            <div className={`${styles.imgContent}`}>
              <img src="/assets/images/Single cources/videoContent.png" alt="icon  content" />
            </div>
            <div className="textContent">
              <span>{courseData.counts.videos_count} فيديو</span>
            </div>
          </div>
          <div className={`${styles.content} d-flex gap-2`}>
            <div className={`${styles.imgContent}`}>
              <img src="/assets/images/Single cources/fileContent.png" alt="icon  content" />
            </div>
            <div className="textContent">
              <span>{courseData.counts.materials_count} ملف</span>
            </div>
          </div>
          <div className={`${styles.content} d-flex gap-2`}>
            <div className={`${styles.imgContent}`}>
              <img src="/assets/images/Single cources/assigmentContent.png" alt="icon  content" />
            </div>
            <div className="textContent">
              <span>{courseData.counts.assignments_count} واجب</span>
            </div>
          </div>
          <div className={`${styles.content} d-flex gap-2`}>
            <div className={`${styles.imgContent}`}>
              <img src="/assets/images/Single cources/quizeContent.png" alt="icon  content" />
            </div>
            <div className="textContent">
              <span>{courseData.counts.quizzes_count} امتحان</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
