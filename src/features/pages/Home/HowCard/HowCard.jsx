import styles from "./HowCard.module.css";

export default function HowCard({ img, text }) {
  return (
    <div
      className={`${styles.how__card} d-flex flex-column align-items-center gap-1`}
    >
      <div className={`${styles.how__card__icon}`}>
        <img src={img} />
      </div>
      <div className={`${styles.how__card__text}`}>{text}</div>
    </div>
  );
}
