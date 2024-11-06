import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./Accordion.module.css";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Accordion({
  toggle,
  title,
  description,
  // icon,
  body,
  className,
  bodyNoPadding,
  activeClass,
  headerClass,
  activeHeaderClass,
  indicatorClass,
  onToggle,
  rerender,
  extraButton,
}) {
  const [accordionOpened, setaccordionOpened] = useState(false);
  const contentRef = useRef();
  const [contentHeight, setContentHeight] = useState(300);

  console.log(rerender);

  useLayoutEffect(() => {
    if (!contentRef) return;
    setContentHeight(contentRef?.current?.scrollHeight);
  }, [contentRef, contentRef?.current?.scrollHeight, rerender]);

  useEffect(() => {
    setaccordionOpened(false);
  }, [toggle]);

  return (
    <div
      className={`${styles.accordion__item} ${
        accordionOpened ? styles["accordion__item--opened"] : ""
      } ${className ? className : ""} ${
        accordionOpened && activeClass ? activeClass : ""
      }`}
    >
      <div
        className={`${styles.accordion__title} justify-content-between ${
          headerClass || ""
        } ${
          accordionOpened
            ? activeHeaderClass || styles["accordion__title--active"]
            : ""
        }`}
        onClick={() => {
          if (onToggle) onToggle();
          setaccordionOpened(!accordionOpened);
        }}
      >
        <div className="w-100 d-flex justify-content-between flex-column flex-lg-row align-items-center">
          <div>
            <div
              className={`${styles.accordion__indicator} ${
                accordionOpened ? styles["accordion__indicator--opened"] : ""
              } ${indicatorClass ? indicatorClass : ""} flex-shrink-0`}
            >
              <div className="fs-5">
                <span className="me-3">
                  <MdArrowBackIosNew />
                </span>

                {title}
              </div>
              <div className="fw-normal">{description}</div>
            </div>
          </div>
          {extraButton}
        </div>
      </div>
      <div
        className={`d-flex flex-column gap-3 ${styles.accordion__body} ${
          !accordionOpened ? styles["accordion__body--closed"] : ""
        } ${bodyNoPadding ? styles["accordion__body--no-padding"] : ""}`}
        style={{ height: contentHeight }}
        ref={contentRef}
      >
        <div className={styles.accordion__body__content}>{body}</div>
      </div>
    </div>
  );
}
