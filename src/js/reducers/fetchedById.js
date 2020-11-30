const fetchedById = (entityKey, actionTypes) => {
  return (state = {}, action) => {
    switch (action.type) {
      case actionTypes.fetchSuccess:
        var coursesById = {};
        const coursesBySchool = { ...action.response["coursesBySchool"] };

        Object.keys(coursesBySchool).forEach((school) => {
          if (coursesBySchool[school].entities) {
            coursesById[school] = coursesBySchool[school].entities[entityKey];
          }
        });
        return coursesById || {};
      case actionTypes.addSchoolFetchSuccess:
        const courses = { ...action.response["courses"] };
        const school = action.response["school"];
        return {
          ...state,
          [school]: courses.entities ? courses.entities[entityKey] : {},
        };
      case actionTypes.removeSchool:
        return { ...state, [action.payload]: {} };
      default:
        return state;
    }
  };
};

export default fetchedById;

export const getItem = (state, id) => state[id];
