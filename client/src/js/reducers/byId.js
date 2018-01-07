const byId = (entityKey, actionTypes) => {
  return (state = {}, action) => {
    switch (action.type) {
      case actionTypes.fetchSuccess:
        return action.response.entities[entityKey];
      default:
        return state;
    }
  };
};

export default byId;

export const getItems = (state, id) => state[id];
