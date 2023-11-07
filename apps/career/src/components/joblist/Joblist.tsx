import React from "react"
import JobCard from "@app/components/joblist/JobCard"
import jobData from "@app/constants/dummy.json"
import Profile from "./Profile"

type Props = {}

const Joblist = (props: Props) => {
  return (
    <div className="grid grid-cols-12 gap-y-6 lg:gap-10 lg:gap-y-0">
      <div className="col-span-12 lg:col-span-9">
        <div className="mt-14 pt-6">
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
            />
          ))}
        </div>
      </div>
      <div className="col-span-12 lg:col-span-3">
        <div className="mt-14 pt-6">
          <Profile />
        </div>
      </div>
    </div>
  )
}

export default Joblist
