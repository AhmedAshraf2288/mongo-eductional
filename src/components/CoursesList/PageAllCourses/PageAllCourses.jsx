import React from 'react'
import CoursesList from './../CoursesList';
import { useHomeData } from '../../../queries/queries';

export default function PageAllCourses() {
    const { data: homeData, isLoading } = useHomeData();

    return <>
        <div className="section">
            <CoursesList courses={homeData?.courses} withTitle />
        </div>
    </>
}
