import React, { useEffect, useState } from "react";
import {
  gradSchools,
  otherSchools,
  undergradSchools,
} from "@app/constants/schools";
import { School } from "@app/constants/schools";
import getSchoolIconPath from "@app/utils/get-school-icon-path";
import { useRecoilState } from "recoil";
import { currentSchoolState } from "@app/recoil/atoms";

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
  setSchool: (school: string) => void;
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

const TabItem = ({ title, isActive, onClick }: TabItemProps) => (
  <li className="mr-2" onClick={onClick}>
    <a href="#" className={isActive ? "tab-item-active" : "tab-item"}>
      {title}
    </a>
  </li>
);

const TabMenu = ({ activeTab, onClickTab }: TabMenuProps) => (
  <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 standard-style">
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

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   setTagsSelected(selectedTags);
//   setQuery("");
//   closeModal();
// };

const SchoolFilterForm = ({
  isOpen,
  setOpen,
  setSchool,
}: SchoolFilterFormProps) => {
  const [schoolsCategoryId, setSchoolsCategoryId] = useState(0);
  const [tempSelectedSchool, setTempSelectedSchool] = useState("");

  const toggleGroup = (school: string) => {
    if (tempSelectedSchool === school) {
      setTempSelectedSchool(""); // Deselect
    } else {
      setTempSelectedSchool(school); // Select
    }
  };

  const applySelection = () => {
    setSchool(tempSelectedSchool); // Update the state using setSchool
    setTempSelectedSchool(""); // Clear the temporary state
    setOpen(false);
  };

  const SchoolBlock = ({ school }: SchoolBlockProps) => (
    <div
      className={
        (tempSelectedSchool === school
          ? "border-light-main dark:border-dark-main"
          : "border-light-bgMain dark:border-dark-bgMain") +
        " border-2 rounded grow-0 shrink-0 m-2 cursor-pointer standard-style-schoolfilter"
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
          : "fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full z-40"
      }
    >
      <div
        className="fixed top-0 bottom-0 left-0 right-0 bg-zinc-500 opacity-50 z-0"
        onClick={() => setOpen(false)}
      />
      <div
        className="fixed rounded-lg top-1/4 left-8 right-8 md:left-36 md:right-36 lg:left-1/4 lg:right-1/4 bg-light-bgMain dark:bg-dark-bgMain z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <TabMenu
          activeTab={schoolsCategoryId}
          onClickTab={setSchoolsCategoryId}
        />
        <div className="flex flex-row flex-wrap standard-style">
          {schoolsByCategory[schoolsCategoryId].schools.map((school, i) => (
            <SchoolBlock key={i} school={school} />
          ))}
        </div>
        {tempSelectedSchool && (
          <button
            className="bg-light-main text-white rounded-lg px-4 py-2 m-2"
            onClick={applySelection}
          >
            Apply
          </button>
        )}
      </div>
    </div>
  );
};

export default SchoolFilterForm;
