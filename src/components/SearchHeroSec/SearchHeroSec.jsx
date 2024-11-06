import { useStore } from "../../zustand/store";
import Button from "../Button/Button";
import styles from "./SearchHeroSec.module.css";
import { useSettingsData } from "../../queries/queries";
import { Container } from "react-bootstrap";

export default function SearchHeroSec() {
  const authData = useStore((state) => state.authData);
  const { data: settings } = useSettingsData();
  const homeMainImage = settings?.find(item => item.key === "home_main_image");

  return (
    <section >
      <div className={`${styles.home} d-flex flex-column flex-md-row align-items-center justify-content-center`}>
        <div className={`${styles.cloud} d-flex`}>
          <img
            className={styles.cloud1}
            src="/assets/images/Home/cloudy-removebg-preview 2 (1).png"
            alt="Cloud 1"
            loading="lazy"
          />
          <img
            className={styles.cloud2}
            src="/assets/images/Home/cloudy-removebg-preview 2 (1).png"
            alt="Cloud 2"
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="wallGreen__gif"
            src="/assets/images/Home/Rectangle 2.png"
            alt="Wall green home page"
            loading="lazy"
          />
          <div className="d-none d-md-flex flex-column align-items-center">
            <div className={`${styles.partTreeHome} d-flex flex-column align-items-center`}>
              <img
                className={styles.partTreeMangoHome__gif}
                src="/assets/images/Home/yellow-mango-tree-isolated-white-background 2.png"
                alt="Mango Tree Part"
                loading="lazy"
              />
              <img
                className={styles.mangoHome__gif}
                src="/assets/images/Home/mongo.gif"
                alt="Mango Animation"
                loading="lazy"
              />
            </div>
            <div className={`${styles.mangoHome__tree2} d-flex flex-column align-items-center`}>
              <img
                className="tree2__png"
                src="/assets/images/Home/yellow-mango-tree-isolated-white-background 1.png"
                alt="Tree 2"
                loading="lazy"
              />
              <img
                className="logoMango2__gif"
                src="/assets/images/Home/profile 2.png"
                alt="Mango Logo"
                loading="lazy"
              />
            </div>
            <img
              className={`${styles.smallTreeHome__png} img-fluid`}
              src="/assets/images/Home/yellow-mango-tree-isolated-white-background 3.png"
              alt="Small Tree Home"
              loading="lazy"
            />
          </div>
        </div>
        <Container>
          <div className="row">
            <div className="mb-5 col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div className={styles.textHome}>
                <span className="f-Almarai-700 f-size-44">منصة</span>
                <h1 className="f-Almarai-700 f-size-44">Mango-Education</h1>
                <p className="f-Almarai-400 f-size-20">
                  منصة مانجو اديوكيشن التعليمية لشرح مادة اللغة العربية لجميع مراحل الثانوية العامة و الازهري
                </p>
                {authData ? (
                  <Button
                    className={`${styles.myCourses__btn} f-Almarai-700 f-size-20 w-50`}
                    as="link"
                    to="/dashboard/myCourses"
                  >
                    كورساتي
                  </Button>
                ) : (
                  <Button
                    className={`${styles.subscribeNow__btn} f-Almarai-700 f-size-20 w-50`}
                    as="link"
                    to="/register"
                  >
                    اشترك الان!
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}