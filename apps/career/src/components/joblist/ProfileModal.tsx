import React, { useEffect, useState } from "react"
import SchoolFilterForm from "../common/SchoolFilter"
import getSchoolIconPath from "@app/utils/get-school-icon-path"
import { profile } from "console"
import CareerComponentProps from "@app/types/careerComponentProps"
import Dropdown from "../common/Dropdown"
import {
  JaLevelOptions,
  gradYearOptions,
  gradeOptions,
  interestOptions,
  languageOptions,
  levelOptions,
} from "@app/constants/dropdownOptions"
import InterestGrid from "../common/IntersestGrid"
import UserProfile from "@app/types/userProfile"
import API from "@aws-amplify/api"
import { getIdToken } from "wasedatime-ui"

interface ProfileModalProps extends CareerComponentProps {
  closeModal: () => void
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  profile,
  setProfile,
  closeModal,
  isRegistered,
}) => {
  const [expandSchool, setExpandSchool] = useState(false)
  const [localProfile, setLocalProfile] = useState(profile)
  const [userToken, setUserToken] = useState("")

  const getUserIdToken = async () => {
    if (userToken?.length > 0) {
    } else {
      const idToken = await getIdToken()
      if (idToken?.length > 0) {
        setUserToken(idToken)
      } else {
        console.error("No id token")
      }
    }
  }

  useEffect(() => {
    getUserIdToken()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  useEffect(() => {
    console.log(profile)
  }, [profile])

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value, options, type } = event.target

    setProfile((prevState) => {
      // Handling multiple select dropdown
      if (type === "select-multiple") {
        const selectedOptions = Array.from(options)
          .filter((option) => option.selected)
          .map((option) => option.value)
        return { ...prevState, [name]: selectedOptions }
      }

      // Handling language and level dropdowns
      if (name.startsWith("language") || name.startsWith("Level")) {
        const index = name.endsWith("2") ? 1 : 0 // Determine the index based on the dropdown name
        const key = name.startsWith("language") ? "language" : "level"

        // Update the specific language or level
        const newLanguages = [...prevState.languages]
        newLanguages[index] = { ...newLanguages[index], [key]: value }
        return { ...prevState, languages: newLanguages }
      }

      // Handling other single select dropdowns
      return { ...prevState, [name]: value }
    })
  }

  const handleInterestChange = (interest: string) => {
    setProfile((prevState: UserProfile) => {
      const newInterests = prevState.interests.includes(interest)
        ? prevState.interests.filter((i) => i !== interest)
        : [...prevState.interests, interest]

      return { ...prevState, interests: newInterests }
    })
  }

  const patchProfile = async (profileData: UserProfile) => {
    const dataToSend = { ...profileData }
    delete dataToSend.created_at
    delete dataToSend.updated_at
    delete dataToSend.uid
    delete dataToSend.school_email

    console.log("profile data : ", dataToSend)

    const idToken = await getIdToken()
    try {
      const response = await API.patch("wasedatime-dev", `/profile`, {
        body: { data: dataToSend },
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
      })

      console.log(response)
    } catch (error) {
      console.error("An error occurred:", error)
    }
  }

  const postProfile = async (profileData: UserProfile) => {
    const idToken = await getIdToken()
    try {
      const response = await API.post("wasedatime-dev", `/profile`, {
        body: { data: profileData },
        headers: {
          "Content-Type": "application/json",
          Authorization: idToken,
        },
      })

      console.log(response)
    } catch (error) {
      console.error("An error occurred:", error)
    }
  }

  const handleSubmit = () => {
    if (isRegistered) {
      console.log("patch")
      patchProfile(profile)
    } else {
      postProfile(profile)
    }

    closeModal()
  }
  return (
    <div className="fixed inset-0 z-50 h-full w-full overflow-y-auto bg-gray-600 bg-opacity-50">
      <div className="flex h-full items-center justify-center">
        <div className="standard-style mx-auto max-w-3xl space-y-6 rounded-lg p-6">
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
          <div className="flex flex-row items-center justify-center text-center">
            <h1 className="mr-2 text-2xl font-bold capitalize">name</h1>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={profile.name}
              onChange={handleInputChange}
              className="standard-style w-full rounded border p-2"
            />
          </div>
          <div className="flex flex-row items-center justify-center text-center">
            <h1 className="mr-2 text-2xl font-bold capitalize">email</h1>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={profile.email}
              onChange={handleInputChange}
              className="standard-style w-full rounded border p-2"
            />
          </div>
          <div className="flex flex-row items-center justify-center text-center">
            <h1 className="mr-2 text-2xl font-bold capitalize">Current Year</h1>
            <Dropdown
              name="year"
              value={profile.year}
              handleChange={handleDropdownChange}
              options={gradeOptions}
              placeholder="Select Grade"
            />
          </div>
          <div className="flex flex-row items-center justify-center text-center">
            <h1 className="mr-2 text-2xl font-bold capitalize">
              Expected year of graduation
            </h1>
            <Dropdown
              name="class_of"
              value={profile.class_of}
              handleChange={handleDropdownChange}
              options={gradYearOptions}
              placeholder="Select Graduation Year"
            />
          </div>
          <div className="flex flex-row items-center justify-center text-center">
            <h1 className="mr-2 text-2xl font-bold capitalize">language 1</h1>
            <div className="grid grid-cols-2 gap-2">
              <Dropdown
                name="language 1"
                value={profile.languages[0].language}
                handleChange={handleDropdownChange}
                options={languageOptions}
                placeholder="Select Language"
                styles="col-span-1"
              />
              <Dropdown
                name="Level 1"
                value={profile.languages[0].level}
                handleChange={handleDropdownChange}
                options={
                  profile.languages[0].language === "Japanese"
                    ? JaLevelOptions
                    : levelOptions
                }
                placeholder="Select Level"
                styles="row-span-1"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-center">
            <h1 className="mr-2 text-2xl font-bold capitalize">language 2</h1>
            <div className="grid grid-cols-2 gap-2">
              <Dropdown
                name="language 2"
                value={profile.languages[1].language}
                handleChange={handleDropdownChange}
                options={languageOptions}
                placeholder="Select Language"
                styles="col-span-1"
              />
              <Dropdown
                name="Level 2"
                value={profile.languages[1].level}
                handleChange={handleDropdownChange}
                options={
                  profile.languages[1].language === "Japanese"
                    ? JaLevelOptions
                    : levelOptions
                }
                placeholder="Select Level"
                styles="row-span-1"
              />
            </div>
          </div>
          <div className="flex flex-row items-center justify-center text-center">
            <h1 className="mr-2 text-2xl font-bold capitalize">interests</h1>
            <InterestGrid
              options={interestOptions}
              selectedInterests={profile.interests}
              onInterestChange={handleInterestChange}
            />
          </div>
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
