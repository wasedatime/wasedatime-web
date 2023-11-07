import React from "react"
import { useParams } from "react-router-dom"
import jobData from "@app/constants/dummy.json"
import CompanyOverview from "./CompanyOverview"
import JobOverview from "./JobOverview"
import JobContent from "./JobContent"
import Breadcrumbs from "../common/Breadcrumbs"

type Props = {}

const jobdetail = (props: Props) => {
  let { jobId } = useParams()

  // Find the job that matches the jobID from the URL
  const job = jobData.find((j) => j.jobID === jobId)

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

export default jobdetail
