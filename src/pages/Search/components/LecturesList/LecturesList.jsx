import { Col, Row } from "react-bootstrap";
import LectureCard from "../LectureCard/LectureCard";

export default function LecturesList({ lectures }) {
    return (
        <Row className="section justify-content-center">
            {lectures.map(lecture => {
                return (
                    <Col md={6} lg={4} key={`lecture-card-${lecture.slug}`}>
                        <LectureCard lecture={lecture} />
                    </Col>
                )
            })}
        </Row>
    )
}
