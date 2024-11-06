
import { useProfileViewsData } from "../../../queries/queries";
import Loading from "../../../components/Loading/Loading";
import styles from './WatchingHistory.module.css'

export default function WatchingHistory() {
  const { data: views } = useProfileViewsData();

  if (!views) return <Loading />;
  console.log(views);

  return <>
    <section className="d-flex flex-column gap-4 align-items-center">
      {views.data.map((view) => <div key={view.id} className={`${styles.myCourses} d-flex justify-content-between`}>
        <div className="d-flex gap-3">
          <div className={`${styles.imgCourse} `}>
            <img src="" alt="image card my Course" />
          </div>


          <div className={`${styles.textCourse} d-flex justify-content-between align-items-center`}>
            <div>
              <h5 className={`${styles.textHead}`}>{view.video.course_name}</h5>
              <p className={` mt-3 mb-2`}>{view.video.title}</p>
            </div>

            <div><p className={`mt-3 ${styles.textHead} d-flex flex-column gap-3`}>تاريخ اخر مشاهدة<span className={`${styles.dateCourse}`}>{view.viewed_at
            }</span></p></div>

            <div><p className={`mt-3 ${styles.textHead} d-flex flex-column gap-3`}>مدة المشاهدة<span className={`${styles.minuteCourse}`}>لا</span></p></div>
          </div>
        </div>
      </div>)}


    </section>





  </>
  // <div className={`text-center`}>
  //   <div className="mb-3"></div>
  //   {!views?.data?.length ? (
  //     <h2 className="text-center fw-bold">لا يوجد نتائج</h2>
  //   ) : (
  //     <div className={`rounded ${profileStyles["table-container"]} mb-5`}>
  //       <table className={`${profileStyles["table"]}`}>
  //         <thead className={`${profileStyles["table-header"]}`}>
  //           <tr>
  //             <th>اسم الفيديو</th>
  //             <th>اسم الكورس</th>
  //             <th>وقت المشاهدة</th>
  //           </tr>
  //         </thead>
  //         <tbody className={`${profileStyles["table-body"]}`}>
  //           {views?.data?.map((view) => (
  //             <tr className={`${profileStyles["table-row"]}`} key={view.id}>
  //               <td>{view.video?.title}</td>
  //               <td>{view.video?.course_name}</td>
  //               <td>{view.viewed_at}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   )}
  // </div>

}
