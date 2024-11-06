import { Container } from "react-bootstrap";
import { useNotifications } from "../../queries/queries";
import Loading from "../../components/Loading/Loading";
import Notification from "../../components/Notification/Notification";

export default function Notifications() {
    const { data: notifications, isLoading } = useNotifications()

    console.log({ notifications })

    if (isLoading) {
        return <Loading />
    }

    return (
        <Container className="py-5">
            <h1 className="text--dark">
                الاشعارات
            </h1>
            <div className="mt-4">
                {notifications.data.map(notification => (
                    <Notification key={notification.id} notification={notification} />
                ))}
            </div>
        </Container>
    )
}
