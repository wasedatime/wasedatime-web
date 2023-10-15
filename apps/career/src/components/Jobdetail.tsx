import React from "react"
import { Link, useLocation } from "react-router-dom"

// type JobDetailProps = {
//   jobID: string
//   title: string
//   description: string
//   location: string
//   datePosted: string
// }

const Jobdetail = () => {
  const location = useLocation()
  const jobData = location.state
  return (
    <div
      className="flex w-screen flex-col"
      // style={{ outline: "2px solid limegreen" }}
    >
      <div className="mb-10 mt-10 flex">
        <div className="max-h-20">
          <Link to={"/"}>
            <button
              onClick={(e) => {
                e.stopPropagation()
              }}
              className="h-full w-40 rounded bg-blue-500 py-2 px-4  font-bold text-white hover:bg-blue-700"
              // style={{ outline: "2px solid limegreen" }}
            >
              Home
            </button>
          </Link>
        </div>

        <h1
          className="mr-60 mb-14 flex h-20 w-full justify-center text-5xl font-bold"
          // style={{ outline: "2px solid limegreen" }}
        >
          Job Detail
        </h1>
      </div>

      <div className="ml-10 self-start">{jobData.description}</div>
      <img src="" alt=""></img>
    </div>
  )
}

export default Jobdetail
