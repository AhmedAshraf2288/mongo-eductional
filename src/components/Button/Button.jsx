import { Link } from "react-router-dom";
import styles from "./Button.module.css";
import Loading from "../Loading/Loading";

export default function Button({
  variant,
  children,
  as,
  to,
  className,
  onClick,
  type,
  isLoading,
  disabled,
  bigPadding,
  rounded,
  target,
  style,
}) {
  if (as == "link") {
    return (
      <LinkComponent
        variant={variant}
        to={to}
        className={className}
        target={target}
        bigPadding={bigPadding}
        rounded={rounded}
        style={style}
      >
        {children}
      </LinkComponent>
    );
  } else {
    return (
      <ButtonComponent
        variant={variant}
        className={className}
        onClick={onClick}
        type={type}
        isLoading={isLoading}
        disabled={disabled || isLoading}
        bigPadding={bigPadding}
        rounded={rounded}
        style={style}
      >
        {children}
      </ButtonComponent>
    );
  }
}

function ButtonComponent({
  variant,
  children,
  className,
  onClick,
  type,
  isLoading,
  disabled,
  bigPadding,
  rounded,
  style,
}) {
  return (
    <button
      className={` ${styles.button} ${
        bigPadding ? styles["button--big-padding"] : ""
      } ${rounded ? styles["button--rounded"] : ""} ${styles["button__" + (variant || "primary")]} ${
        className || ""
      } justify-content-center
    `}
      type={type || "button"}
      onClick={onClick}
      disabled={disabled}
      style={style}
    >
      {children}{" "}
      {isLoading ? (
        <Loading
          className={`loading--small ${variant == "secondary" ? "" : "light"}`}
          widthFit
        />
      ) : (
        ""
      )}
    </button>
  );
}

function LinkComponent({
  variant,
  children,
  to,
  className,
  onClick,
  target,
  bigPadding,
  rounded,
  style,
}) {
  return (
    <Link
      className={` ${styles.button} ${
        bigPadding ? styles["button--big-padding"] : ""
      } ${rounded ? styles["button--rounded"] : ""} ${
        styles["button__" + (variant || "primary")]
      } ${className || ""} text-decoration-none d-block text-center`}
      to={to}
      onClick={onClick}
      target={target}
      style={style}
    >
      {children}
    </Link>
  );
}
