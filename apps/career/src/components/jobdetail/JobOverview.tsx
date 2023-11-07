import React from "react"
import { useParams } from "react-router-dom"
import jobData from "@app/constants/dummy.json"
import BadgeIcon from "@mui/icons-material/Badge"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import HistoryIcon from "@mui/icons-material/History"
import PaidIcon from "@mui/icons-material/Paid"

type Props = {
  job: object
}

const jobDetailStructure = [
  {
    key: "title",
    label: "Job Title",
    icon: (
      <BadgeIcon
        fontSize="large"
        className="rounded-full bg-blue-300 p-2 text-blue-900"
      />
    ),
  },
  {
    key: "location",
    label: "Location",
    icon: (
      <LocationOnIcon
        fontSize="large"
        className="rounded-full bg-blue-300 p-2 text-blue-900"
      />
    ),
  },
  {
    key: "datePosted",
    label: "Date Posted",
    icon: (
      <HistoryIcon
        fontSize="large"
        className="rounded-full bg-blue-300 p-2 text-blue-900"
      />
    ),
  },
  {
    key: "salary",
    label: "Salary",
    icon: (
      <PaidIcon
        fontSize="large"
        className="rounded-full bg-blue-300 p-2 text-blue-900"
      />
    ),
  },
]

const JobOverview = ({ job }: Props) => {
  // If job doesn't exist, you can handle the null case by rendering something else
  if (!job) {
    return <div>No job found</div>
  }

  return (
    <>
      <div className="mt-14 rounded border border-gray-100/30 dark:border-neutral-600/80">
        <div className="p-6">
          <h1 className="m-2 text-2xl font-bold">Job Overview</h1>
          <ul>
            {jobDetailStructure.map((detail) => {
              // Check if the job has the property
              if (!(detail.key in job)) return null

              const value = job[detail.key]
              return (
                <li key={detail.key}>
                  <div className="mt-6 flex items-center">
                    {detail.icon && <i>{detail.icon}</i>}
                    <div className="ml-4">
                      <h2 className="mb-2 text-2xl font-bold">
                        {detail.label}
                      </h2>
                      <h2 className="text-2xl">{value}</h2>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="mt-8 space-y-2">
            <div className="btn w-full border-transparent bg-blue-300 p-2  text-xl capitalize text-blue-900 hover:-translate-y-1.5">
              apply now
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobOverview
