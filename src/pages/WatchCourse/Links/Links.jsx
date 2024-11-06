import { useParams } from "react-router";
import { useWatchCourseData } from "../../../queries/queries";
import styles from "./Links.module.css";
import { useMemo } from "react";
import Loading from "../../../components/Loading/Loading";
import { Link } from "react-router-dom";
import { Col, OverlayTrigger, Row, Tooltip } from "react-bootstrap";
import { IoIosArrowBack } from "react-icons/io";

const Links = () => {
  const { slug, lessonSlug } = useParams();
  const { data: courseData, isLoading } = useWatchCourseData(slug);

  const CustomTooltip = ({ id, children, title }) => (
    <OverlayTrigger
      overlay={
        <Tooltip id={id}>
          <div>{title}</div>
        </Tooltip>
      }
    >
      {children}
    </OverlayTrigger>
  );

  const { links } = useMemo(() => {
    const lectureData = courseData?.lectures?.find(
      (ele) => ele.slug === lessonSlug
    );

    const links = lectureData?.items?.filter((ele) => ele.type === "links");
    return {
      lectureData,
      links,
    };
  }, [courseData?.lectures, lessonSlug]);

  if (isLoading) {
    return <Loading />;
  }

  if(links.length == 0) {
    return <div className="py-5">
      <h2 className="text--dark text-center py-5 my-5">لا يوجد روابط</h2>
    </div>
  }

  return (
    <Row>
      {links.map((link, index) => (
        <Col className="mb-3" md={links.length === 1 ? 12 : 6} key={index}>
          <div
            className={`d-flex align-items-center justify-content-between ${styles.link__content}`}
          >
            <div className="d-flex align-items-center gap-3">
              <div className={styles.link__image}>
                <img src={courseData?.img} alt={link.title} />
              </div>
              <p className="m-0 text--dark">{link.title}</p>
            </div>
            <CustomTooltip id={`tooltip-${index}`} title="انقر للفتح">
              <Link target="_blank" to={link.link}>
                <span className={styles.link}>
                  <IoIosArrowBack />
                </span>
              </Link>
            </CustomTooltip>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default Links;
