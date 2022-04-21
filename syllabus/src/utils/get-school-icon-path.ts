import Lang from "@bit/wasedatime.core.ts.constants.langs";

const getSchoolIconPath = (school: string, lng: string): string => {
  const url = new URL(
    `/assets/img/syllabus-icons/${school.toLowerCase()}${
      lng === Lang.JA ? "_jp" : ""
    }.png`,
    import.meta.url
  );
  return url.href;
};

export default getSchoolIconPath;
