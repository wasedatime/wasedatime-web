import React from "react"

type Props = {
  job: {
    company: string
    companyLogo: string
    website: string
    companyDescription: string
  }
}

const CompanyOverview = ({ job }: Props) => {
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
      content: job.companyDescription,
    },
    // Add more sections as needed
  ]

  return (
    <>
      <div className="mt-14 rounded border border-gray-100/50 dark:border-neutral-600">
        <h1 className="p-6 text-center text-4xl font-bold">Company Overview</h1>
        <div className="text-center">
          <div className="mx-auto h-[55px] w-[55px] rounded-full">
            {job.companyLogo && (
              <div className="">
                <img
                  className=" h-[55px] w-[55px] rounded-md object-cover"
                  alt="Company Logo"
                  src={job.companyLogo}
                />
              </div>
            )}{" "}
          </div>
          {jobInformation.map((info, index) => (
            <div key={index} className="mt-4">
              <h3 className="mb-0 text-3xl text-gray-900 dark:text-gray-50">
                {info.label}
              </h3>
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
                <p className="mb-4 text-gray-500 dark:text-gray-300">
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
