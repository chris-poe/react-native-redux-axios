import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

const middleware = [thunk];

if (__DEV__) {
  const logger = createLogger({
    collapsed: true,
  });

  middleware.push(logger);
}

const rootReducer = combineReducers({
  ...reducers,
});

export default createStore(rootReducer, applyMiddleware(...middleware));
