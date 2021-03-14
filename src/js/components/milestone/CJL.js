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
  ${media.tablet`max-height: calc(100vh - 50px);`}
  display: block;
  margin: 0px auto;
`;

const getGroupedCourses = (courses) => {
  let groupedCourses = {
      "Level 1": [],
      "Level 2": [],
      "Level 3": [],
      "Level 4": [],
      "Level 5": [],
      "Level 6": [],
      "Level 7": [],
      "Level 8": []
  };
  courses.forEach(c => {
    const level = c[SYLLABUS_KEYS.TITLE].match(/\d+/g)[0];
    groupedCourses["Level " + level].push(c);
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

const CJL = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    try {
      fetch("https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/reviews/cjl_reviews.json")
        .then(res => res.json())
        .then(res => {
          setCourses(res.filter(c => c.sem.match(/0|1|f/g)).map(c => parseCourse(c, "CJL")));
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
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-mobile.jpg" />
          ) : (
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl.jpg" />
          )
        }
      </MediaQuery>
      <div style={{ padding: "0px 10vw" }}>
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-1.jpg" width="300" height="150" />
        {groupedCourses["Level 1"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        {groupedCourses["Level 2"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-2.jpg" width="300" height="150" />
        {groupedCourses["Level 3"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-3.jpg" width="300" height="150" />
        {groupedCourses["Level 4"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-4.jpg" width="300" height="150" />
        {groupedCourses["Level 5"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-5.jpg" width="300" height="150" />
        {groupedCourses["Level 6"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-6.jpg" width="300" height="150" />
        {groupedCourses["Level 7"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-7.jpg" width="300" height="150" />
        {groupedCourses["Level 8"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c} />)}
      </div>
    </div>
  )
}

export default CJL;