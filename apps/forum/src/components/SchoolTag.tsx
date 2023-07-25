import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  gradSchools,
  otherSchools,
  undergradSchools,
} from "@app/constants/schools";
import { School } from "@app/constants/schools";
import getSchoolIconPath from "@app/utils/get-school-icon-path";
import { selectedSchoolState } from "@app/recoil/atoms";

type Props = {};

const schoolsByCategory = [
  {
    slug: "undergrad",
    title: "Undergraduate",
    schools: undergradSchools,
  },
  {
    slug: "grad",
    title: "Graduate",
    schools: gradSchools,
  },
  {
    slug: "other",
    title: "Other",
    schools: otherSchools,
  },
];

type SchoolBlockProps = {
  school: School;
};

const TabItem = ({ title, isActive, onClick }) => (
  <li className="mr-2" onClick={onClick}>
    <a href="#" className={isActive ? "tab-item-active" : "tab-item"}>
      {title}
    </a>
  </li>
);

const TabMenu = ({ activeTab, onClickTab }) => (
  <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
      {schoolsByCategory.map((schoolsSlugPair, i) => (
        <TabItem
          key={schoolsSlugPair.slug}
          title={schoolsSlugPair.title}
          isActive={activeTab === i}
          onClick={() => onClickTab(i)}
        />
      ))}
    </ul>
  </div>
);

const SchoolBlock = ({ school }) => {
  const [selectedSchool, setSelectedSchool] =
    useRecoilState(selectedSchoolState);

  const toggleSchool = (selected) => {
    if (selectedSchool === selected) {
      setSelectedSchool("none");
    } else {
      setSelectedSchool(selected);
    }
  };

  return (
    <div
      className={
        (selectedSchool === school
          ? "border-light-main"
          : "border-light-bgMain") +
        " border-2 rounded grow-0 shrink-0 m-2 cursor-pointer"
      }
      onClick={() => toggleSchool(school)}
    >
      <img src={getSchoolIconPath(school, "en")} width={25} height={25} />
    </div>
  );
};

const DropdownWithTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="dropdown dropdown-bottom">
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <TabMenu activeTab={activeTab} onClickTab={setActiveTab} />
          <div className="flex flex-row flex-wrap">
            {schoolsByCategory[activeTab].schools.map((school, i) => (
              <SchoolBlock key={i} school={school} />
            ))}
          </div>
        </li>
      </ul>
    </div>
  );
};

export default DropdownWithTabs;
