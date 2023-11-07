import React from "react"

type Props = {}

const CompanyOverview = (props: Props) => {
  return (
    <>
      <h1 className="my-14 text-center text-4xl font-bold">Company Overview</h1>
      <div className="rounded border border-gray-100/50 dark:border-neutral-600">
        <div className="text-center">
          <div className="mx-auto h-20 w-20 rounded-full"> Image </div>
          <h3 className="mt-4 mb-0 text-3xl text-gray-900 dark:text-gray-50">
            Job Title
          </h3>
          <p className="mb-4 text-gray-500 dark:text-gray-300">Company name</p>
          <h3 className="mt-4 mb-0 text-3xl text-gray-900 dark:text-gray-50">
            Website
          </h3>
          <p className="mb-4 text-gray-500 dark:text-gray-300">URL</p>
          <h3 className="mt-4 mb-0 text-3xl text-gray-900 dark:text-gray-50">
            Description
          </h3>
          <p className="mb-4 text-gray-500 dark:text-gray-300">Description</p>
        </div>
      </div>
    </>
  )
}

export default CompanyOverview
