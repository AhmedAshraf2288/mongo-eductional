import { Container } from "react-bootstrap"
import Loading from "../../components/Loading/Loading"
import TitleWithBG from "../../components/TitleWithBG/TitleWithBG"
import { useStudentPoints } from "../../queries/queries"
import styles from "./Leaderboard.module.css"

export default function Leaderboard() {
    const { data: studentPoints, isLoading } = useStudentPoints()
    console.log({ studentPoints })

    return (
        <Container className="text-center py-4">
            <TitleWithBG
                title="ترتيب الطلاب"
                fontSize="24px"
                width="230px"
                variant="secondary"
                className="mb-4"
            />
            {isLoading ? <Loading /> : (
                <>
                    {studentPoints.data.length === 0 ? (
                        <p>لا يوجد اى فواتير</p>
                    ) : (
                        <div className={`rounded ${styles['table-container']} mb-5`}>
                            <table>
                                <thead>
                                    <th>الترتيب</th>
                                    <th>عدد النقاط</th>
                                    <th>اسم الطالب</th>
                                    <th>المحافظة</th>
                                </thead>
                                <tbody>
                                    {studentPoints.data.map(record => (
                                        <tr key={record.id}>
                                            <td>{record.rank}</td>
                                            <td>{record.points}</td>
                                            <td>{record.student.name}</td>
                                            <td>{record.student.governrate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </>
            )}
        </Container>
    )
}
