//Program to create random Data, will be deleted in the future

function generateRandomFutureDate(
  minDaysInFuture: number,
  maxDaysInFuture: number
) {
  const currentDate = new Date()
  const minTimestamp =
    currentDate.getTime() + minDaysInFuture * 24 * 60 * 60 * 1000
  const maxTimestamp =
    currentDate.getTime() + maxDaysInFuture * 24 * 60 * 60 * 1000

  // Generate a random timestamp within the specified range
  const randomTimestamp =
    Math.random() * (maxTimestamp - minTimestamp) + minTimestamp

  // Create a new Date object with the random timestamp
  const randomDate = new Date(randomTimestamp)

  return randomDate
}

function generateJobListing() {
  const titles = [
    "Front-End Developer",
    "Back-End Developer",
    "Full-Stack Developer",
    "UX Designer",
    "Product Manager",
    "Data Scientist",
    "Software Engineer",
  ]

  const locations = [
    "New York, NY",
    "San Francisco, CA",
    "Los Angeles, CA",
    "Chicago, IL",
    "Austin, TX",
    "Seattle, WA",
  ]

  const descriptions = [
    "We are looking for a skilled professional to join our team.",
    "Exciting opportunity to work on innovative projects.",
    "Join a dynamic team of experts in a fast-paced environment.",
    "Create cutting-edge solutions and make a real impact.",
    "Collaborate with top talent to drive success.",
  ]

  function randomElement(arr: string | any[]) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
  }

  const title = randomElement(titles)
  const location = randomElement(locations)
  const description = randomElement(descriptions)
  const datePosted = new Date(
    generateRandomFutureDate(1, 365)
  ).toLocaleDateString()

  return {
    title,
    location,
    description,
    datePosted,
  }
}

// Generate an array of job listings
function generateJobListings(count: number) {
  const jobListings = []
  for (let i = 0; i < count; i++) {
    jobListings.push(generateJobListing())
  }
  return jobListings
}

// Generate, for example, 10 job listings
export const jobData = generateJobListings(10)

// Display the generated data
// console.log(jobData)
