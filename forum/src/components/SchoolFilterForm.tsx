import React, { useEffect, useState } from "react";
import {
  gradSchools,
  otherSchools,
  undergradSchools,
} from "@app/constants/schools";
import { School } from "@app/constants/schools";
import getSchoolIconPath from "@app/utils/get-school-icon-path";

const schoolsByCategory = [undergradSchools, gradSchools, otherSchools];

type SchoolBlockProps = {
  school: School;
}

type SchoolFilterFormProps = {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

const TabMenu = () => (
  <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex flex-wrap -mb-px">
      <TabItem />
      <TabItem />
      <TabItem />
    </ul>
  </div>
)

const TabItem = () => (
  <li className="mr-2">
    <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
  </li>
);

const SchoolBlock = ({ school }: SchoolBlockProps) => (
  <div className="float-left">
    <img src={getSchoolIconPath(school, "en")} width={50} height={50} />
  </div>
);

const SchoolFilterForm = ({ isOpen, setOpen }: SchoolFilterFormProps) => {
  const [ schoolsCategoryId, setSchoolsCategoryId ] = useState(0);

  return (
    <div className={!isOpen ? "hidden " : "" + "fixed top-0 left-0 right-0 z-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full z-0"}>
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-gray-500 opacity-10 z-0" onClick={() => setOpen(false)} />
      <div className="fixed top-1/4 bottom-1/4 left-1/4 right-1/4 bg-white z-10">
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li className="mr-2">
                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Profile</a>
            </li>
            <li className="mr-2">
                <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">Dashboard</a>
            </li>
            <li className="mr-2">
                <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Settings</a>
            </li>
          </ul>
        </div>
        <div>
          {
            schoolsByCategory[schoolsCategoryId].map(school => <SchoolBlock school={school} />)
          }
        </div>
      </div>
    </div>
  )
}

export default SchoolFilterForm;