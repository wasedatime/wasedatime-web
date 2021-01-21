const API_STATIC_BASE_URL = process.env.REACT_APP_SYLLABUS_API_BASE_URL;
const YEAR = "2020-2021/";
const API_STATIC_URL = API_STATIC_BASE_URL + YEAR;
const API_COURSE_REVIEWS_BASE_URL = process.env.REACT_APP_REVIEWS_API_BASE_URL;
export const wasetimeApiStatic = {
  scraperStats: API_STATIC_URL + "scraper_stats/index.json",
  courseListAll: API_STATIC_URL + "course_list_all_min.json",
  courseReviewsBaseURL: API_COURSE_REVIEWS_BASE_URL,
};
