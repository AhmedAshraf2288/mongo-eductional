import { Container } from "react-bootstrap";
import SearchHeroSec from "../../components/SearchHeroSec/SearchHeroSec";
import CoursesList from "../../components/CoursesList/CoursesList";
import styles from "./Profile.module.css";
import { useMyLeariningData } from "../../queries/queries";
import Loading from "../../components/Loading/Loading";

export default function Profile() {
  const { data: coursesData, isLoading } = useMyLeariningData();

  if (isLoading) return <Loading />;

  return (
    <div>
      <SearchHeroSec />
      <Container>
        <div className="section">
          <h3
            className={`text-center text--dark font-urdu mb-5 ${styles.profile__title}`}
          >
            كورساتي
          </h3>
          <CoursesList courses={coursesData.data} />
        </div>
      </Container>
    </div>
  );
}
