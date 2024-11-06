import React from 'react'
import { useWatchCourseData } from '../../queries/queries';
import { useParams } from 'react-router';
import styels from './WatchLeacture.module.css'
import '../../index.css'
import Accordion from '../Accordion/Accordion';
import { BiCategory } from 'react-icons/bi';
export default function WatchLeacture() {
  const { slug } = useParams();

  const { data: courseData } = useWatchCourseData(slug);

  console.log(courseData);
  return <>











  </>
}
