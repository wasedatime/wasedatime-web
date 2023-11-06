import React from "react"
import JobCard from "@app/components/joblist/JobCard"
import jobData from "@app/constants/dummy.json"

type Props = {}

const Joblist = (props: Props) => {
  return (
    <div className="grid grid-cols-12 place-items-center justify-center gap-y-6 lg:gap-10">
      <div className="col-span-12 ">
        <h1 className="my-14 text-center text-8xl font-bold">Careers</h1>
        <div className="mt-12">
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
    </div>
  )
}

export default Joblist
