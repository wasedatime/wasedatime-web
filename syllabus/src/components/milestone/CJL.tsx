import React from 'react';
import styled from "styled-components";
import { SyllabusKey } from '../../constants/syllabus-data';
import CourseItem from '../CourseItem';
import MediaQuery from "react-responsive";
import { media, sizes } from '@bit/wasedatime.core.ts.utils.responsive-utils';
import { connect } from "react-redux";
import { fetchCoursesBySchool } from "../../redux/actions";

const Cover = styled.img`
  height: 100vh;
  ${media.tablet`height: calc(100vh - 50px);`}
  margin: auto;
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
    const level = c[SyllabusKey.TITLE].match(/\d+/g)[0];
    groupedCourses["Level " + level].push(c);
  });
  return groupedCourses;
}

const Course = ({ course, reviews }) => (
  <CourseItem
    course={course}
    searchLang="en"
    searchTerm=""
    isAddable={false}
    handleOnClick={() => {}}
    expandable={false}
    isMilestone={true}
    reviews={reviews || []}
  />
)

const CJL = ({courses, reviews, fetchCoursesBySchool}) => {
  if (!courses.length) fetchCoursesBySchool("CJL");
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
        {groupedCourses["Level 1"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        {groupedCourses["Level 2"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-2.jpg" width="300" height="150" />
        {groupedCourses["Level 3"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-3.jpg" width="300" height="150" />
        {groupedCourses["Level 4"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-4.jpg" width="300" height="150" />
        {groupedCourses["Level 5"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-5.jpg" width="300" height="150" />
        {groupedCourses["Level 6"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-6.jpg" width="300" height="150" />
        {groupedCourses["Level 7"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/cjl-cat-7.jpg" width="300" height="150" />
        {groupedCourses["Level 8"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  fetchCoursesBySchool,
};

export default connect<{}, {fetchCoursesBySchool: (school: string) => void}>(
  null,
  mapDispatchToProps
)(CJL);