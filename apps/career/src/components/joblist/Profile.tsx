import React, { useState } from "react"
import getSchoolIconPath from "@app/utils/get-school-icon-path"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import GradeIcon from "@mui/icons-material/Grade"
import LanguageIcon from "@mui/icons-material/Language"
import StarBorderIcon from "@mui/icons-material/StarBorder"
import SchoolIcon from "@mui/icons-material/School"

type UserProfile = {
  name: string
  school: string
  email: string
  grade: string
  classOf: string
  languages: Array<{ language: string; level: string }>
  interests: string[]
}

const Profile = () => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "Alex Johnson",
    school: "SILS",
    email: "alex.johnson@example.com",
    grade: "3",
    classOf: "2025",
    languages: [
      { language: "English", level: "Fluent" },
      { language: "Japanese", level: "N4" },
      // Add more as needed
    ],
    interests: ["Marketing", "IT"],
    // Add more as needed
  })
  const profileInformation = [
    {
      label: "Name",
      content: profile.name,
      icon: (
        <PersonIcon
          fontSize="large"
          className="rounded-full bg-blue-300 p-2 text-blue-900"
        />
      ),
    },
    {
      label: "Email",
      content: profile.email,
      icon: (
        <EmailIcon
          fontSize="large"
          className="rounded-full bg-blue-300 p-2 text-blue-900"
        />
      ),
    },
    {
      label: "Year",
      content: profile.grade,
      icon: (
        <GradeIcon
          fontSize="large"
          className="rounded-full bg-blue-300 p-2 text-blue-900"
        />
      ),
    },
    {
      label: "Class Of",
      content: profile.classOf,
      icon: (
        <SchoolIcon
          fontSize="large"
          className="rounded-full bg-blue-300 p-2 text-blue-900"
        />
      ),
    },
    {
      label: "Languages",
      content: (
        <ul className="list-disc pl-4">
          {profile.languages.map((lang, index) => (
            <li key={index}>{`${lang.language} - ${lang.level}`}</li>
          ))}
        </ul>
      ),
      icon: (
        <LanguageIcon
          fontSize="large"
          className="rounded-full bg-blue-300 p-2 text-blue-900"
        />
      ),
    },
    {
      label: "Interests",
      content: (
        <ul className="list-disc pl-4">
          {profile.interests.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      ),
      icon: (
        <StarBorderIcon
          fontSize="large"
          className="rounded-full bg-blue-300 p-2 text-blue-900"
        />
      ),
    },
    // Add more sections as needed
  ]
  return (
    <div className="standard-style mt-4 rounded border">
      <h1 className="p-6 text-center text-2xl font-bold">Profile</h1>
      <div className="ml-2">
        <div className="text-center">
          <div className="inline-flex w-full justify-center">
            <img
              className="flex h-[55px] w-[55px] object-cover p-2"
              alt={`${profile.school} Icon`}
              src={getSchoolIconPath("SILS", "en")}
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <ul>
          {profileInformation.map((info, index) => (
            <li key={index} className="mt-6 flex items-center">
              <i className="text-gray-500">{info.icon}</i>
              <div className="ml-4">
                <h2 className="mb-2 text-2xl font-bold">{info.label}</h2>
                <h2 className="text-2xl">{info.content}</h2>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-8 space-y-2">
          <div className="btn w-full border-transparent bg-blue-300 p-2  text-xl capitalize text-blue-900 hover:-translate-y-1.5">
            Edit Profile
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
