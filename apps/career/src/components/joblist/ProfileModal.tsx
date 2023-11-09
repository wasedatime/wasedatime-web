import React, { useState } from "react"
import SchoolFilterForm from "../common/SchoolFilter"
import getSchoolIconPath from "@app/utils/get-school-icon-path"
import { profile } from "console"
import CareerComponentProps from "@app/types/careerComponentProps"

interface ProfileModalProps extends CareerComponentProps {
  closeModal: () => void
}

const ProfileModal: React.FC<ProfileModalProps> = ({
  profile,
  setProfile,
  closeModal,
}) => {
  const [expandSchool, setExpandSchool] = useState(false)
  const [profileData, setProfileData] = useState({
    school: profile.school,
    name: profile.name,
    email: profile.email,
    grade: profile.grade,
    class_of: profile.class_of,
    languages: profile.languages,
    interests: profile.interests,
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setProfileData({ ...profileData, [name]: value })
  }

  const handleSubmit = () => {
    // Here you would call your API function and pass the profileData object
    // Example: apiService.submitProfile(profileData);
    console.log("Submitted data:", profileData)
    closeModal() // Close modal after submission
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
                  profileData={profileData}
                  setProfileData={setProfileData}
                />
              ) : null}
              {profileData.school ? (
                <img
                  src={getSchoolIconPath(profileData.school, "en")}
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
            value={profileData.name}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={profileData.email}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            type="text"
            name="grade"
            placeholder="Grade"
            value={profileData.grade}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            type="text"
            name="class_of"
            placeholder="Class of"
            value={profileData.class_of}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            type="text"
            name="language"
            placeholder="Language"
            value={profileData.languages}
            onChange={handleChange}
            className="w-full rounded border p-2"
          />
          <input
            type="text"
            name="interests"
            placeholder="Interests"
            value={profileData.interests}
            onChange={handleChange}
            className="w-full rounded border p-2"
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
