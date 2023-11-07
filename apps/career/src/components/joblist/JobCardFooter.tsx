import React from "react"
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown"
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight"
import { Link } from "react-router-dom"

interface JobFooterProps {
  jobID: string
}

const JobCardFooter: React.FC<JobFooterProps> = ({ jobID }) => {
  return (
    <Link to={`/${jobID}`}>
      <div className=" bg-gray-50 px-4 py-4 dark:bg-neutral-700">
        <div className="col-span-12 text-right lg:col-span-6 lg:mt-0">
          <span>Apply</span>
          <KeyboardDoubleArrowRightIcon />
        </div>
      </div>
    </Link>
  )
}

export default JobCardFooter
