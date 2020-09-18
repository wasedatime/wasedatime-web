import React from "react";
import CareerCard from "./CareerCard";

const companyList = [
  {
    company: "株式会社ライジングコーポレーション",
    area: "福岡県 天神2分",
    pay: "時給1,200円～2,000円",
    worktime: "平日1日～",
    title:
      "【未経験者歓迎】【就活支援あり】実績2万件を有する事業でトップセールスを目指せるインターン!",
    description:
      "自由な働き方と整った環境でセールス力が身につく実践型インターン",
    type: ["不動産/建築", "商社"],
    category: "営業",
    image:
      "https://static.careerbaito.com/picture/corporation/2796/708_472/ZpKQ0P4d.jpg",
  },
  {
    company:
      "株式会社ライジングコーポレーション1株式会社ライジングコーポレーション11111111111111111111111",
    area: "福岡県 天神2分",
    pay: "時給1,200円～2,000円",
    worktime: "平日1日～",
    title:
      "【未経験者歓迎】【就活支援あり】実績2万件を有する事業でトップセールスを目指せるインターン!12312312312312312312",
    description:
      "自由な働き方と整った環境でセールス力が身につく実践型インターン",
    type: ["不動産/建築", "商社"],
    category: "営業",
    image:
      "https://static.careerbaito.com/picture/corporation/2796/708_472/ZpKQ0P4d.jpg",
  },
  {
    company: "株式会社ライジングコーポレーション3",
    area: "福岡県 天神2分",
    pay: "時給1,200円～2,000円",
    worktime: "平日1日～",
    title:
      "【未経験者歓迎】【就活支援あり】実績2万件を有する事業でトップセールスを目指せるインターン!",
    description:
      "自由な働き方と整った環境でセールス力が身につく実践型インターン",
    type: ["不動産/建築", "商社"],
    category: "営業",
    image:
      "https://static.careerbaito.com/picture/corporation/2796/708_472/ZpKQ0P4d.jpg",
  },
  {
    company: "株式会社ライジングコーポレーション4",
    area: "福岡県 天神2分",
    pay: "時給1,200円～2,000円",
    worktime: "平日1日～",
    title:
      "【未経験者歓迎】【就活支援あり】実績2万件を有する事業でトップセールスを目指せるインターン!",
    description:
      "自由な働き方と整った環境でセールス力が身につく実践型インターン",
    type: ["不動産/建築", "商社"],
    category: "営業",
    image:
      "https://static.careerbaito.com/picture/corporation/2796/708_472/ZpKQ0P4d.jpg",
  },
];

const CareerList = () => {
  const lists = companyList.map((company) => {
    return <CareerCard company={company} key={company.company} />;
  });
  return (
    <div>
      <div className="ui segments">
        <div>{lists}</div>
      </div>
    </div>
  );
};

export default CareerList;
