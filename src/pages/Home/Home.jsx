import { Container } from "react-bootstrap";
import SearchHeroSec from "../../components/SearchHeroSec/SearchHeroSec";
import CoursesList from "../../components/CoursesList/CoursesList";
import CategoriesList from "../../components/CategoriesList/CategoriesList";
import { useHomeData } from "../../queries/queries";
import Loading from "../../components/Loading/Loading";
import { useStore } from "../../zustand/store";
import HomeLastActivity from "../../features/pages/Home/HomeLastActivity/HomeLastActivity";
import HomeServices from "../../features/pages/Home/HomeServices/HomeServices";

export default function Home() {
  const { data: homeData, isLoading } = useHomeData();
  const authData = useStore((state) => state.authData);

  if (isLoading)
    return (
      <div className="my-5 py-5">
        <Loading />
      </div>
    );

  return (
    <div >
      <div>
        <SearchHeroSec />
      </div>

      <div> <HomeServices /></div>

      <div>
        <div>
          {authData ? (
            <HomeLastActivity lastActivity={homeData?.last_viewd_video} />
          ) : null}
          <div>
            <CategoriesList categories={homeData?.education_levels} withTitle />
          </div>
        </div>
      </div>

      <Container>
        <div className="section">
          <CoursesList courses={homeData?.courses} withTitle />
        </div>
      </Container>
    </div>
  );
}
