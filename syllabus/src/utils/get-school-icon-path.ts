import Lang from "@bit/wasedatime.core.ts.constants.langs";
import schoolIconEN from "@app/constants/school-name-icon-map-en";
import schoolIconJA from "@app/constants/school-name-icon-map-ja";

const getSchoolIconPath = (school: string, lng: string): string => {
  console.log("==========");
  console.log(lng + " " + schoolIconJA[school] + " " + schoolIconEN[school]);
  console.log(import.meta.url);
  console.log("==========");
  const url = new URL(
    lng === Lang.JA ? schoolIconJA[school] : schoolIconEN[school],
    import.meta.url
  );
  return url.href;
};

export default getSchoolIconPath;
