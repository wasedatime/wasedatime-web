import JobProps from "@app/types/job"
import React from "react"

const CompanyOverview = ({ job }: { job: JobProps }) => {
  const jobInformation = [
    {
      label: "Company Name",
      content: job.company,
    },
    {
      label: "Website",
      content: job.website,
      isLink: true,
    },
    {
      label: "Description",
      content: job.company_description,
    },
    // Add more sections as needed
  ]

  return (
    <>
      <div className="standard-style mt-14 rounded border">
        <h1 className="p-6 text-center text-4xl font-bold">Company Overview</h1>
        <div className="text-center">
          <div className="mx-auto h-[55px] w-[55px] rounded-full">
            {job.company_logo && (
              <div className="">
                <img
                  className=" h-[55px] w-[55px] rounded-md object-contain"
                  alt="Company Logo"
                  src={job.company_logo}
                />
              </div>
            )}{" "}
          </div>
          {jobInformation.map((info, index) => (
            <div key={index} className="mt-4">
              <h3 className="mb-0 text-3xl ">{info.label}</h3>
              {info.isLink ? (
                <a
                  href={
                    /^https?:\/\//i.test(info.content)
                      ? info.content
                      : `http://${info.content}`
                  }
                  className="mb-4 text-blue-600 visited:text-purple-600 hover:text-blue-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {info.content}
                </a>
              ) : (
                <p className="mb-4 whitespace-pre-line p-2 font-bold text-gray-500 dark:text-gray-300">
                  {info.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CompanyOverview
