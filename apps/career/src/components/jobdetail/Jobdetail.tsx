import React, { useState } from "react"
import { useParams } from "react-router-dom"
import CompanyOverview from "./CompanyOverview"
import JobOverview from "./JobOverview"
import JobContent from "./JobContent"
import Breadcrumbs from "../common/Breadcrumbs"
import CareerComponentProps from "@app/types/careerComponentProps"
import type JobProps from "@app/types/job"
import { SignInModal } from "wasedatime-ui"
import { useTranslation } from "react-i18next"

const Jobdetail: React.FC<CareerComponentProps> = ({
  profile,
  jobData,
  isRegistered,
}) => {
  const [isSignInModalOpen, setSignInModalOpen] = useState(false)
  const { t } = useTranslation()

  let { jobId } = useParams()

  let job
  if (jobData && jobData.length > 0) {
    job = jobData.find((j) => j.job_id === jobId)
  } else {
    const storedJobData = localStorage.getItem("jobs")
    if (storedJobData) {
      const parsedJobData = JSON.parse(storedJobData) as JobProps[]
      job = parsedJobData.find((j) => j.job_id === jobId)
    }
  }

  if (!job) {
    return <div>Job not found</div>
  }

  console.log("Job data state : ", job)
  console.log("Profile data state : ", profile)

  return (
    <>
      <div className="grid grid-cols-12 gap-y-10 text-light-text1 dark:text-dark-text1 lg:gap-10 lg:gap-y-0">
        <div className="col-span-12">
          <h1 className="pt-7 text-center text-8xl font-bold">Careers</h1>
          <Breadcrumbs job={job} />
        </div>
        {isRegistered ? (
          <>
            <div className="col-span-12 lg:col-span-3">
              <JobOverview job={job} />
            </div>
            <div className="col-span-12 lg:col-span-6">
              <JobContent job={job} />
            </div>
            <div className="col-span-12 lg:col-span-3">
              <CompanyOverview job={job} />
            </div>
          </>
        ) : (
          <div className="col-span-12 flex h-[calc(100vh-200px)] items-center justify-center text-center">
            <p className="text-3xl font-bold">
              Please sign in to view the job details.
            </p>
          </div>
        )}
      </div>
      <SignInModal
        isModalOpen={isSignInModalOpen}
        closeModal={() => setSignInModalOpen(false)}
        t={t}
      />
    </>
  )
}

export default Jobdetail
