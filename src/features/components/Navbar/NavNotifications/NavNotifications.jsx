import styles from "./NavNotifications.module.css";
import { useLatestNotifications } from "../../../../queries/queries";
import Button from "../../../../components/Button/Button";
import Notification from "../../../../components/Notification/Notification";
import { PiBell } from "react-icons/pi";
export default function NavNotifications() {
  const { data, isLoading } = useLatestNotifications();



  if (isLoading) {
    return (
      <div className={`${styles.notifications__icon}`}>
        <span>
          <PiBell />
        </span>
      </div>
    );
  }

  return (
    <div className={`${styles.notifications__icon} position-relative`}>
      {data?.unread_count > 0 ? (
        <span
        className={`${styles.notifications__count}`}
        >
          {data?.unread_count}
        </span>
      ) : null}
          <div>
            <PiBell/>
          </div>
      <div className={`${styles.notifications__drop}`}>
        {data?.notifications?.length == 0 ? (
          <div className={`${styles.notifications__empty} text-center`}>
            لا توجد لديك اى اشعارات
          </div>
        ) : (
          <>
            <div className="py-2 px-3">
              <Button  className="px-3 py-2" as="link" to="/notifications">
                رؤية الكل
              </Button>
            </div>
            {data?.notifications.map((notification) => (
              <div key={notification?.id} className="border-bottom">
                <Notification  notification={notification} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
