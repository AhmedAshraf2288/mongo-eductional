import { useProfileLogsData } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";
import styles from "./Security.module.css";

export default function Security() {
  const { data, isLoading } = useProfileLogsData();

  if (isLoading) return <Loading />;

  // يمكن تعديل التاريخ هنا إذا كان ذلك ضروريًا
  data.logs[0].login_at = "2024-09-29 12:00:00";

  return (
    <section className="deviceSecurity d-flex flex-column gap-4 align-items-center" aria-labelledby="security-section">
      <h2 id="security-section" className="visually-hidden">سجل الأمان</h2>
      {data.logs.map((log, index) => {
        const isPC = log.os_data.includes("Window") || log.os_data.includes("Mac");
        const deviceType = isPC ? "كمبيوتر" : "موبايل";
        const deviceImage = isPC ? "pc.png" : "mobile-notch (2) 1.png";
        const loginDate = new Date(log.login_at);
        const formattedDate = `${loginDate.toLocaleDateString()} ${loginDate.getHours() <= 12 ? "مساءا" : "صباحا"}`;

        return (
          <div key={index} className={`${styles.logDevices} row align-items-center`}>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
              <div className={styles.imgDevice}>
                <img src={`/assets/images/Security/${deviceImage}`} alt={`صورة نوع الجهاز: ${deviceType}`} className="img-fluid" />
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
              <div className={styles.typeDevice}>
                <span>نوع الجهاز</span>
                <span className="fw-bold d-block mt-2">{deviceType}</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
              <div className={styles.date}>
                <span>تاريخ الدخول</span>
                <span className="fw-bold d-block mt-2">{formattedDate}</span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}