import profileStyles from "../ProfileDetails/ProfileDetails.module.css";
import { useProfileSubscriptions } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";



export default function Subscriptions() {
  const { data: subscriptions, isLoading } = useProfileSubscriptions();

  console.log(subscriptions, "subscriptions");
  return (
    <div className={`text-center`}>
     
      <div className="mb-3">
      </div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {subscriptions.data.length === 0 ? (
            <p>لا يوجد اى اشتراكات</p>
          ) : (
            <div className={`rounded ${profileStyles["table-container"]} mb-5`}>
            <table className={`${profileStyles["table"]}`}>
              <thead className={`${profileStyles["table-header"]}`}>
                <tr>
                  <th>اسم الكورس</th>
                  <th>السعر</th>
                  <th>طريقة الدفع</th>
                  <th>رقم الفاتورة</th>
                  <th>تاريخ تسجيل الدخول</th>
                </tr>
              </thead>
              <tbody className={`${profileStyles["table-body"]}`}>
                {subscriptions.data.map((subscription) => (
                  <tr className={`${profileStyles["table-row"]}`} key={subscription.id}>
                    <td>{subscription.source}</td>
                    <td>{subscription.total_amount} جنية</td>
                    <td>{subscription.payment_method}</td>
                    <td>{subscription.invoice_number}</td>
                    <td>{subscription.created_at}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          )}
        </>
      )}
    </div>
  );
}
