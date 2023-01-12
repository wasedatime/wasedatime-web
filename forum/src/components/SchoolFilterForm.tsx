import React, { useEffect, useState } from "react";
import {
  gradSchools,
  otherSchools,
  undergradSchools,
} from "@app/constants/schools";
import { School } from "@app/constants/schools";
import getSchoolIconPath from "@app/utils/get-school-icon-path";

const schoolsByCategory = [
  {
    slug: "undergrad",
    title: "Undergraduate",
    schools: undergradSchools
  },
  {
    slug: "grad",
    title: "Graduate",
    schools: gradSchools
  },
  {
    slug: "other",
    title: "Other",
    schools: otherSchools
  },
];

type SchoolBlockProps = {
  school: School;
}

type SchoolFilterFormProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

type TabMenuProps = {
  activeTab: number;
  onClickTab: (itemId: number) => void;
}

type TabItemProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

// TODO: use t(schoolsSlugPair.slug) instead of schoolsSlugPair.title; remove 'title' from schoolsByCategory
const TabMenu = ({ activeTab, onClickTab }: TabMenuProps) => (
  <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
      {
        schoolsByCategory.map((schoolsSlugPair, i) => (
          <TabItem key={schoolsSlugPair.slug} title={schoolsSlugPair.title} isActive={activeTab === i} onClick={() => onClickTab(i)} />
        ))
      }
    </ul>
  </div>
)

const TabItem = ({ title, isActive, onClick }: TabItemProps) => (
  <li className="mr-2" onClick={onClick}>
    <a href="#" className={isActive ? "tab-item-active" : "tab-item"}>{title}</a>
  </li>
);

const SchoolBlock = ({ school }: SchoolBlockProps) => (
  <div className="float-left m-2">
    <img src={getSchoolIconPath(school, "en")} width={70} height={70} />
  </div>
);

const SchoolFilterForm = ({ isOpen, setOpen }: SchoolFilterFormProps) => {
  const [ schoolsCategoryId, setSchoolsCategoryId ] = useState(0);

  return (
    <div className={!isOpen ? "hidden " : "" + "fixed top-0 left-0 right-0 z-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full z-0"}>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-500 opacity-10 z-0" onClick={() => setOpen(false)} />
      <div className="fixed top-1/4 bottom-1/4 left-1/4 right-1/4 bg-white z-10">
        <TabMenu activeTab={schoolsCategoryId} onClickTab={setSchoolsCategoryId} />
        <div>
          {
            schoolsByCategory[schoolsCategoryId].schools.map((school, i) => <SchoolBlock key={i} school={school} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SchoolFilterForm;