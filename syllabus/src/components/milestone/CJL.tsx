import React from 'react';
import { SyllabusKey } from '../../constants/syllabus-data';
import CourseItem from '../CourseItem';
import cover from "./images/cjl.jpg";
import mobileCover from "./images/cjl-mobile.jpg";
import cat1 from "./images/cjl-cat-1.jpg";
import cat2 from "./images/cjl-cat-2.jpg";
import cat3 from "./images/cjl-cat-3.jpg";
import cat4 from "./images/cjl-cat-4.jpg";
import cat5 from "./images/cjl-cat-5.jpg";
import cat6 from "./images/cjl-cat-6.jpg";
import cat7 from "./images/cjl-cat-7.jpg";
import MediaQuery from "react-responsive";
import { sizes } from '@bit/wasedatime.core.ts.utils.responsive-utils';
import { connect } from "react-redux";
import { fetchCoursesBySchool } from "../../redux/actions";


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
          matches => matches ? <img src={mobileCover} width="360" height="640" /> : <img src={cover} width="1280" height="720" />
        }
      </MediaQuery>
      <div style={{ padding: "0px 10vw" }}>
        <img src={cat1} width="300" height="150" />
        {groupedCourses["Level 1"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        {groupedCourses["Level 2"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat2} width="300" height="150" />
        {groupedCourses["Level 3"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat3} width="300" height="150" />
        {groupedCourses["Level 4"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat4} width="300" height="150" />
        {groupedCourses["Level 5"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat5} width="300" height="150" />
        {groupedCourses["Level 6"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat6} width="300" height="150" />
        {groupedCourses["Level 7"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat7} width="300" height="150" />
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