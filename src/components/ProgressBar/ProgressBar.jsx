import styles from "./ProgressBar.module.css";

export default function ProgressBar({ bgColor, percentage, height }) {
  return (
    <div className={`${styles.progress} w-100`}>
      <div className={styles.progress__bar__cont} style={{
        height: height || '6px'
      }}>
        <div
          className={styles.progress__bar}
          style={{
            backgroundColor: bgColor || "black",
            width: `${percentage}%`,
          }}
        ></div>
      </div>
    </div>
  );
}
