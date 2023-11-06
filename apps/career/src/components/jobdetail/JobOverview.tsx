import React from "react"
import { useParams } from "react-router-dom"
import jobData from "@app/constants/dummy.json"

type Props = {}

const JobOverview = (props: Props) => {
  let { jobId } = useParams()

  console.log(jobId)

  // Find the job that matches the jobID from the URL
  const job = jobData.find((j) => j.jobID === jobId)

  // If job doesn't exist, you can handle the null case by rendering something else
  if (!job) {
    return <div>No job found</div>
  }
  return (
    <>
      <div className="my-14 rounded border border-gray-100/50 p-6 dark:border-neutral-600">
        <h1 className="m-2 text-2xl font-bold">Job Overview</h1>
        <h2 className="text-2xl font-bold">{job.title}</h2>
        <div className="font-bold">{job.location}</div>
        <div className="font-bold">Posted: {job.datePosted}</div>
      </div>
    </>
  )
}

export default JobOverview
