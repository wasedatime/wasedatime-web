import React, { useState } from "react"
import WorkIcon from "@mui/icons-material/Work"
import { Link } from "react-router-dom"
import JobCardFooter from "./JobCardFooter"

interface JobCardProps {
  jobID: string
  title: string
  description: string
  location: string
  datePosted: string
  logo: string
  company: string
}

// Props needed, company logo, title, company, salary, location, datePosted, job Type

// const JobCard: React.FC<JobCardProps> = ({
//   title,
//   description,
//   location,
//   datePosted,
//   jobID,
//   logo,
// }) => {
//   const [isExpanded, setIsExpanded] = useState(false)

//   const handleExpand = () => {
//     setIsExpanded(!isExpanded)
//   }

const JobCard: React.FC<JobCardProps> = ({
  jobID,
  logo,
  title,
  location,
  datePosted,
  company,
  // Include additional props as necessary
}) => {
  return (
    <div className="job-card-standard standard-style h-full">
      <div className="p-4">
        <div className="grid h-auto w-full grid-cols-12 items-center gap-x-11 sm:h-36 sm:gap-24">
          {/* Logo Section */}
          <div className="col-span-12 lg:col-span-2">
            <div className="mb-md-0 mb-4 text-center">
              <img
                src={logo}
                alt="Company Logo"
                className="mx-auto h-[55px] w-[55px] object-contain"
              />
            </div>
          </div>
          {/* Title Section */}
          <div className="col-span-12 lg:col-span-3">
            <div className="mb-md-0 mb-2">
              <h2 className="truncate text-2xl font-bold">{title}</h2>
              <p className="mb-0 truncate text-gray-500 dark:text-gray-300">
                {company}
              </p>
              {/* Other information related to the job title can be added here */}
            </div>
          </div>
          {/* Location Section */}
          <div className="col-span-12 lg:col-span-3">
            <div className="mb-2 lg:flex">
              {/* You can add an icon for location next to the text */}
              <p className="mb-0 truncate text-gray-500 dark:text-gray-300">
                {location}
              </p>
            </div>
          </div>
          {/* Date Posted Section */}
          <div className="col-span-12 lg:col-span-2">
            <div className="mb-0">
              <h2 className="text-2xl font-bold">{datePosted}</h2>
            </div>
          </div>
          {/* Additional sections can be added here */}
        </div>
      </div>
      <JobCardFooter jobID={jobID} />
    </div>
  )
}

export default JobCard
