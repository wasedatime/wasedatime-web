import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { SYLLABUS_KEYS } from '../../config/syllabusKeys';
import CourseItem from '../syllabus/CourseItem';
import MediaQuery from "react-responsive";
import { media, sizes } from '../../styled-components/utils';
import { parseCourse } from '../../utils/milestone';

const Cover = styled.img`
  max-width: calc(100vw - 65px);
  max-height: 100vh;
  ${media.tablet`max-height: calc(100vh - 67px);`}
  display: block;
  margin: 0px auto;
`;

const get_SILS_category = (course) => {
  if (course[SYLLABUS_KEYS.CATEGORY].includes("First Year Seminar")) return "First Year Seminar";
  else if (course[SYLLABUS_KEYS.LEVEL] === "Beginner, initial or introductory") return "Introductory Subjects";
  else if (["Intermediate Seminar", "Advanced Seminar", "Intermediate Subjects", "Advanced Subjects"].includes(course[SYLLABUS_KEYS.CATEGORY])) return course[SYLLABUS_KEYS.CATEGORY];
  else if (course[SYLLABUS_KEYS.CATEGORY] === "Other Foreign Languages") return "Foreign Languages";
  else return "Elective Subjects";
}

const getGroupedCourses = (courses) => {
  let groupedCourses = {
    "First Year Seminar": [],
    "Intermediate Seminar": [],
    "Advanced Seminar": [],
    "Introductory Subjects": [],
    "Intermediate Subjects": [],
    "Advanced Subjects": [],
    "Foreign Languages": [],
    "Elective Subjects": []
  };
  courses.forEach(c => {
    const category = get_SILS_category(c);
    groupedCourses[category].push(c);
  });
  return groupedCourses;
}

const Course = ({ course }) => (
  <CourseItem
    course={course}
    searchLang="en"
    searchTerm=""
    isAddable={false}
    handleOnClick={() => {}}
    expandable={false}
    isMilestone={true}
    reviews={course.reviews || []}
  />
)

const SILS = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    try {
      fetch("https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/reviews/sils_reviews.json")
        .then(res => res.json())
        .then(res => {
          setCourses(res.filter(c => c.sem.match(/0|1|f/g)).map(c => parseCourse(c, "SILS")));
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const groupedCourses = getGroupedCourses(courses);

  return (
    <div>
      <MediaQuery maxWidth={sizes.phone}>
        {
          matches => matches ? (
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils-mobile.jpg" />
          ) : (
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils.jpg" />
          )
        }
      </MediaQuery>
      <div style={{ padding: "0px 10vw" }}>
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils-cat-1.jpg" width="300" height="150" />
        {groupedCourses["First Year Seminar"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils-cat-2.jpg" width="300" height="150" />
        {groupedCourses["Intermediate Seminar"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils-cat-3.jpg" width="300" height="150" />
        {groupedCourses["Advanced Seminar"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils-cat-4.jpg" width="300" height="150" />
        {groupedCourses["Introductory Subjects"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils-cat-5.jpg" width="300" height="150" />
        {groupedCourses["Intermediate Subjects"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils-cat-6.jpg" width="300" height="150" />
        {groupedCourses["Advanced Subjects"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils-cat-7.jpg" width="300" height="150" />
        {groupedCourses["Foreign Languages"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sils-cat-8.jpg" width="300" height="150" />
        {groupedCourses["Elective Subjects"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
      </div>
    </div>
  )
}

export default SILS;