const fetchedById = (entityKey, actionTypes) => {
  return (state = {}, action) => {
    switch (action.type) {
      case actionTypes.fetchSuccess:
        return action.response.entities[entityKey];
      default:
        return state;
    }
  };
};

export default fetchedById;

export const getItem = (state, id) => state[id];
