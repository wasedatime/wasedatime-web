import { SEARCH_COURSES } from '../actions/types';

const searchTerm = (state = '', action) => {
  switch (action.type) {
    case SEARCH_COURSES:
      return action.searchTerm;
    default:
      return state;
  }
};

export default searchTerm;

export const getSearchTerm = state => state;
