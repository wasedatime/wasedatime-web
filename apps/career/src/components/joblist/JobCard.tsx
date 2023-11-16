import React from "react"
import JobCardFooter from "./JobCardFooter"
import JobProps from "@app/types/job"
import { timeFormatter } from "@app/utils/timeFormatter"

interface JobCardProps extends JobProps {
  isRegistered?: boolean
}

// Props needed, company logo, title, company, salary, location, datePosted, job Type

const JobCard: React.FC<JobCardProps> = ({
  job_id,
  company_logo,
  title,
  location,
  created_at,
  company,
  type,
  isRegistered = false,
}) => {
  const formattedTime = timeFormatter(created_at)

  return (
    <div className="job-card-standard standard-style h-full">
      <div className="p-4">
        <div className="grid h-auto w-full grid-cols-12 items-center gap-x-11 sm:h-36 sm:gap-24">
          {/* Logo Section */}
          <div className="col-span-12 sm:col-span-2">
            <div className="mb-md-0 mb-4 text-center">
              <img
                src={company_logo}
                alt="Company Logo"
                className={`mx-auto h-[55px] w-[55px] object-contain ${
                  isRegistered ? `` : `blur-sm filter`
                }`}
              />
            </div>
          </div>
          {/* Title Section */}
          <div className="col-span-12 sm:col-span-3">
            <div className="mb-md-0 mb-2">
              <h2
                className={`truncate text-2xl font-bold text-light-text1 dark:text-dark-text1`}
              >
                {title}
              </h2>
              <p
                className={`mb-0 truncate text-light-text1 dark:text-dark-text1 ${
                  isRegistered ? `` : `blur-sm filter`
                }`}
              >
                {isRegistered ? company : "HAHA Register First Bro"}
              </p>
              {/* Other information related to the job title can be added here */}
            </div>
          </div>
          {/* Location Section */}
          <div className="col-span-12 sm:col-span-3">
            <div className="mb-2 sm:flex">
              {/* You can add an icon for location next to the text */}
              <p className="mb-0 truncate text-light-text1 dark:text-dark-text1">
                {location}
              </p>
            </div>
          </div>
          {/* Date Posted Section */}
          <div className="col-span-12 sm:col-span-2">
            <div className="mb-2 sm:mb-0">
              <h2 className="text-2xl font-bold text-light-text1 dark:text-dark-text1">
                {formattedTime}
              </h2>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-2">
            <div className="flex flex-wrap gap-1.5">
              <span className=" rounded bg-green-500/20 px-2 py-0.5 font-medium capitalize text-green-500">
                {type}
              </span>
            </div>
          </div>
          {/* Additional sections can be added here */}
        </div>
      </div>
      <JobCardFooter jobID={job_id} isRegistered={isRegistered} />
    </div>
  )
}

export default JobCard
