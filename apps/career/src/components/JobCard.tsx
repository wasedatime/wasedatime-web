import React from "react"
import WorkIcon from "@mui/icons-material/Work"
interface JobCardProps {
  title: string
  description: string
  location: string
  datePosted: string
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  description,
  location,
  datePosted,
}) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <div className="flex justify-between">
        <h2 className="mb-2 text-2xl font-bold">{title}</h2>
        <WorkIcon fontSize="large" />
      </div>
      <p className="mb-4 text-gray-600">{description}</p>
      <div className="flex justify-between text-gray-500">
        <p>{location}</p>
        <p>{datePosted}</p>
      </div>
    </div>
  )
}

export default JobCard
