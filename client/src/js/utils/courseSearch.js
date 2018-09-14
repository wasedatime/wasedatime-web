import sortBy from 'lodash/sortBy';

export const tokenize = string => {
  return string.trim().split(/\W+/g);
};

export const regexify = string => {
  const terms = string.trim().replace(/\W+/g, '\\W+');
  const reg = RegExp(`\\b${terms}`, 'i');
  return reg;
};

export const searchCourses = (searchTerm, courses) => {
  const searchRegexes = tokenize(searchTerm).map(regexify);

  return courses.filter(course => {
    return searchRegexes.every(regex => {
      return regex.test(course.title) || regex.test(course.instructor);
    });
  });
};

export const sortCourses = (searchTerm, courses) => {
  const searchRegexes = tokenize(searchTerm).map(regexify);

  return sortBy(courses, course => {
    let sum = 0;
    for (let i = 0; i < searchRegexes.length; i++) {
      if (searchRegexes[i].test(course.title)) {
        sum += 1;
      } else if (searchRegexes[i].test(course.instructor)) {
        sum += 2;
      } else {
        sum += 3;
      }
      return sum;
    }
  });
};
