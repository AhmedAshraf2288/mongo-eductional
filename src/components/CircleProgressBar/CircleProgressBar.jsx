import styles from "./CircleProgressBar.module.css";

export default function CircleProgressBar({
  percentage,
  label,
  subTitle,
  circleWidth,
  strokeWidth,
  className,
}) {
  const radius = (circleWidth - strokeWidth * 2) / 2;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className="d-flex flex-column align-items-center">
      <div
        className={`${styles.circle__cont} position-relative d-flex flex-column align-items-center ${
          className ? className : ""
        }`}
      >
        <svg
          width={circleWidth}
          height={circleWidth}
          viewBox={`0 0 ${circleWidth} ${circleWidth}`}
        >
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={`${strokeWidth}px`}
            r={radius}
            className={styles.circle__background}
          />
          <circle
            cx={circleWidth / 2}
            cy={circleWidth / 2}
            strokeWidth={`${strokeWidth}px`}
            r={radius}
            className={styles.circle__progress}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
              stroke: "var(--primary)",
            }}
            transform={`rotate(-90 ${circleWidth / 2} ${circleWidth / 2})`}
          />
        </svg>
        <div className="position-absolute top-50 start-50 translate-middle">
          <div>{label}</div>
          <div className="fs-5 fw-bold">{percentage}%</div>
        </div>
      </div>
      <div style={{fontSize: "18px"}}>{subTitle}</div>
    </div>
  );
}
