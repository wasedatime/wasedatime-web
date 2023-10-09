import { getCurrentDateInUTC } from "./getDate";

export const storeDate = () => {
  const storedDateInUTC = localStorage.getItem("lastCheckedDateUTC");
  const currentDateInUTC = getCurrentDateInUTC();

  if (!storedDateInUTC) {
    // If there's no stored date, set the current date to local storage.
    localStorage.setItem("lastCheckedDateUTC", currentDateInUTC);
  } else if (storedDateInUTC !== currentDateInUTC) {
    // If the stored date and the current date are different, update the stored date.
    localStorage.setItem("lastCheckedDateUTC", currentDateInUTC);
  }
};
