import { useLocation } from "react-router";
import HeroSearchBar from "../../features/components/SearchHeroSec/HeroSearchBar/HeroSearchBar";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import CoursesList from "../../components/CoursesList/CoursesList";
import LecturesList from "./components/LecturesList/LecturesList";
import { Container } from "react-bootstrap";

export default function Search() {
    const [searchCourses, setSearchCourses] = useState([])
    const [searchLectures, setSearchLectures] = useState([])
    const axios = useAxios()
    const { search } = useLocation()
    const searchParams = new URLSearchParams(search)
    const param = searchParams.get("q")

    const handleSearch = async (param) => {
        const data = new FormData()
        data.append("search", param)

        try {
            const response = await axios.post("/home/search", data)
            console.log({ response })
            setSearchCourses(response.data.data.search_courses)
            setSearchLectures(response.data.data.search_lectures)
        } catch (err) {
            console.log(err)
            toast.error(err.response.data.message)
        }
    }

    useEffect(() => {
        handleSearch(param)
    }, [param])

    return (
        <Container className="p-4">
            <HeroSearchBar param={param} />
            <div>
                <h2>الكورسات</h2>
                {searchCourses.length === 0 ? (
                    <p className="pt-2">
                        لا يوجد كورسات تتوافق مع هذا البحث
                    </p>
                ) : null}
                <CoursesList courses={searchCourses} />
            </div>
            <div>
                <h2>المحاضرات</h2>
                {searchLectures.length === 0 ? (
                    <p className="pt-2">
                        لا يوجد محاضرات تتوافق مع هذا البحث
                    </p>
                ) : null}
                <LecturesList lectures={searchLectures} />
            </div>
        </Container>
    )
}
