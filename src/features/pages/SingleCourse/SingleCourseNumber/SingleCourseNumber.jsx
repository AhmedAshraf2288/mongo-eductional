import styles from "./SingleCourseNumber.module.css";

export default function SingleCourseNumber({ number, title, icon }) {
  return (
    <div className="d-flex gap-2">
      <div>
      <spa className={`${styles.number__block__icon}`}>{icon}</spa>
      </div>
      <div className={`${styles.number__block__title}`}>
        <p className="m-0">{title}: <span> {number}</span></p>
      </div>
    </div>
  );
}
