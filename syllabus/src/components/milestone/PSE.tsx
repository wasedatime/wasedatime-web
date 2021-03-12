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

const PSE_category_map = {
  "Political Science": [
      "Contemporary Politics",
      "Comparative Politics",
      "International Relations",
      "Public Policy",
      "Political Thought & Political History"
  ],
  "Economics": [
      "Economic Theory",
      "Economic Thought & Economic History",
      "Economic Policy",
      "International Economy"
  ],
  "Quantitative Approaches to Political Economy": [
      "Emprical Analysis",
      "Game Theory",
      "Mathematics"
  ],
  "General Studies": [
      "Japan Studies",
      "Interdisciplinary Studies",
      "Career Design",
      "Journalism and Media",
      "Law",
      "Accounting/Business",
      "Natural Science",
      "Social Studies",
      "Humanities"
  ]
}

const JGPE_courses = ["Japan in World Politics", "Japanese Economic History", "International Relations of Japan", "Japanese Political History", "Japanese Politics", "Japanese Constitutional Law", "Japanese Economy", "Transnational Relations", "Comparative Politics of East Asia", "International Political Economy", "Public Choice", "Comparative Political Economy", "Chinese Economy", "Welfare Economics", "Public Economics", "Political Economics", "Development Economics", "Advanced Japanese Economy", "Topics in Japanese Economic History", "Asian Economy A", "Asian Economy B", "Topics in Global Political Economy"]

const JGPE_JP_courses = ["日本外交論", "日本政治史", "国際社会関係論", "東アジアの比較政治", "国際政治経済学", "公共選択論", "比較政治経済分析", "日本経済史", "アジア経済史", "中国経済論", "社会評価論", "公共経済学", "政治経済学", "開発経済学", "上級日本経済論", "地域研究", "東アジア論", "日本経済史の諸問題", "アジア経済史の諸問題", "日本経済思想史", "国際政治経済研究"]

const get_PSE_category = (course) => {
  const category = course[SyllabusKey.CATEGORY];
  if (PSE_category_map["Political Science"].some(cat => category.includes(cat))) return "Political Science";
  else if (PSE_category_map["Economics"].some(cat => category.includes(cat))) return "Economics";
  else if (PSE_category_map["Quantitative Approaches to Political Economy"].some(cat => category.includes(cat))) return "Quantitative Approaches to Political Economy";
  else if (PSE_category_map["General Studies"].some(cat => category.includes(cat))) return "General Studies";
  else if (course[SyllabusKey.TYPE] === 3) return "Foreign Language";
  else if (course[SyllabusKey.CATEGORY].startsWith("Seminar")) return "Workshops & Seminars";
  else if (JGPE_courses.some(title => course[SyllabusKey.TITLE].startsWith(title)) || JGPE_JP_courses.some(title => course[SyllabusKey.TITLE_JP].startsWith(title))) return "Japanese and Global Political Economy";
  else return "Others";
}

const getGroupedCourses = (courses) => {
  let groupedCourses = {
    "Japanese and Global Political Economy": [],
    "Political Science": [],
    "Economics": [],
    "Quantitative Approaches to Political Economy": [],
    "Workshops & Seminars": [],
    "General Studies": [],
    "Foreign Language": [],
    "Others": [],
  };
  courses.forEach(c => {
    const category = get_PSE_category(c);
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

const PSE = ({courses, reviews, fetchCoursesBySchool}) => {
  if (!courses.length) fetchCoursesBySchool("PSE");
  const groupedCourses = getGroupedCourses(courses);
  return (
    <div>
      <MediaQuery maxWidth={sizes.phone}>
        {
          matches => matches ? (
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-mobile.jpg" />
          ) : (
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse.jpg" />
          )
        }
      </MediaQuery>
      <div style={{ padding: "0px 10vw" }}>
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-1.jpg" width="300" height="150" />
        {groupedCourses["Japanese and Global Political Economy"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-2.jpg" width="300" height="150" />
        {groupedCourses["Economics"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-3.jpg" width="300" height="150" />
        {groupedCourses["Political Science"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-4.jpg" width="300" height="150" />
        {groupedCourses["Quantitative Approaches to Political Economy"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-5.jpg" width="300" height="150" />
        {groupedCourses["General Studies"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-6.jpg" width="300" height="150" />
        {groupedCourses["Workshops & Seminars"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
        <h4>Others</h4>
        {groupedCourses["Foreign Language"].map(c => <Course course={c} reviews={reviews[c[SyllabusKey.ID].substring(0, 12)]} />)}
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
)(PSE);