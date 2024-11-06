import { useEffect, useRef } from "react";
import { FaAngleDown } from "react-icons/fa";
import styles from "./DropDown.module.css";

export default function DropDown({
  title,
  children,
  isOpen,
  setIsOpen,
  between,
}) {
  const optionsRef = useRef();
  const contRef = useRef();

  useEffect(calcHeight, [contRef, isOpen]);

  function calcHeight() {
    if (contRef?.current && optionsRef?.current) {
      const scrollTop = document.documentElement.scrollTop;
      const scrollLeft = document.documentElement.scrollLeft;
      const rect = contRef.current.getBoundingClientRect();
      optionsRef.current.style.top = rect.top + rect.height + scrollTop + "px";
      optionsRef.current.style.right =
        window.innerWidth - rect.right + scrollLeft + "px";
    }
  }

  useEffect(() => {
    function closeOptions(e) {
      if (contRef.current && !contRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("click", closeOptions);

    return () => {
      document.removeEventListener("click", closeOptions);
    };
  }, [setIsOpen]);

  return (
    <div ref={contRef}>
      <span
        className={`${styles.more__icon} ${
          between ? "justify-content-between" : "justify-content-center"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`${styles.dropdown__title}`}>{title}</div>
        <div className="flex-shrink-0">
          <FaAngleDown />
        </div>
      </span>
      <div
        ref={optionsRef}
        className={`${styles.dropdown} ${
          isOpen ? styles["dropdown--open"] : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
