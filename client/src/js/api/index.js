const API_STATIC_BASE_URL =
  process.env.NODE_ENV === 'production'
    ? '/api/static/'
    : 'https://wasetime.com/api/static/';
const YEAR = '2018-2019/';
const API_STATIC_URL = API_STATIC_BASE_URL + YEAR;
export const wasetimeApiStatic = {
  scraperStats: API_STATIC_URL + 'scraper_stats/index.json',
  courseListAll: API_STATIC_URL + 'course_list_all.json'
};
