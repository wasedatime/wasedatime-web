const API_STATIC_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/static/"
    : "https://staging.wasedatime.com/api/static/";
const YEAR = "2020-2021/";
const API_STATIC_URL = API_STATIC_BASE_URL + YEAR;
const API_COURSE_EVALS_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "/api/course_evals?course_key="
    : "https://staging.wasedatime.com/api/course_evals?course_key=";
export const wasetimeApiStatic = {
  scraperStats: API_STATIC_URL + "scraper_stats/index.json",
  courseListAll: API_STATIC_URL + "course_list_all.json",
  courseEvalsBaseURL: API_COURSE_EVALS_BASE_URL
};
