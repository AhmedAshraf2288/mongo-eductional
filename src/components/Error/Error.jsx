import styles from "./Error.module.css";

export default function Error({ children, className }) {
  return (
    <p className={`${styles.error} m-0 ${className ? className : ""}`}>
      {children}
    </p>
  );
}
