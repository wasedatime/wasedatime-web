import React, { useState } from "react"
import BadgeIcon from "@mui/icons-material/Badge"
import LocationOnIcon from "@mui/icons-material/LocationOn"
import HistoryIcon from "@mui/icons-material/History"
import PaidIcon from "@mui/icons-material/Paid"
import JobProps from "@app/types/job"
import { timeFormatter } from "@app/utils/timeFormatter"
import AgreeModal from "@app/components/common/AgreeModal"
import UserProfile from "@app/types/userProfile"

interface Details {
  key: keyof JobProps
  label: string
  icon: JSX.Element
}

interface JobOverviewProps {
  job: JobProps
  profile: UserProfile
  onApplyClick: () => void // Assuming onApplyClick is a function that takes no arguments and returns void
  isAgreeModalOpen: boolean // Boolean state
  onModalAgree: () => void // Assuming onModalAgree is a function that takes no arguments and returns void
  onModalDisagree: () => void // Assuming onModalDisagree is a function that takes no arguments and returns void
}

const jobDetailStructure: Details[] = [
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
    key: "created_at",
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

const JobOverview: React.FC<JobOverviewProps> = ({
  job,
  profile,
  onApplyClick,
  isAgreeModalOpen,
  onModalAgree,
  onModalDisagree,
}) => {
  const applyButtonClass = job.applied
    ? "w-full rounded-lg border-transparent bg-light-main p-2 text-center text-xl capitalize text-white cursor-not-allowed opacity-50"
    : "w-full cursor-pointer rounded-lg border-transparent bg-light-main p-2 text-center text-xl capitalize text-white hover:-translate-y-1.5 hover:bg-light-lighter dark:bg-dark-main dark:hover:bg-dark-lighter"

  return (
    <>
      <div className="standard-style mt-14 rounded border text-light-text1 dark:text-dark-text1">
        <div className="p-6">
          <h1 className="m-2 text-2xl font-bold">Job Overview</h1>
          <ul>
            {jobDetailStructure.map((detail) => {
              let value = job[detail.key]

              if (detail.key === "created_at") {
                value = timeFormatter(value)
              }
              return (
                <li key={detail.key}>
                  <div className="mt-6 flex items-center truncate">
                    {detail.icon && <i>{detail.icon}</i>}
                    <div className="ml-4">
                      <h2 className="mb-2 text-2xl font-bold">
                        {detail.label}
                      </h2>
                      <h2 className="whitespace-pre-line text-2xl">{value}</h2>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="mt-8 space-y-2">
            <div
              className={applyButtonClass}
              onClick={!job.applied ? onApplyClick : undefined}
            >
              {!job.applied ? "apply now" : "applied"}
            </div>
          </div>
        </div>
      </div>
      {isAgreeModalOpen && (
        <AgreeModal
          onAgree={onModalAgree}
          onDisagree={onModalDisagree}
          job={job}
          profile={profile}
        />
      )}
    </>
  )
}

export default JobOverview
