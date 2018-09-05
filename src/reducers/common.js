import {
  APP_LOADING,
  APP_LOADED,
} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case APP_LOADING:
      return { ...state, loading: true };
    case APP_LOADED:
      return { ...state, loading: false };
    default:
      return state;
  }
};
