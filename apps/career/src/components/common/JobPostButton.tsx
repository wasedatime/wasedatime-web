import React from "react"

const JobPostButton = () => {
  const handleClick = () => {
    const googleFormUrl = "https://forms.gle/o2HKyYP7SHB6ceX99"
    window.open(googleFormUrl, "_blank")
  }

  return (
    <button
      onClick={handleClick}
      className="mx-4 rounded-lg bg-light-main px-2 text-white"
    >
      Post a Job
    </button>
  )
}

export default JobPostButton
