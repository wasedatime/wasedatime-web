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
      default:
        return state;
    }
  };
};

export default fetchedById;

export const getItem = (state, id) => state[id];
