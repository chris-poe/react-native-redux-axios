import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import config from '../config';
import reducer from '../reducers';

const client = axios.create(config.api);

const getMiddleware = () => {
  if (__DEV__) {
    return applyMiddleware(axiosMiddleware(client), thunk, logger);
  }
  return applyMiddleware(axiosMiddleware(client), thunk);
};

export default createStore(reducer, getMiddleware());
