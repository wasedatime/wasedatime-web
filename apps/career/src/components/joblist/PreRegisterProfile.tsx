import React, { useState } from "react"
import AccountCircleIcon from "@mui/icons-material/AccountCircle"
import ProfileModal from "./ProfileModal"
import CareerComponentProps from "@app/types/careerComponentProps"

type Props = {}

const PreRegisterProfile: React.FC<CareerComponentProps> = ({
  profile,
  setProfile,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }
  return (
    <div className="standard-style mt-4 rounded border">
      <h1 className="p-6 text-center text-2xl font-bold">Profile</h1>
      <div className="">
        <div className="text-center">
          <div className="inline-flex w-full justify-center">
            <AccountCircleIcon
              style={{ fontSize: 55, width: "55px", height: "55px" }}
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="leading-relaxed">
          Please register your user profile to apply for WasedaTime Careers. The
          data collected is isolated and will only be used in the Careers page.
        </p>
        <div className="mt-8 space-y-2">
          <button
            onClick={toggleModal}
            className="btn w-full border-transparent bg-blue-300 p-2 text-xl capitalize text-blue-900 hover:-translate-y-1.5"
          >
            Register Profile
          </button>
        </div>
      </div>

      {isModalOpen && <ProfileModal closeModal={toggleModal} />}
    </div>
  )
}

export default PreRegisterProfile
