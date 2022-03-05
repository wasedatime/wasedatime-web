const termKeysMap = {
  0: "Spring",
  1: "Summer",
  2: "Fall",
  3: "Winter",
  s: "Semester",
  q: "Quarter",
  i: "Intensive",
  f: "Full-Year",
  t: "Term",
  "/": "/",
  "&": "&",
};

export const termKeysDecoder = (key) => {
  let str = "";
  if (typeof key === "string") {
    key.split("").forEach((k, i) => {
      if (i !== 0) str += " ";
      str += termKeysMap[k];
    });

    return str;
  }

  return "";
};

export default termKeysDecoder;
