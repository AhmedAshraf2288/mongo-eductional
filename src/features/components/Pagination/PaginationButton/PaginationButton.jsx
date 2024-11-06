import styles from "./PaginationButton.module.css";

export default function PaginationButton({
  className,
  active,
  onClick,
  children,
}) {
  return (
    <button
      className={`${styles.pagination__btn} ${
        active ? styles["pagination__btn--active"] : ""
      } ${className ? className : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
