import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import {
  gradSchools,
  otherSchools,
  undergradSchools,
} from "@app/constants/schools";
import { School } from "@app/constants/schools";
import getSchoolIconPath from "@app/utils/get-school-icon-path";
import { currentGroupsState } from "@app/recoil/atoms";

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

type SchoolFilterFormProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
};

type TabMenuProps = {
  activeTab: number;
  onClickTab: (itemId: number) => void;
};

type TabItemProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

// TODO: use t(schoolsSlugPair.slug) instead of schoolsSlugPair.title; remove 'title' from schoolsByCategory
const TabMenu = ({ activeTab, onClickTab }: TabMenuProps) => (
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

const TabItem = ({ title, isActive, onClick }: TabItemProps) => (
  <li className="mr-2" onClick={onClick}>
    <a href="#" className={isActive ? "tab-item-active" : "tab-item"}>
      {title}
    </a>
  </li>
);

const SchoolFilterForm = ({ isOpen, setOpen }: SchoolFilterFormProps) => {
  const [schoolsCategoryId, setSchoolsCategoryId] = useState(0);
  const [currentGroups, setCurrentGroups] = useRecoilState(currentGroupsState);

  const toggleGroup = (group: string) => {
    console.log(group);
    if (currentGroups.includes(group)) {
      var groups = [...currentGroups];
      const index = groups.indexOf(group);
      if (index > -1) {
        groups.splice(index, 1);
      }
      setCurrentGroups(groups);
    } else {
      setCurrentGroups([...currentGroups, group]);
    }
  };

  const SchoolBlock = ({ school }: SchoolBlockProps) => (
    <div
      className={
        (currentGroups.includes(school)
          ? "border-light-main"
          : "border-light-bgMain") +
        " border-2 rounded grow-0 shrink-0 m-2 cursor-pointer"
      }
      onClick={() => toggleGroup(school)}
    >
      <img src={getSchoolIconPath(school, "en")} width={70} height={70} />
    </div>
  );

  return (
    <div
      className={
        !isOpen
          ? "hidden "
          : "" +
            "fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full z-40"
      }
    >
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-zinc-500 opacity-50 z-0"
        onClick={() => setOpen(false)}
      />
      <div className="fixed rounded-lg top-1/4 left-8 right-8 md:left-36 md:right-36 lg:left-1/4 lg:right-1/4 bg-white z-10">
        <TabMenu
          activeTab={schoolsCategoryId}
          onClickTab={setSchoolsCategoryId}
        />
        <div className="flex flex-row flex-wrap">
          {schoolsByCategory[schoolsCategoryId].schools.map((school, i) => (
            <SchoolBlock key={i} school={school} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SchoolFilterForm;
