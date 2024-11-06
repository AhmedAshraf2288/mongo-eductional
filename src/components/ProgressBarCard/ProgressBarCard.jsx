import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


const ProgressBarCard = ({ value, maxValue, text, color, label }) => {
  return (
    <div>
      <p className="text--dark">{label}</p>
      <div style={{ width: 90, height: 90, margin: "0 auto" }}>
        <CircularProgressbar
          value={value}
          maxValue={maxValue}
          text={text}
          styles={buildStyles({
            pathColor: color,
            trailColor: "#d6d6d6",
          })}
        />
      </div>
    </div>
  );
};

export default ProgressBarCard;
