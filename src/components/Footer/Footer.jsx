import { Col, Container, Row } from "react-bootstrap";
import { useSettingsData } from "../../queries/queries";
import { FaTelegram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useStore } from "../../zustand/store";
import styles from "./Footer.module.css";
import '../../index.css'


export default function Footer() {
  const { data: settings } = useSettingsData();
  const footerLinks = JSON.parse(
    settings?.find((item) => item.key === "footer_links")?.value || "{}"
  );
  const footerImage = settings?.find((item) => item.key === "home_main_image");
  const authData = useStore((state) => state.authData);

  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footer__cont}`}>
        <Container>
          <div className="pt-5 pb-3">
            <div>
              <Row className="pb-4">
                <Col
                  md={6}
                  className="d-flex justify-content-between flex-lg-row flex-column pe-2"
                >
                  <div className={` d-flex  justify-content-sm-center gap-4 align-items-center  ${styles.footer__logo}`}>
                    <NavLink href="/">
                      <img
                        className={styles.imgMongoFooter}
                        src={footerImage?.value || "/assets/images/mongoLogo.svg"}
                        alt="logo image footer"
                      />
                    </NavLink>
                    <NavLink
                      to={"/"}
                      className={`${styles.footer__anv__link} f-Almarai-400 f-size-20`}
                    >
                      الرئيسية
                    </NavLink>
                    <NavLink
                      to={"/dashboard/myCourses"}
                      className={`${styles.footer__anv__link} f-Almarai-400 f-size-20`}
                    >
                      كورساتي
                    </NavLink>

                    <NavLink
                      to={"/dashboard/wallet"}
                      className={`${styles.footer__anv__link} f-Almarai-400 f-size-20`}
                    >
                      محفظتي
                    </NavLink>
                    <NavLink
                      to={"/dashboard/codeShipping"}
                      className={`${styles.footer__anv__link} f-Almarai-400 f-size-20`}
                    >
                      شحن الكود
                    </NavLink>
                  </div>
                </Col>
                <Col
                  md={6}
                  className="d-flex justify-content-between flex-lg-row flex-column "
                >
                  <div className="mb-3 mb-lg-0"></div>
                  <div className="text-center mb-3 mb-lg-0">
                    <div className="d-flex justify-content-center align-content-center flex-column pb-4">

                      <div className="d-flex gap-4 justify-content-center flex-wrap mt-4">
                        {footerLinks.whatsapp !== undefined ? (
                          <a
                            href={footerLinks.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.footer_social__icon}`}
                          >
                            <img
                              src="/assets/icons/footerIcons/telegram.svg"
                              alt="footer icon"
                            />
                          </a>
                        ) : null}
                        {footerLinks.youtube !== undefined ? (
                          <a
                            href={footerLinks.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.footer_social__icon}`}
                          >
                            <img
                              src="/assets/icons/footerIcons/youTube.svg"
                              alt="footer icon"
                            />
                          </a>
                        ) : null}
                        {footerLinks.instagram !== undefined ? (
                          <a
                            href={footerLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.footer_social__icon}`}
                          >
                            <img
                              src="/assets/icons/footerIcons/insta.svg"
                              alt="footer icon"
                            />
                          </a>
                        ) : null}
                        {footerLinks.facebook !== undefined ? (
                          <a
                            href={footerLinks.facebook}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.footer_social__icon}`}
                          >
                            <img
                              src="/assets/icons/footerIcons/face.svg"
                              alt="footer icon"
                            />
                          </a>
                        ) : null}
                        {footerLinks.telegram !== undefined ? (
                          <a
                            href={footerLinks.telegram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${styles.footer_social__icon}`}
                          >
                            <FaTelegram style={{ fontSize: "40px" }} />
                          </a>
                        ) : null}
                      </div>

                    </div>
                  </div>
                </Col>
              </Row>
            </div>

            <div className={`text-center ${styles.footer__copyrights}`}>
              <p className="f-Roboto-400 ">
                Developed By&gt;
                <a
                  className=" mx-1"
                  href="https://fast-web1.net"
                  target="blank"
                >
                  FAST WEB
                </a>
                <span >
                </span>
                &lt;All Copy Rights Reserved &copy; 2024&gt;
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
