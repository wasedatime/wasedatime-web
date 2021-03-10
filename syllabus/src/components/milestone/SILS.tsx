import React from 'react';
import { SyllabusKey } from '../../constants/syllabus-data';
import CourseItem from '../CourseItem';
import cover from "./images/sils.jpg";
import mobileCover from "./images/sils-mobile.jpg";
import cat1 from "./images/sils-cat-1.jpg";
import cat2 from "./images/sils-cat-2.jpg";
import cat3 from "./images/sils-cat-3.jpg";
import cat4 from "./images/sils-cat-4.jpg";
import cat5 from "./images/sils-cat-5.jpg";
import cat6 from "./images/sils-cat-6.jpg";
import cat7 from "./images/sils-cat-7.jpg";
import cat8 from "./images/sils-cat-8.jpg";
import MediaQuery from "react-responsive";
import { sizes } from '@bit/wasedatime.core.ts.utils.responsive-utils';
import { connect } from "react-redux";
import { fetchCoursesBySchool } from "../../redux/actions";

const get_SILS_category = (course) => {
  if (course[SyllabusKey.CATEGORY].includes("First Year Seminar")) return "First Year Seminar";
  else if (course[SyllabusKey.LEVEL] === "Beginner, initial or introductory") return "Introductory Subjects";
  else if (["Intermediate Seminar", "Advanced Seminar", "Intermediate Subjects", "Advanced Subjects"].includes(course[SyllabusKey.CATEGORY])) return course[SyllabusKey.CATEGORY];
  else if (course[SyllabusKey.CATEGORY] === "Other Foreign Languages") return "Foreign Languages";
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

const SILS = ({courses, reviews, fetchCoursesBySchool}) => {
  if (!courses.length) fetchCoursesBySchool("SILS");
  const groupedCourses = getGroupedCourses(courses)
  return (
    <div>
      <MediaQuery maxWidth={sizes.tablet}>
        {
          matches => matches ? <img src={mobileCover} width="360" height="640" /> : <img src={cover} width="1280" height="720" />
        }
      </MediaQuery>
      <div style={{ padding: "0px 10vw" }}>
        <img src={cat1} width="300" height="150" />
        {groupedCourses["First Year Seminar"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat2} width="300" height="150" />
        {groupedCourses["Intermediate Seminar"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat3} width="300" height="150" />
        {groupedCourses["Advanced Seminar"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat4} width="300" height="150" />
        {groupedCourses["Introductory Subjects"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat5} width="300" height="150" />
        {groupedCourses["Intermediate Subjects"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat6} width="300" height="150" />
        {groupedCourses["Advanced Subjects"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat7} width="300" height="150" />
        {groupedCourses["Foreign Languages"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src={cat8} width="300" height="150" />
        {groupedCourses["Elective Subjects"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
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
)(SILS);