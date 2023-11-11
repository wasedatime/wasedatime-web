import React from "react"

type Props = {
  job: {
    title: string
    jobDescription: string
    responsibilities: string
    qualifications: string
    appeal: string
    min_hours: string
    companyLogo: string
    heroImage: string
    location: string
    salary: string
  }
}

const JobContent = ({ job }: Props) => {
  const jobContentSections = [
    {
      title: "Job Title",
      content: job.title,
    },
    {
      title: "Job Description",
      content: job.jobDescription,
    },
    {
      title: "Responsibilities",
      content: job.responsibilities,
    },
    {
      title: "Qualification",
      content: job.qualifications,
    },
    {
      title: "Appealing Points",
      content: job.appeal,
    },
    {
      title: "Minimum Work Hours",
      content: job.min_hours,
    },
    {
      title: "Location",
      content: job.location,
    },
    {
      title: "Salary",
      content: job.salary,
    },
    // You can add more sections here as needed
  ]
  return (
    <>
      <div className="standard-style mt-14 rounded-md border">
        <div className="relative">
          <img
            className="mb-7 h-[300px] w-[800px] rounded-md"
            alt="Job Hero Image"
            src={job.heroImage}
          />
          {job.companyLogo && (
            <div className="absolute -bottom-10 left-7 z-20 ">
              <img
                className="mb-7 h-[55px] w-[55px] rounded-md object-cover"
                alt="Company Logo"
                src={job.companyLogo}
              />
            </div>
          )}
        </div>
        <div className="p-6">
          {jobContentSections.map((section, index) => (
            <div key={index} className="mt-5">
              <h3 className="text-bold mb-3 text-gray-900 dark:text-gray-50">
                {section.title}
              </h3>
              <p className="mb-0 text-gray-500 dark:text-gray-300">
                {section.content}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4 col-start-9 mt-8 space-y-2 p-6">
            <div className="btn w-full border-transparent bg-blue-300 p-2 text-xl capitalize text-blue-900 hover:-translate-y-1.5">
              apply now
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobContent
