import React, { useState } from "react"
import SchoolFilterForm from "../common/SchoolFilter"
import getSchoolIconPath from "@app/utils/get-school-icon-path"
import { profile } from "console"
import CareerComponentProps from "@app/types/careerComponentProps"
import Dropdown from "../common/Dropdown"
import {
  gradYearOptions,
  gradeOptions,
  interestOptions,
  languageOptions,
  levelOptions,
} from "@app/constants/dropdownOptions"

interface ProfileModalProps extends CareerComponentProps {
  closeModal: () => void
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  profile,
  setProfile,
  closeModal,
}) => {
  const [expandSchool, setExpandSchool] = useState(false)
  // const [profileData, setProfileData] = useState({
  //   school: profile.school,
  //   name: profile.name,
  //   email: profile.email,
  //   grade: profile.grade,
  //   class_of: profile.class_of,
  //   languages: profile.languages,
  //   interests: profile.interests,
  // })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleDropdownChange = (event) => {
    const { name, value, options, type } = event.target

    // Check if it's a multiple select dropdown
    if (type === "select-multiple") {
      const selectedOptions = Array.from(options)
        .filter((option) => option.selected)
        .map((option) => option.value)
      // Update the state with the new array of selected options
      setProfile((prevState) => ({
        ...prevState,
        [name]: selectedOptions,
      }))
    } else {
      // Update the state for a single select dropdown
      setProfile((prevState) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  const handleSubmit = () => {
    console.log("Submitted data:", profile)
    closeModal()
  }
  return (
    <div className="fixed inset-0 z-50 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="flex h-full items-center justify-center">
        <div className="standard-style mx-auto max-w-md space-y-6 rounded-lg p-6">
          <h2 className="text-center text-2xl font-bold">Register Profile</h2>
          <div className="flex w-full items-center justify-center p-2">
            <button
              className="standard-style-hover  inline-flex gap-x-1.5 rounded-md bg-white px-3 py-2 text-2xl font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              onClick={() => setExpandSchool(!expandSchool)}
            >
              {expandSchool ? (
                <SchoolFilterForm
                  isOpen={expandSchool}
                  setOpen={setExpandSchool}
                  profileData={profile}
                  setProfileData={setProfile}
                />
              ) : null}
              {profile.school ? (
                <img
                  src={getSchoolIconPath(profile.school, "en")}
                  width={40}
                  height={40}
                />
              ) : (
                <p>Choose your school</p>
              )}
            </button>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={profile.name}
            onChange={handleInputChange}
            className="standard-style w-full rounded border p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profile.email}
            onChange={handleInputChange}
            className="standard-style w-full rounded border p-2"
          />
          <Dropdown
            name="grade"
            value={profile.grade}
            handleChange={handleDropdownChange}
            options={gradeOptions}
            placeholder="Select Grade"
          />
          <Dropdown
            name="class_of"
            value={profile.class_of}
            handleChange={handleDropdownChange}
            options={gradYearOptions}
            placeholder="Select Graduation Year"
          />
          <div className="grid grid-cols-2 gap-2">
            <Dropdown
              name="language 1"
              value={profile.languages}
              handleChange={handleDropdownChange}
              options={languageOptions}
              placeholder="Select Language"
              styles="col-span-1"
            />
            <Dropdown
              name="Level"
              value={profile.languages}
              handleChange={handleDropdownChange}
              options={levelOptions}
              placeholder="Select Level"
              styles="row-span-1"
            />
          </div>
          <Dropdown
            name="interests"
            value={profile.interests}
            handleChange={handleDropdownChange}
            options={interestOptions}
            placeholder="Select Interest"
            multiple={true}
          />
          <div className="text-center">
            <button
              onClick={handleSubmit}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={closeModal}
              className="rounded bg-gray-300 px-4 py-2 text-black hover:bg-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileModal
