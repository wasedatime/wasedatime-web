import React from "react"
import { useParams } from "react-router-dom"
import jobData from "@app/constants/dummy.json"
import CompanyOverview from "./CompanyOverview"
import JobOverview from "./JobOverview"
import JobContent from "./JobContent"
import Breadcrumbs from "../common/Breadcrumbs"
import CareerComponentProps from "@app/types/careerComponentProps"

const Jobdetail: React.FC<CareerComponentProps> = ({ jobData }) => {
  let { jobId } = useParams()

  let job
  if (jobData && jobData.length > 0) {
    // Find the job that matches the jobID from the state
    job = jobData.find((j) => j.job_id === jobId)
  } else {
    // Try to get the data from localStorage
    const storedJobData = localStorage.getItem("jobData")
    if (storedJobData) {
      const parsedJobData = JSON.parse(storedJobData)
      job = parsedJobData.find((j) => j.job_id === jobId)
    }
  }

  if (!job) {
    // Handle the case where the job is not found
    return <div>Job not found</div>
  }

  console.log(jobData)

  return (
    <div className="grid grid-cols-12 gap-y-10 lg:gap-10 lg:gap-y-0">
      <div className="col-span-12">
        <h1 className="pt-7 text-center text-8xl font-bold">Careers</h1>
        <Breadcrumbs job={job} />
      </div>
      <div className="col-span-12 lg:col-span-3">
        <JobOverview job={job} />
      </div>
      <div className="col-span-12 lg:col-span-6">
        <JobContent job={job} />
      </div>
      <div className="col-span-12 lg:col-span-3">
        <CompanyOverview job={job} />
      </div>
    </div>
  )
}

export default Jobdetail
