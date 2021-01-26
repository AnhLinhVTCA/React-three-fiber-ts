import axios, { AxiosInstance } from 'axios';
import config from 'config';
import { getToken } from 'utils/token';

const instance: AxiosInstance = axios.create({
  baseURL: config.API_URL,
  headers: { 'X-Header': 'foobar' },
});

instance.interceptors.request.use(
  (config) => {
    //TODO add token here
    config.headers['X-Header-Token'] = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
