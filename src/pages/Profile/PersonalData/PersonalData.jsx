import styles from "./PrsonaleData.module.css";
import { useProfileInfoData } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";
import { Col, Row } from "react-bootstrap";
import CircleProgressBar from "../../../components/CircleProgressBar/CircleProgressBar";

const divide = (x, y) => {
  if (x / y > 1) {
    return 1;
  }

  if (isNaN(x / y)) {
    return 1;
  }

  return x / y;
};



export default function PersonalData() {
  const { data: profileData, isLoading } = useProfileInfoData();
  console.log(profileData);

  if (isLoading) return <Loading />;

  console.log(profileData);
  return (
    <section>
      <div className="container">
        <div className={`my-4 ${styles.student__info}`}>
          <div className="fs-5">{profileData.student_info.name}</div>
        </div>
        <div className={`my-4 ${styles.student__info}`}>
          <div className="fs-5">{profileData.student_info.phone}</div>
        </div>
        <div className={`my-4 ${styles.student__info}`}>
          <div className="fs-5">
            {profileData.student_info.email || "test@gmail.com"}
          </div>
        </div>
      </div>
    </section>
  );
}
