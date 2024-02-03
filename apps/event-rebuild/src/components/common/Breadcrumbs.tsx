import JobProps from "@app/types/job"
import React from "react"
import { useLocation, Link } from "react-router-dom"

const Breadcrumbs = ({ job }: { job: JobProps }) => {
  const location = useLocation()
  const pathnames = location.pathname.split("/").filter((x) => x)

  return (
    <nav aria-label="breadcrumb" className="my-3 text-center">
      <ol className="inline-flex items-center space-x-2">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
          >
            Career List
          </Link>
        </li>
        {pathnames.length > 0 && (
          <li>
            <span className="mx-2 text-gray-500">/</span>
          </li>
        )}
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
          const isLast = index === pathnames.length - 1
          return (
            <li key={name} className="inline-flex items-center">
              {isLast ? (
                <span className="font-bold text-gray-500">{job.title}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {name}
                </Link>
              )}
              {!isLast && <span className="mx-2 text-gray-500">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
