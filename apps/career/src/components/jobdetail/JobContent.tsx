import React from "react"
import JobProps from "@app/types/job"

const JobContent = ({ job }: { job: JobProps }) => {
  const jobContentSections = [
    {
      title: "Job Title",
      content: job.title,
    },
    {
      title: "Job Description",
      content: job.job_description,
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
            className="mb-7 h-[300px] w-[800px] rounded-md object-cover"
            alt="Job Hero Image"
            src={job.hero_image}
          />
          {job.company_logo && (
            <div className="absolute -bottom-10 left-7 z-20 ">
              <img
                className="mb-7 h-[55px] w-[55px] rounded-md object-contain"
                alt="Company Logo"
                src={job.company_logo}
              />
            </div>
          )}
        </div>
        <div className="p-6">
          {jobContentSections.map((section, index) => (
            <div key={index} className="mt-5">
              <h3 className="text-bold mb-3 text-5xl">{section.title}</h3>
              <p className="mb-0 whitespace-pre-line">{section.content}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-4 col-start-9 mt-8 space-y-2 p-6">
            <div
              className="w-full cursor-pointer rounded-lg border-transparent bg-light-main p-2 text-center text-xl capitalize text-white hover:-translate-y-1.5 hover:bg-light-lighter dark:bg-dark-main dark:hover:bg-dark-lighter"
              onClick={() => {
                if (job && job.apply) {
                  window.open(job.apply, "_blank")
                }
              }}
            >
              apply now
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default JobContent
