import React, { useEffect, useState } from "react"
import {
  gradSchools,
  otherSchools,
  undergradSchools,
} from "@app/constants/schools"
import { School } from "@app/constants/schools"
import getSchoolIconPath from "@app/utils/get-school-icon-path"
import type UserProfile from "@app/types/userProfile"

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
]

type SchoolBlockProps = {
  school: School
}

interface SchoolFilterFormProps {
  isOpen: boolean
  setOpen: (open: boolean) => void
  profileData: UserProfile
  setProfileData: (profileData: UserProfile) => void
}

type TabMenuProps = {
  activeTab: number
  onClickTab: (itemId: number) => void
}

type TabItemProps = {
  title: string
  isActive: boolean
  onClick: () => void
}

const TabItem = ({ title, isActive, onClick }: TabItemProps) => (
  <li className="mr-2" onClick={onClick}>
    <a href="#" className={isActive ? "tab-item-active" : "tab-item"}>
      {title}
    </a>
  </li>
)

const TabMenu = ({ activeTab, onClickTab }: TabMenuProps) => (
  <div className="standard-style border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
    <ul className="-mb-px flex flex-wrap">
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
)

// const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault();
//   setTagsSelected(selectedTags);
//   setQuery("");
//   closeModal();
// };

const SchoolFilterForm = ({
  isOpen,
  setOpen,
  profileData,
  setProfileData,
}: SchoolFilterFormProps) => {
  const [schoolsCategoryId, setSchoolsCategoryId] = useState(0)
  const [tempSelectedSchool, setTempSelectedSchool] = useState("")

  const toggleGroup = (school: string) => {
    if (tempSelectedSchool === school) {
      setTempSelectedSchool("") // Deselect
    } else {
      setTempSelectedSchool(school) // Select
    }
  }

  const applySelection = () => {
    setProfileData({
      ...profileData,
      school: tempSelectedSchool,
    }) // Update the state using setSchool
    setTempSelectedSchool("") // Clear the temporary state
    setOpen(false)
  }

  const SchoolBlock = ({ school }: SchoolBlockProps) => (
    <div
      className={
        (tempSelectedSchool === school
          ? "border-light-main dark:border-dark-main"
          : "border-light-bgMain dark:border-dark-bgMain") +
        " standard-style-schoolfilter m-2 shrink-0 grow-0 cursor-pointer rounded border-2"
      }
      onClick={() => toggleGroup(school)}
    >
      <img src={getSchoolIconPath(school, "en")} width={70} height={70} />
    </div>
  )

  return (
    <div
      className={
        !isOpen
          ? "hidden "
          : "h-modal fixed top-0 left-0 right-0 z-40 w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full"
      }
    >
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-0 bg-zinc-500 opacity-50"
        onClick={() => setOpen(false)}
      />
      <div
        className="fixed top-1/4 left-8 right-8 z-10 rounded-lg bg-light-bgMain dark:bg-dark-bgMain md:left-36 md:right-36 lg:left-1/4 lg:right-1/4"
        onClick={(e) => e.stopPropagation()}
      >
        <TabMenu
          activeTab={schoolsCategoryId}
          onClickTab={setSchoolsCategoryId}
        />
        <div className="standard-style flex flex-row flex-wrap">
          {schoolsByCategory[schoolsCategoryId].schools.map((school, i) => (
            <SchoolBlock key={i} school={school} />
          ))}
        </div>
        {tempSelectedSchool && (
          <button
            className="m-2 rounded-lg bg-light-main px-4 py-2 text-4xl text-white"
            onClick={applySelection}
          >
            Apply
          </button>
        )}
      </div>
    </div>
  )
}

export default SchoolFilterForm
