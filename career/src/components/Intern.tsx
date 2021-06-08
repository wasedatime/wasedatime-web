import React, { useState, useEffect } from "react";

import { RowWrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import CareerCard from "./CareerCard";

const internList = [
  {
    category: "internship",
    title: "Title1",
    description: "Bababa",
    url: "https://www.google.com/",
    industry: "maker",
    target_major: "science",
    requirement: "Qwerty",
    shift: "2day/week",
    duration: 8,
    corporation: "株式会社Precal",
    location: "Tokyo",
    salary: "over_2000",
    language: "EN",
    deadline: "2020-06-10T03:09:18Z",
  },
];

//Field: 1. maker（メーカ） 2. service（サービス）  3. finance（金融）  4. office（オフィス）   5. IT    6. consulting（コンサル）  7. other（その他）
//language: 1.JA（日本語）  2.EN（英語）  3. bilingual（日・英）  4. other（その他）
//deadline: in the form of 2020-06-10T03:09:18Z
//payment: 1. over_1000    2. over_2000    3. over_3000      4. other
//shift: 1. 1day/week   2. 2day/week   3. over_3day/week  4. temporary  5. other
//target_major: 1. science（理系）  2. humanities（文系）   3. both（文・理）

const InternList = () => {
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

export default InternList;
