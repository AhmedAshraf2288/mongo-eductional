import { Row } from "react-bootstrap";
import Button from "../../../../../components/Button/Button";

export default function WatchCourseQuizSubmitBtn({
  setSubmitting,
  type,
}) {
  return (
    <div className="mb-5">
      <Row className="align-items-center justify-content-end flex-column-reverse flex-lg-row">
        <Button
          onClick={() => setSubmitting(true)}
          variant="red"
        >
          {type == "assignment" ? "إنهاء الواجب" : "إنهاء الامتحان"}
        </Button>
      </Row>
    </div>
  );
}
