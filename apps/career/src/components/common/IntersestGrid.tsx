import React from "react"

const InterestGrid = ({ options, selectedInterests, onInterestChange }) => {
  const handleInterestClick = (interest) => {
    onInterestChange(interest)
  }

  return (
    <div className="standard-style relative grid grid-cols-6 items-center justify-items-center gap-4 border-b p-4">
      {options.map((option) => (
        <button
          key={option.value}
          className={`mb-2 inline-block w-24 overflow-hidden rounded-full px-2 py-1 font-sans ${
            selectedInterests.includes(option.value)
              ? "bg-light-card3 dark:bg-dark-card2" // Selected style
              : "bg-light-card2 dark:bg-dark-card1" // Unselected style
          }`}
          onClick={() => handleInterestClick(option.value)}
        >
          <div>{option.label}</div>
        </button>
      ))}
    </div>
  )
}

export default InterestGrid
