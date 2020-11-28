const termKeysMap = {
  "0": "Spring",
  "1": "Summer",
  "2": "Fall",
  "3": "Winter",
  s: "Semester",
  q: "Quarter",
  i: "Intensive",
  f: "Full-Year",
  t: "Term",
  "/": "/",
  "&": "&",
};

export const termKeysDecoder = (key) => {
  var str = "";
  if (!Array.isArray(key)) {
    key.split("").forEach((k, i) => {
      if (i !== 0) str += " ";
      str += termKeysMap[k];
    });
    return str;
  }
  return "";
};
