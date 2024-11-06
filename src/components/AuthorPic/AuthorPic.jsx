import styles from './AuthorPic.module.css'

export default function AuthorPic({ img }) {
  return (
    <div className={styles.author__pic}>
      <img src={img} alt="" />
    </div>
  )
}
