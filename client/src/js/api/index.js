let API_STATIC_BASE_URL;
if (process.env.NODE_ENV === 'production') {
  API_STATIC_BASE_URL = '/api/static/';
} else if (process.env.NODE_ENV === 'development') {
  if (process.env.REACT_APP_ENV === 'development-remote') {
    API_STATIC_BASE_URL = '/api/static/';
  } else {
    API_STATIC_BASE_URL = 'https://wasetime.com/api/static/';
  }
} else {
  API_STATIC_BASE_URL = 'https://wasetime.com/api/static/';
}

const YEAR = '2018-2019/';
const API_STATIC_URL = API_STATIC_BASE_URL + YEAR;
export const wasetimeApiStatic = {
  scraperStats: API_STATIC_URL + 'scraper_stats/index.json',
  courseListAll: API_STATIC_URL + 'course_list_all.json'
};
