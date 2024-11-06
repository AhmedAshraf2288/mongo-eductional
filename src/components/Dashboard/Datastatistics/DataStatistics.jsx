import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { useProfileInfoData } from '../../../queries/queries';
import styles from './DataStatistics.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DataStatistics() {
  const { data: profileData, isLoading } = useProfileInfoData();

  if (isLoading || !profileData) {
    return <div aria-live="polite">Loading...</div>;
  }

  const { student_statistics } = profileData;

  const textsChart = [
    { title: "فيديوهات شوفتها", number: `${student_statistics.videos_watched}`, time: "ساعة" },
    { title: "فيديوهات خلصتها", number: `${student_statistics.videos_finished}`, time: "ساعة" },
    { title: "عدد مرات فتح الواجب", number: `${student_statistics.total_videos}`, time: "مرة" },
    { title: "عدد مرات إنهاء الواجب", number: `${student_statistics.quizzes_attended}`, time: "مرة" },
    { title: "عدد مرات فتح الامتحان", number: `${student_statistics.quizzes_finished}`, time: "مرة" },
    { title: "عدد مرات إنهاء الامتحان", number: `${student_statistics.avg_videos_watched}`, time: "مرة" },
    { title: "متوسط النتائج اللي جبتها", number: `${student_statistics.avg_quizzes_score}`, time: "مرة" },
  ];

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'إحصائيات الطالب',
        data: [
          student_statistics.videos_watched,
          student_statistics.videos_finished,
          student_statistics.total_videos,
          student_statistics.quizzes_attended,
          student_statistics.quizzes_finished,
          student_statistics.avg_videos_watched,
          student_statistics.avg_quizzes_score,
        ],
        backgroundColor: '#3D7F58',
        borderColor: '#3D7F58',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <section className="dataStatistics" aria-label="إحصائيات الطالب">
      <div className="row">
        <div className="col-lg-7 col-md-12">
          <Bar className={`${styles.bar} mb-sm-3`} data={data} options={options} aria-label="رسم بياني لإحصائيات الطالب" />
        </div>
        <div className="col-lg-4 col-md-12 ps-lg-5 border-start border-2">
          <div className={`${styles.textsChart} h-100 ms-md-3`} aria-label="تفاصيل إحصائيات الطالب">
            {textsChart.map((text, index) => (
              <p key={index}>
                <span className={`${styles.title}`}>{index + 1}-</span> <span className={`${styles.text}`}>{text.title}:</span> <span className={`${styles.title}`}>{text.number.slice(0, 3)} {text.time}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
