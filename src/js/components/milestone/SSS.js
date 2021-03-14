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

const SSS_categories = ["Peace Building and International Cooperation", "Social Organization and Working", "Foundations in Social Sciences", "Community and Social Development", "Economic & Environmental Sustainability"]

const get_SSS_category = (course) => {
  for (const category of SSS_categories) {
    if (course[SYLLABUS_KEYS.CATEGORY] && course[SYLLABUS_KEYS.CATEGORY].includes(category)) return category;
  }
  return "Others";
}

const getGroupedCourses = (courses) => {
  let groupedCourses = {
    "Peace Building and International Cooperation": [],
    "Social Organization and Working": [],
    "Foundations in Social Sciences": [],
    "Community and Social Development": [],
    "Economic & Environmental Sustainability": [],
    "Others": []
  };
  courses.forEach(c => {
    const category = get_SSS_category(c);
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

const SSS = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    try {
      fetch("https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/reviews/sss_reviews.json")
        .then(res => res.json())
        .then(res => {
          setCourses(res.filter(c => c.sem.match(/0|1|f/g)).map(c => parseCourse(c, "SSS")));
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
        {(matches) =>
          matches ? (
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sss-mobile.jpg" />
          ) : (
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sss.jpg" />
          )
        }
      </MediaQuery>
      <div style={{ padding: "0px 10vw" }}>
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sss-cat-1.jpg" width="300" height="150" />
        {groupedCourses["Community and Social Development"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sss-cat-2.jpg" width="300" height="150" />
        {groupedCourses["Economic & Environmental Sustainability"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sss-cat-3.jpg" width="300" height="150" />
        {groupedCourses["Foundations in Social Sciences"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sss-cat-4.jpg" width="300" height="150" />
        {groupedCourses["Peace Building and International Cooperation"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/sss-cat-5.jpg" width="300" height="150" />
        {groupedCourses["Social Organization and Working"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <h4>Others</h4>
        {groupedCourses["Others"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
      </div>
    </div>
  )
}

export default SSS;