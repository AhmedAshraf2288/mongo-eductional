import styles from "./ProfleTitle.module.css";

export default function ProfleTitle({
  title,
  icon,
  className,
  number,
  swap,
  fontSmall,
  start,
}) {
  return (
    <div
      className={`d-flex ${start ? "justify-content-start" : "justify-content-center"}  mb-5 ${className || ""} ${
        swap ? styles.swap : ""
      } ${fontSmall ? styles.font_small : ""}`}
    >
      <div
        className={`${styles.number__block} ${styles.number__block__number} d-flex gap-2 align-items-center`}
      >
        {number}
        {icon ? (
          <span className={`${styles.number__block__icon}`}>{icon}</span>
        ) : (
          ""
        )}
      </div>
      <div className={`${styles.number__block} ${styles.number__block__title}`}>
        {title}
      </div>
    </div>
  );
}
