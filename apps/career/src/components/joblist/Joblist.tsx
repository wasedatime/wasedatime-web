import React, { useState, useEffect } from "react"
import JobCard from "@app/components/joblist/JobCard"
import jobData from "@app/constants/dummy.json"
import PostRegisterProfile from "./PostRegisterProfile"
import { getUserAttr, getIdToken, SignInModal } from "wasedatime-ui"
import { useTranslation } from "react-i18next"
import PreRegisterProfile from "./PreRegisterProfile"
import type CareerComponentProps from "@app/types/careerComponentProps"

type Props = {}

const Joblist: React.FC<CareerComponentProps> = ({ profile, setProfile }) => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegistered, setIsRegistered] = useState(true)
  const [userToken, setUserToken] = useState("")
  const { t } = useTranslation()

  const handleOpenForm = async () => {
    if (userToken?.length > 0) {
    } else {
      const idToken = await getIdToken()
      if (idToken?.length > 0) {
        setUserToken(idToken)
        setIsLoggedIn(true)
      } else {
        setSignInModalOpen(true)
      }
    }
  }

  useEffect(() => {
    handleOpenForm()
  }, [])

  return (
    <>
      {isLoggedIn ? (
        <div className="grid grid-cols-12 gap-y-6 lg:gap-10 lg:gap-y-0">
          <div className="col-span-12 lg:col-span-9">
            <div className={`mt-14 pt-6`}>
              {jobData.map((job, index) => (
                <JobCard
                  key={index}
                  jobID={job.jobID}
                  logo={job.companyLogo}
                  company={job.company}
                  title={job.title}
                  description={job.description}
                  location={job.location}
                  datePosted={job.datePosted}
                  isLoggedIn={isLoggedIn}
                  isRegistered={isRegistered}
                />
              ))}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="mt-14 pt-6">
              {isRegistered ? (
                <PostRegisterProfile
                  profile={profile}
                  setProfile={setProfile}
                />
              ) : (
                <PreRegisterProfile profile={profile} setProfile={setProfile} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[calc(100vh-200px)] items-center justify-center">
          <p className="text-3xl font-bold">
            Please sign in to view the job listings.
          </p>
        </div>
      )}
      <SignInModal
        isModalOpen={isSignInModalOpen}
        closeModal={() => setSignInModalOpen(false)}
        t={t}
      />
    </>
  )
}

export default Joblist
