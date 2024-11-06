import { useParams } from "react-router"
import { useCategoryData } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";
import CoursesList from "../../../components/CoursesList/CoursesList";
import { Container } from "react-bootstrap";

export default function SingleCategory() {
    const { id } = useParams()
    const { data: categoryData, isLoading } = useCategoryData(id);

    

    if (isLoading) {
        return <div className="my-5 py-5"><Loading /></div>
    }

    return (
        <Container className="py-5">
            <CoursesList courses={categoryData.courses} withTitle />
        </Container>
    )
}
