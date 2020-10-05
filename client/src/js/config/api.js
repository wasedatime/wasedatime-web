const API_STATIC_BASE_URL =
  "https://wasedatime-syllabus.s3-ap-northeast-1.amazonaws.com/";
const YEAR = "2020-2021/";
const API_STATIC_URL = API_STATIC_BASE_URL + YEAR;
const API_COURSE_EVALS_BASE_URL =
  "https://api.wasedatime.com/staging/course_reviews";
export const wasetimeApiStatic = {
  scraperStats: API_STATIC_URL + "scraper_stats/index.json",
  courseListAll: API_STATIC_URL + "course_list_all_min.json",
  courseEvalsBaseURL: API_COURSE_EVALS_BASE_URL,
};
