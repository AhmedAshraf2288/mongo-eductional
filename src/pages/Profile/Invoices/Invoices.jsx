import profileStyles from "../ProfileDetails/ProfileDetails.module.css";
import { useProfileInvoices } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";
import '../../../index.css'
export default function Invoices() {
  const { data: invoices, isLoading } = useProfileInvoices();
  console.log(invoices);

  return (
    <section className="d-flex flex-column align-items-center">
      <div className="mb-3">{/* <Button>تحميل ملف اكسل</Button> */}</div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {invoices.data.length === 0 ? (
            <p>لا يوجد اى فواتير</p>
          ) : (
            <div className={`rounded ${profileStyles["table-container"]} mb-5`}>
              <table >
                <thead >
                  <tr>
                    <th className="text-tableHead">اسم الكورس</th>
                    <th className="text-tableHead">طريقة الدفع</th>
                    <th className="text-tableHead">رقم الفاتورة</th>
                    <th className="text-tableHead">السعر</th>
                    <th className="text-tableHead">التاريخ</th>
                  </tr>
                </thead>
                <tbody className={`${profileStyles["table-body"]}  border-bottom`}>
                  {invoices.data.map((invoice, index) => (
                    <tr
                      className={` ${profileStyles["table-row"]}`}
                      key={invoice.id}
                    >
                      <td>{index + 1}</td>
                      <td style={{ color: "#34C759" }}>
                        {invoice.payment_method}
                      </td>
                      <td>{invoice.serial_number}</td>

                      <td style={{ color: "#D9171A" }}>{invoice.total_amount}</td>

                      <td>{invoice.created_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </section>
  );
}
