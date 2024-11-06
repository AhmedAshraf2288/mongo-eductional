import "./Switch.css";
export default function Switch({
  isOn,
  handleToggle,
  colorOne,
  colorTwo,
  id,
  position,
  iconInside,
  className,
}) {
  return (
    <div
      className={`d-flex justify-content-${
        position || "center"
      } align-items-center gap-3 ${className || ""}`}
    >
      <div className="position-relative">
        <input
          checked={!isOn}
          onChange={handleToggle}
          className="switch-checkbox d-none"
          id={id}
          type="checkbox"
        />
        <label
          style={{ background: isOn ? colorOne : colorTwo }}
          className="switch-label"
          htmlFor={id}
        >
          <span
            className={`switch-button d-flex align-items-center justify-content-center`}
          >
            {iconInside || ""}
          </span>
        </label>
      </div>
    </div>
  );
}
