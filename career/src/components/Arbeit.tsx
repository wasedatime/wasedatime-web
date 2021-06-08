import React from "react";
import { RowWrapper } from "@bit/wasedatime.core.ts.styles.wrapper";
import CareerCard from "./CareerCard";

const arbeitList = [
  {
    category: "part_time",
    title: "アルバイト学生を総務部で募集しており、【作業依頼内容】",
    description: "土日の朝、夜の鍵閉めと清掃（机椅子拭き掃除及び整列・ゴミの収集及びゴミ出し）",
    url: "https://www.google.com/",
    industry: "office",
    target_major: "humanities",
    requirement: "必要時間帯：8：30-10：30　と　20：30-22：30（状況によっては残業あり）",
    shift: "1day/week",
    duration: 8,
    corporation: "行知学園",
    location: "東京都新宿区百人町２丁目２－４－５　ライオンズマンション新大久保２Ｆ",
    salary: "over_1000",
    language: "JA",
    deadline: "2020-06-10T03:09:18Z",
  },
  {
    category: "part_time",
    title: "アルバイト学生を総務部で募集しており、【作業依頼内容】",
    description: "土日の朝、夜の鍵閉めと清掃（机椅子拭き掃除及び整列・ゴミの収集及びゴミ出し）",
    url: "https://www.google.com/",
    industry: "office",
    target_major: "humanities",
    requirement: "必要時間帯：8：30-10：30　と　20：30-22：30（状況によっては残業あり）",
    shift: "1day/week",
    duration: 8,
    corporation: "行知学園",
    location: "東京都新宿区百人町２丁目２－４－５　ライオンズマンション新大久保２Ｆ",
    salary: "over_1000",
    language: "JA",
    deadline: "2020-06-10T03:09:18Z",
  },
  {
    category: "part_time",
    title: "アルバイト学生を総務部で募集しており、【作業依頼内容】",
    description: "土日の朝、夜の鍵閉めと清掃（机椅子拭き掃除及び整列・ゴミの収集及びゴミ出し）",
    url: "https://www.google.com/",
    industry: "office",
    target_major: "humanities",
    requirement: "必要時間帯：8：30-10：30　と　20：30-22：30（状況によっては残業あり）",
    shift: "1day/week",
    duration: 8,
    corporation: "行知学園",
    location: "東京都新宿区百人町２丁目２－４－５　ライオンズマンション新大久保２Ｆ",
    salary: "over_1000",
    language: "JA",
    deadline: "2020-06-10T03:09:18Z",
  },
];

//Field: 1. maker（メーカ） 2. service（サービス）  3. finance（金融）  4. office（オフィス）   5. IT    6. consulting（コンサル）  7. other（その他）
//language: 1.JA（日本語）  2.EN（英語）  3. bilingual（日・英）  4. other（その他）
//deadline: in the form of 2020-06-10T03:09:18Z
//payment: 1. over_1000    2. over_2000    3. over_3000      4. other
//shift: 1. 1day/week   2. 2day/week   3. over_3day/week  4. temporary  5. other
//target_major: 1. science（理系）  2. humanity（文系）   3. both（文・理）

const CareerRecruit = () => {
  const lists = arbeitList.map((title) => {
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

export default CareerRecruit;
