import { Fragment, useEffect } from "react";
import Pusher from "pusher-js";
import { useQueryClient } from "@tanstack/react-query";

export default function NotificationsPusher() {
    const queryClient = useQueryClient()

    useEffect(() => {
        const pusher = new Pusher("48bcb43c9271aaec8d26", {
            cluster: "mt1",
        })

        const channel = pusher.subscribe("new_notification_channel")
        channel.bind("App\\Events\\NewNotificationEvent", (data) => {
            console.log("Received notification:", data)
            queryClient.invalidateQueries("latest-notifications")
            queryClient.invalidateQueries("notifications")
        })

        return () => {
            channel.unbind()
            pusher.unsubscribe("new_notification_channel")
        }
    }, [])

    return <Fragment></Fragment>
}
