import React from "react";
import { Outlet, useParams, Link } from "react-router-dom";
import { BiCategory } from "react-icons/bi";
import Accordion from "../Accordion/Accordion";
import { useWatchCourseData } from "../../queries/queries";
import styles from './NavsAndTabs.module.css';

export default function NavAndTabs({ tabs }) {
  const { slug, lessonSlug } = useParams();
  const { data: courseData } = useWatchCourseData(slug);

  return <>
    <div className={`${styles.headTitle} d-flex align-items-center`}>

      <div className={`${styles.boxTitleCourse} ms-5`}>
        <h3 className='f-size-28 f-Almarai-700 text-light'>{courseData?.title}</h3>
        <p className='f-size-18 f-Almarai-400'>{courseData?.description}</p>
      </div>

    </div>
    <Outlet />
    <div className={`${styles.accordins}  w-75 mx-auto mb-5`}>

      {courseData?.lectures.map((lecture, index) => (
        <Accordion
          className={`d-block mb-5`}
          key={index}
          title={lecture.title}
          body={
            <>
              {tabs?.map((ele) => {
                if (!ele) return null;
                return (
                  <Accordion
                    key={ele.element}
                    className={` mb-4`}
                    title={ele.element}
                    body={
                      <>
                        {lecture.items.map((item) => {
                          if (item.type === ele.target) {
                            return <>
                              <Link
                                key={item.slug}
                                to={`/courses/watch/${slug}/${lessonSlug}/${ele.target}/${item.slug}`}
                                className={`${styles.link} d-flex align-items-center mb-2`}
                              >
                                <div className={`${styles.body} mx-auto`}>
                                  <span className='d-flex gap-3 align-items-center'>
                                    <span>
                                      <img src="/assets/images/Single cources/videoContent.png" alt="" className={`${styles.image}`} />
                                    </span>
                                    <span className={`${styles.itemTitle}`}>{item.title}</span>
                                  </span>
                                </div>
                              </Link>
                            </>
                          }
                          return null;
                        })}
                      </>
                    }
                    icon={<BiCategory />}
                  />
                );
              })}
            </>
          }
          icon={<BiCategory />}
        />

      ))}

    </div>

  </>

}