import React, { useState, useEffect } from 'react';
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
  const category = course[SYLLABUS_KEYS.CATEGORY];
  if (PSE_category_map["Political Science"].some(cat => category.includes(cat))) return "Political Science";
  else if (PSE_category_map["Economics"].some(cat => category.includes(cat))) return "Economics";
  else if (PSE_category_map["Quantitative Approaches to Political Economy"].some(cat => category.includes(cat))) return "Quantitative Approaches to Political Economy";
  else if (PSE_category_map["General Studies"].some(cat => category.includes(cat))) return "General Studies";
  else if (course[SYLLABUS_KEYS.TYPE] === 3) return "Foreign Language";
  else if (course[SYLLABUS_KEYS.CATEGORY].startsWith("Seminar")) return "Workshops & Seminars";
  else if (JGPE_courses.some(title => course[SYLLABUS_KEYS.TITLE].startsWith(title)) || JGPE_JP_courses.some(title => course[SYLLABUS_KEYS.TITLE_JP].startsWith(title))) return "Japanese and Global Political Economy";
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

const PSE = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    try {
      fetch("https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/reviews/pse_reviews.json")
        .then(res => res.json())
        .then(res => {
          setCourses(res.filter(c => c.sem.match(/0|1|f/g)).map(c => parseCourse(c, "PSE")));
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
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-mobile.jpg" />
          ) : (
            <Cover src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse.jpg" />
          )
        }
      </MediaQuery>
      <div style={{ padding: "0px 10vw" }}>
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-1.jpg" width="300" height="150" />
        {groupedCourses["Japanese and Global Political Economy"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c}  />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-2.jpg" width="300" height="150" />
        {groupedCourses["Economics"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c}  />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-3.jpg" width="300" height="150" />
        {groupedCourses["Political Science"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c}  />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-4.jpg" width="300" height="150" />
        {groupedCourses["Quantitative Approaches to Political Economy"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c}  />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-5.jpg" width="300" height="150" />
        {groupedCourses["General Studies"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c}  />)}
        <img src="https://wasedatime-milestone.s3-ap-northeast-1.amazonaws.com/images/pse-cat-6.jpg" width="300" height="150" />
        {groupedCourses["Workshops & Seminars"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c}  />)}
        <h4>Others</h4>
        {groupedCourses["Foreign Language"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c}  />)}
        {groupedCourses["Others"].map(c => <Course key={c[SYLLABUS_KEYS.ID]} course={c}  />)}
      </div>
    </div>
  )
}

export default PSE;