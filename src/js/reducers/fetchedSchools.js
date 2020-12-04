const fetchedSchools = (actionTypes) => {
  return (state = [], action) => {
    switch (action.type) {
      case actionTypes.addSchool:
        return state.includes(action.payload)
          ? state
          : [...state, action.payload];
      case actionTypes.removeSchool:
        const s = state;
        const index = s.indexOf(action.payload);
        if (index > -1) s.splice(index, 1);
        return s;
      default:
        return state;
    }
  };
};

export default fetchedSchools;
