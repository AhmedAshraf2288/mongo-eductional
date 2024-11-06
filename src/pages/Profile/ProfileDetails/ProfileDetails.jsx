import { Button, Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import VerticalNavAndTabs from "../../../components/VerticalNavAndTabs/VerticalNavAndTabs";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useStore } from "../../../zustand/store"
import styles from "./ProfileDetails.module.css"

export default function ProfileDetails() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const theme = useStore(state => state.theme)
  return (
    <div className={`${styles.profile__details} section`}>
      <Container className="p-lg-0">
      <Row className="section text--dark">
        <Col lg={3} className={`${styles.profile_tabs_content} d-none d-lg-block pe-lg-0`}>
          <VerticalNavAndTabs
            defaultValue="subjects"
            id="profile-details-tabs"
            route={`/profile`}
            tabs={[
              { label: "البيانات الشخصية", target: "personal-data"},
              { label: "شحن الكود", target: "code-shipping" },
              { label: "محفظتي", target: "wallet" },
              { label: "كورساتي", target: "my-courses" },
              { label: "الامان و تاريخ تسجيل الدخول", target: "security" },
              { label: "تفاصيل المشاهدات", target: "watching-history" },
              { label: "الفواتير", target: "invoices" },
              { label: "الاشتراكات", target: "subscriptions" },
              { label: "نتائج الامتحانات", target: "exams-results" },
              // { label: "نتائج الواجب", target: "assignments-results" },
            ]}
          />
        </Col>
        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40"><path fill="#F5F5F5" d="M0 0v40C0 17.909 17.909 0 40 0H0Z"></path></svg> */}
{/* 
        <div className="d-block d-lg-none">
          <Button onClick={handleShow} className={`${styles.btn__show_profile}`}>
            <IoIosArrowBack />
          </Button>
          <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Body className={`${theme == "dark" ? "bg-black" : "bg-white"}`}>
                <VerticalNavAndTabs
                  onHide={handleClose}
                  defaultValue="subjects"
                  id="profile-details-tabs"
                  route={`/profile`}
                  tabs={[
                    { label: "البيانات الشخصية", target: "personal-data"},
                    { label: "شحن الكود", target: "code-shipping" },
                    { label: "محفظتي", target: "wallet" },
                    { label: "كورساتي", target: "my-courses" },
                    {
                      label: "الامان و تاريخ تسجيل الدخول",
                      target: "security",
                    },
                    { label: "تفاصيل المشاهدات", target: "watching-history" },
                    { label: "الفواتير", target: "invoices" },
                    { label: "الاشتراكات", target: "subscriptions" },
                    { label: "نتائج الامتحانات", target: "exams-results" },
                    // { label: "نتائج الواجب", target: "assignments-results" },
                  ]}
                />
              </Offcanvas.Body>
          </Offcanvas>
        </div>

        <Col lg={9} className="ps-lg-0">
          <div className={`${styles.profile_details__content}`}>
            <Outlet />
          </div>
        </Col> */}
      </Row>
    </Container>
    </div>
  );
}

