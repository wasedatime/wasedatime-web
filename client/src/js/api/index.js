let API_STATIC_BASE_URL;
switch (process.env.NODE_ENV) {
  case 'production':
    API_STATIC_BASE_URL = '/api/static/';
    break;
  case 'development':
    API_STATIC_BASE_URL =
      process.env.REACT_APP_ENV === 'development-remote'
        ? '/api/static/'
        : 'https://dev.wasetime.com/api/static/';
    break;
  default:
    API_STATIC_BASE_URL = 'https://dev.wasetime.com/api/static/';
}

const YEAR = '2018-2019/';
const API_STATIC_URL = API_STATIC_BASE_URL + YEAR;
export const wasetimeApiStatic = {
  scraperStats: API_STATIC_URL + 'scraper_stats/index.json',
  courseListAll: API_STATIC_URL + 'course_list_all.json'
};
