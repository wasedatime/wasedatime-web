import React from "react"
import CompanyOverview from "./CompanyOverview"
import JobOverview from "./JobOverview"

type Props = {}

const jobdetail = (props: Props) => {
  return (
    <div className="grid grid-cols-12 gap-y-10 lg:gap-10">
      <div className="col-span-10 lg:col-span-3">
        <CompanyOverview />
        <JobOverview />
      </div>
      <div className="col-span-12 lg:col-span-9">
        <div className="mt-14 rounded-md border border-gray-100/30 dark:border-neutral-600/80">
          <div className="relative">
            <img
              className="img-fluid mb-7 h-[300px] w-[800px] rounded-md"
              alt="Image"
              src=""
            />
            <div className="absolute -bottom-7 left-7 z-20">
              <img className="img-fluid mb-7 rounded-md" alt="Image" src="" />
            </div>
          </div>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8">
              <div className="relative">
                <h5 className="mb-1 text-gray-900 dark:text-gray-50"> TEST </h5>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-12 gap-y-3 lg:gap-3">
            <div className="col-span-12 lg:col-span-4"></div>
          </div>
          <div className="mt-5">
            <h3 className="mb-3 text-gray-900 dark:text-gray-50">
              Job Description
            </h3>
            <p className="mb-0 text-gray-500 dark:text-gray-300">
              Descriptions
            </p>
          </div>
          <div className="mt-5">
            <h3 className="mb-3 text-gray-900 dark:text-gray-50">
              Responsibilities
            </h3>
            <p className="mb-0 text-gray-500 dark:text-gray-300">
              Descriptions
            </p>
          </div>
          <div className="mt-5">
            <h3 className="mb-3 text-gray-900 dark:text-gray-50">
              Qualification
            </h3>
            <p className="mb-0 text-gray-500 dark:text-gray-300">
              Descriptions
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default jobdetail
