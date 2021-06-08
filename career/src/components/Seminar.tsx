import React from "react";

import { RowWrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import CareerCard from "./CareerCard";

const SeminarList = [
  {
    title: "【この夏インターンシップを探している留学生の皆さま！】",
    url: "https://job.connectiu.com/en/plus/event/BE00020043/details/",
    "文/理": "1", //1. 文   2. 理    3. 文理不問
    主要参加企業: "出展企業:日東電工",
    申請締め切る: "28/6/2020", //at the form of DAY/MM/YEAR
  },
];

const internList = [
  {
    category: "information_section",
    title: "【この夏インターンシップを探している留学生の皆さま！】",
    description: "Bababa",
    url: "https://www.google.com/",
    industry: "maker",
    target_major: "both",
    requirement: "Qwerty",
    shift: "",
    duration: 0,
    corporation: "出展企業:日東電工",
    location: "Tokyo",
    salary: "",
    language: "EN",
    deadline: "2020-06-28T00:00:00Z",
  },
];

//Field: 1. maker（メーカ） 2. service（サービス）  3. finance（金融）  4. office（オフィス）   5. IT    6. consulting（コンサル）  7. other（その他）
//language: 1.JA（日本語）  2.EN（英語）  3. bilingual（日・英）  4. other（その他）
//deadline: in the form of 2020-06-10T03:09:18Z
//payment: 1. over_1000    2. over_2000    3. over_3000      4. other
//shift: 1. 1day/week   2. 2day/week   3. over_3day/week  4. temporary  5. other
//target_major: 1. science（理系）  2. humanities（文系）   3. both（文・理）

const CareerSeminar = () => {
  const lists = internList.map((title) => {
    return <CareerCard careerInformation={title} key={title.title} />;
  });

  return (
    <RowWrapper>
      <div className="career-cards-container">
        <div>{lists}</div>
      </div>
    </RowWrapper>
  );
};

export default CareerSeminar;

