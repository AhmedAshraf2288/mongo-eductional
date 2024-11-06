import styles from "./HomeTitle.module.css";

export default function HomeTitle({ firstPart, secondPart, color }) {

  const colorText = () => {
    if (color == "dark") {
      return "#000"
    } else if (color == "light") {
      return "#fff"
    } else {
      return "#009DFE"
    }
  }

  return (
    <div className={`${styles.boxBlurTitle}`}>
      <div
        className={`${styles.title}`}
        style={{
          width: "fit-content",
          color: colorText()
        }}
      >
        <span>
          {firstPart} {secondPart}
        </span>
      </div>
    </div>
  );
}
