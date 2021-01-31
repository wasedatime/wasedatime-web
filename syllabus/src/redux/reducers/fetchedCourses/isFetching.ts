interface ActionProps {
  type: string;
}

const isFetching = (actionTypes: { [key: string]: string }) => {
  return (state = false, action: ActionProps): boolean => {
    switch (action.type) {
      case actionTypes.fetchRequest:
        return true;
      case actionTypes.fetchSuccess:
      case actionTypes.fetchFailure:
        return false;
      default:
        return state;
    }
  };
};

export default isFetching;
