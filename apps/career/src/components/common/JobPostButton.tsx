import React from "react"

const JobPostButton = () => {
  const handleClick = () => {
    const googleFormUrl = "https://forms.gle/o2HKyYP7SHB6ceX99"
    window.open(googleFormUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="mx-4 cursor-pointer rounded-lg rounded-lg border-transparent bg-light-main bg-light-main px-2 text-center text-xl capitalize text-white text-white hover:-translate-y-1.5 hover:bg-light-lighter dark:bg-dark-main dark:hover:bg-dark-lighter"
    >
      Post a Job
    </button>
  )
}

export default JobPostButton
