import styles from './Info.module.css'

export default function Info({children, borderSmall, className, variant}) {
  return (
    <div className='d-flex'>
      <div className={`${styles.info__card} ${borderSmall ? styles['info__card--border-small'] : ''} ${styles[`info__card--${variant || 'primary'}`]} ${className || ''}`}>
        {children}
      </div>
    </div>
  )
}
