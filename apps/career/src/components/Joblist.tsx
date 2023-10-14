import React from "react"
import JobCard from "./JobCard"
type Props = {}

const Joblist = (props: Props) => {
  return (
    <div className="w-screen p-4">
      <h1 className="mb-28 text-8xl font-bold">List of Jobs</h1>
      <div className="w-7/8  ml-10 mr-40 flex flex-col items-stretch justify-between gap-12">
        <JobCard
          title="Front-End Developer"
          description="We are looking for a skilled front-end developer with experience in React and Tailwind CSS."
          location="New York, NY"
          datePosted="Oct 14, 2023"
        />
        <JobCard
          title="Back-End Developer"
          description="Join our back-end development team and work on exciting projects using Node.js."
          location="San Francisco, CA"
          datePosted="Oct 15, 2023"
        />
        {/* Add more job cards here */}
      </div>
    </div>
  )
}

export default Joblist
