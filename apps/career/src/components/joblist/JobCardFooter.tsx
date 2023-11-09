import React from "react"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import { Link } from "react-router-dom"

interface JobFooterProps {
  jobID: string
  isRegistered: boolean
}

const JobCardFooter: React.FC<JobFooterProps> = ({ jobID, isRegistered }) => {
  return (
    <div className="bg-gray-100 px-4 py-4 dark:bg-neutral-700">
      {isRegistered ? (
        <Link to={`/${jobID}`}>
          <div className="col-span-12 text-right text-light-text1 dark:text-dark-text1 lg:col-span-6 lg:mt-0">
            <span>Apply</span>
            <KeyboardDoubleArrowRightIcon />
          </div>
        </Link>
      ) : (
        <div className="col-span-12 cursor-not-allowed text-right text-light-text1 dark:text-dark-text1 lg:col-span-6 lg:mt-0">
          <span>Apply</span>
          <KeyboardDoubleArrowRightIcon />
        </div>
      )}
    </div>
  )
}

export default JobCardFooter
