import { APP_LOAD } from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case APP_LOAD:
      return { ...state, appLoaded: true };
    default:
      return state;
  }
};
