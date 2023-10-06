export const getCurrentDateInJST = () => {
  const date = new Date();
  const jstOffset = 9 * 60; // JST is UTC+9
  const localOffset = date.getTimezoneOffset();
  date.setMinutes(date.getMinutes() + localOffset + jstOffset);

  const YYYY = date.getFullYear();
  const MM = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based
  const DD = String(date.getDate()).padStart(2, "0");
  const HH = String(date.getHours()).padStart(2, "0");
  const mm = String(date.getMinutes()).padStart(2, "0");
  const SS = String(date.getSeconds()).padStart(2, "0");

  return `${YYYY}${MM}${DD}${HH}${mm}${SS}`;
};
