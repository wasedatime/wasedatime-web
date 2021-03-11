import React from 'react';
import { SyllabusKey } from '../../constants/syllabus-data';
import CourseItem from '../CourseItem';
import cover from "./images/sss.jpg";
import mobileCover from "./images/sss-mobile.jpg";
import cat1 from "./images/sss-cat-1.jpg";
import cat2 from "./images/sss-cat-2.jpg";
import cat3 from "./images/sss-cat-3.jpg";
import cat4 from "./images/sss-cat-4.jpg";
import cat5 from "./images/sss-cat-5.jpg";
import MediaQuery from "react-responsive";
import { sizes } from '@bit/wasedatime.core.ts.utils.responsive-utils';
import { connect } from "react-redux";
import { fetchCoursesBySchool } from "../../redux/actions";


const SSS_categories = ["Peace Building and International Cooperation", "Social Organization and Working", "Foundations in Social Sciences", "Community and Social Development", "Economic & Environmental Sustainability"]

const get_SSS_category = (course) => {
  for (const category of SSS_categories) {
    if (course[SyllabusKey.CATEGORY].includes(category)) return category;
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

const SSS = ({courses, reviews, fetchCoursesBySchool}) => {
  if (!courses.length) fetchCoursesBySchool("SSS");
  const groupedCourses = getGroupedCourses(courses);
  return (
    <div>
      <MediaQuery maxWidth={sizes.phone}>
        {(matches) =>
          matches ? (
            <img src={mobileCover} width="360" height="640" />
          ) : (
            <img src={cover} width="1280" height="720" />
          )
        }
      </MediaQuery>
      <div style={{ padding: "0px 10vw" }}>
        <img src={cat1} width="300" height="150" />
        {groupedCourses["Community and Social Development"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat2} width="300" height="150" />
        {groupedCourses["Economic & Environmental Sustainability"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat3} width="300" height="150" />
        {groupedCourses["Foundations in Social Sciences"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat4} width="300" height="150" />
        {groupedCourses["Peace Building and International Cooperation"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat5} width="300" height="150" />
        {groupedCourses["Social Organization and Working"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <h4>Others</h4>
        {groupedCourses["Others"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
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
)(SSS);