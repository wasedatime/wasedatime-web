import { getCurrentDateInJST } from "./getDate";

export const storeDate = () => {
  const storedDateInJST = localStorage.getItem("lastCheckedDateJST");
  const currentDateInJST = getCurrentDateInJST();

  if (!storedDateInJST) {
    // If there's no stored date, set the current date to local storage.
    localStorage.setItem("lastCheckedDateJST", currentDateInJST);
  } else if (storedDateInJST !== currentDateInJST) {
    // If the stored date and the current date are different, update the stored date.
    localStorage.setItem("lastCheckedDateJST", currentDateInJST);
  }
};
