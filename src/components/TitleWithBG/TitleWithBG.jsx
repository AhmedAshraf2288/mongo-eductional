import styles from './TitleWithBG.module.css'

export default function TitleWithBG({ title, variant, width, className, fontSize }) {
  return (
    <div className={`${styles.card__title} ${className || ""}`} style={{ maxWidth: width || "200px" }}>
      <img
        className={`${styles.card__title__bg}`}
        src={variant == "secondary" ? "/assets/images/title-bg-secondary.png" : "/assets/images/title-bg.png"}
        alt=""
      />
      <h4 className={`${styles.card__title__text}`} style={{ fontSize: fontSize || "16px" }}>
        {title}
      </h4>
    </div>
  )
}
