import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import logger from 'redux-logger';

import config from '../config';
import reducer from '../reducers';

const client = axios.create(config.api);

const getMiddleware = () => {
	if (process.env.NODE_ENV === 'production') {
		return axiosMiddleware(client);
	} else {
		return applyMiddleware(axiosMiddleware(client), logger);
	}
};

export default createStore(reducer, getMiddleware());
