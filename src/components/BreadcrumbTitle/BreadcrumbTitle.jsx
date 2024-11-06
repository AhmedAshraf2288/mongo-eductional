import { MdArrowBackIosNew } from "react-icons/md";

export default function BreadcrumbTitle({ breadcrumbEle }) {
  return (
    <div className="d-flex mb-5 mt-md-0 mt-5 flex-wrap">
      {breadcrumbEle.map((ele, index) => {
        return (
          <div
            key={index}
            style={{
              color: index === breadcrumbEle.length - 1 ? "#ffbc1f" : "#009dfe",
            }}
          >
            <div className="d-flex  align-items-center">
              <span className="mx-3 fw-bold">{`${ele}`}</span>
              <span className="text--dark fw-bold">
                {" "}
                {index === breadcrumbEle.length - 1 ? (
                  ""
                ) : (
                  <MdArrowBackIosNew />
                )}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
