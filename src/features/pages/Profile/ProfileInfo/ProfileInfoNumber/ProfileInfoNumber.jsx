import styles from './ProfileInfoNumber.module.css'

export default function ProfileInfoNumber({number, title, color}) {
  return (
    <div className='d-flex'>
      <div className={`${styles.number__block} ${styles.number__block__number} d-flex gap-2 align-items-center`} style={{backgroundColor: color || "#4740a7"}}>
        <span>{number}</span>
      </div>
      <div className={`${styles.number__block} ${styles.number__block__title}`} style={{border: `1px solid ${color || "#4740a7"}`, color: color || "#4740a7"}}>
        {title}
      </div>
    </div>
  )
}
