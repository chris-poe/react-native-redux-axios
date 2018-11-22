import actionTypes from '../actions/actionTypes';

export default (
  state = {
    appLoaded: null,
  },
  action
) => {
  switch (action.type) {
    case actionTypes.APP_LOAD:
      return { ...state, appLoaded: action.payload };
    default:
      return state;
  }
};
