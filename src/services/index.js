import axios from 'axios';
import config from '../config';

const client = axios.create(config.api);

// Request interceptor
client.interceptors.request.use(
  request => request,
  error => throw new Error(error)
);

// Response interceptor
client.interceptors.response.use(
  response => response,
  error => throw new Error(error)
);

const commonService = {
  getData(params) {
    return client.request({
      method: 'get',
      url: '/',
      params,
    });
  },
};

export { commonService };
