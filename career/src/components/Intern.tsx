import React, { useState, useEffect } from "react";

import { RowWrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import CareerCard from "./CareerInternCard";
import InternFilter from "./InternFilter";
import InternFilterModal from "./InternFilterModal";

const companyList = [
  {
    Title: "Title1",
    Requirement: "Qwerty",
    Industry: "maker",
    Language: 0,
    URL: "https://www.google.com/",
    Shift: "Two days a week",
    DEADLINE: "NONE",
    Corporation: "株式会社Precal",
    Salary: "￥2000/hr",
    Description:
      "Bababa",
    Category: "Part-time",
    Location: "Tokyo",
    // Not displaying:
    Target_major: "Science",
    Duration: 8,
  },
  {
    Title: "Title1",
    Requirement: "Qwerty",
    Industry: "maker",
    Language: 0,
    URL: "https://www.google.com/",
    Shift: "Two days a week",
    DEADLINE: "NONE",
    Corporation: "株式会社Precal",
    Salary: 0,
    Description:
      "Bababa",
    Category: "Part-time",
    Target_major: "Science",
    Duration: 8,
    Location: "Tokyo"
  },
  {
    Title: "Title1",
    Requirement: "Qwerty",
    Industry: "maker",
    Language: 0,
    URL: "https://www.google.com/",
    Shift: "Two days a week",
    DEADLINE: "NONE",
    Corporation: "株式会社Precal",
    Salary: 0,
    Description:
      "Bababa",
    Category: "Part-time",
    Target_major: "Science",
    Duration: 8,
    Location: "Tokyo"
  },
  {
    Title: "Title1",
    Requirement: "Qwerty",
    Industry: "maker",
    Language: 0,
    URL: "https://www.google.com/",
    Shift: "Two days a week",
    DEADLINE: "NONE",
    Corporation: "株式会社Precal",
    Salary: 0,
    Description:
      "Bababa",
    Category: "Part-time",
    Target_major: "Science",
    Duration: 8,
    Location: "Tokyo"
  },
  // {
  //   Title: "Title4",
  //   Request: "AWS/PHP技能",
  //   Field: 1,
  //   Language: 0,
  //   URL: "https://bit.ly/2YzPmUS",
  //   DEADLINE: "NONE",
  //   Corporation: "株式会社Precal",
  //   Payment: 0,
  //   Description:
  //     "【面向工程师的医疗行业实习】 【时薪1,300~1,800日元】 【可远程工作】【面向工程师的医疗行业实习】 【时薪1,300~1,800日元】 【可远程工作】",
  // },
];

//Field: 1. MAKER 2. SERVICE  3. FINANCE  4. OFFICE   5. IT    6. CONSULTING
//Language: 1.JP  2.EN  3. Bilingual
//DEADLINE: in the form of DD/MM/YY
//Payment: 1. OVER 1000    2. OVER 2000    3. OVER 3000      4. OTHERS

const InternList = () => {
  const [browserWidth, setBrowserWidth] = useState(document.body.clientWidth);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", handleBrowserWidth);
    return () => {
      window.removeEventListener("resize", handleBrowserWidth);
    };
  }, [browserWidth]);

  const handleBrowserWidth = () => {
    setBrowserWidth(document.body.clientWidth);
  };

  const lists = companyList.map((Title) => {
    return <CareerCard careerInformation={Title} key={Title.Title} />;
  });

  return (
    <RowWrapper>
      <div className="intern-container">
        <div>{lists}</div>
      </div>
      {browserWidth > 1220 ? <InternFilter /> : <InternFilterModal />}
    </RowWrapper>
  );
};

export default InternList;
