const fetchedlastModBySchool = (actionTypes) => {
  return (state = {}, action) => {
    switch (action.type) {
      case actionTypes.addSchoolFetchSuccess:
        return {
          ...state,
          [action.response.school]: action.response.lastMod,
        };
      case actionTypes.fetchSuccess:
        return action.response.lastModBySchool;
      default:
        return state;
    }
  };
};

export default fetchedlastModBySchool;
