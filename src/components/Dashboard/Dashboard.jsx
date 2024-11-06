import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './Dashboard.module.css';
import '../../index.css';

export default function Dashboard() {
    const [sidebarVisible, setSidebarVisible] = useState(false);

    const selectsDashboard = [
        { titleSelect: "البيانات الشخصية", urlPage: "personalInformation" },
        { titleSelect: "احصائيات المستخدم", urlPage: "datastatistics" },
        { titleSelect: "شحن كود", urlPage: "codeShipping" },
        { titleSelect: "محفظتي", urlPage: "wallet" },
        { titleSelect: "كورساتي", urlPage: "myCourses" },
        { titleSelect: "الامان و تسجيل الدخول", urlPage: "security" },
        { titleSelect: "تفاصيل المشاهدات", urlPage: "watchingHistory" },
        { titleSelect: "الفواتير", urlPage: "invoices" },
        { titleSelect: "نتائج الواجب", urlPage: "assignmentsResults" },
        { titleSelect: "نتائج الامتحانات", urlPage: "examsResults" },
    ];

    return (
        <section className={`${styles.dashboard} section`}>
            <button
                className="btn d-lg-none mb-3"
                onClick={() => setSidebarVisible(!sidebarVisible)}
            >
                <img className='icon' src="https://img.icons8.com/?size=100&id=SuyBoBxbbzXP&format=png&color=000000" alt="Toggle Sidebar" />
            </button>
            <div className="row">
                <div className={`col-lg-3 ${styles.sidebar} pt-5 ps-4 ${sidebarVisible ? 'd-block' : 'd-none d-lg-block'}`}>
                    {selectsDashboard.map((select, index) => (
                        <NavLink key={index} className={`${styles.btnSelect} mb-2`} to={select.urlPage}>
                            <span className='f-Almarai-400 f-size-18'>{select.titleSelect}</span>
                            <img src="/assets/images/Dashboard/angle-double-small-right 1.svg" alt="Arrow" />
                        </NavLink>
                    ))}
                </div>
                <div className="col-lg-9 pt-5">
                    <Outlet />
                </div>
            </div>
        </section>
    );
}