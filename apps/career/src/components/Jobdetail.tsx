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
    <div className="flex w-screen flex-col">
      <div className=" mb-10 mt-10 flex justify-center">
        <div className="mr-0">
          <Link to={"/"}>
            <button className=" mr-10 h-20 w-40 justify-self-start  rounded bg-blue-500 py-2 px-4 font-bold  text-white hover:bg-blue-700">
              Home
            </button>
          </Link>
        </div>

        <h1 className="mb-14 justify-self-center text-5xl font-bold">
          Job Detail
        </h1>
      </div>

      <div className="ml-10 self-start">{jobData.description}</div>
      <img src="" alt=""></img>
    </div>
  )
}

export default Jobdetail
