const LAST_API_CALL_TIMESTAMP = "lastApiCallTimestamp"
const ONE_HOUR_IN_MS = 60 * 60 * 1000

const convertToTimestamp = (datetime: string) => {
  const year = parseInt(datetime.substring(0, 4), 10)
  const month = parseInt(datetime.substring(4, 6), 10) - 1 // Months in JS are 0-indexed
  const day = parseInt(datetime.substring(6, 8), 10)
  const hour = parseInt(datetime.substring(8, 10), 10)
  const minute = parseInt(datetime.substring(10, 12), 10)
  const second = parseInt(datetime.substring(12, 14), 10)

  return new Date(year, month, day, hour, minute, second).getTime()
}

export const shouldCallApi = () => {
  const lastCallTimestamp = localStorage.getItem("lastApiCallTimestamp")

  if (!lastCallTimestamp) {
    return true
  }

  const timeSinceLastCall =
    new Date().getTime() - parseInt(lastCallTimestamp, 10)

  return timeSinceLastCall > ONE_HOUR_IN_MS
}
