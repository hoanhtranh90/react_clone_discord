import axios from 'axios';
import qs from 'qs';
import { SERVER_API_URL } from './constants';
// import { signOut } from '../modules/auth/auth.reducer';

const TIMEOUT = 60 * 1000;
axios.defaults.timeout = TIMEOUT;
axios.defaults.baseURL = SERVER_API_URL;

const setupAxiosInterceptors = (dispatch, onUnauthenticated) => {
  const onRequestSuccess = async (config) => {
    const token = await localStorage.getItem('jwtToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.paramsSerializer = params =>
      qs.stringify(params, {
        arrayFormat: 'repeat',
      });
    return config;
  };
  const onResponseSuccess = (response) => {
    return response;
  };
  const onResponseError = (error) => {
    console.log("!!! REQUEST FAILED: " + error.config.url + "\n" + JSON.stringify(error));
    if (error.code === '403' || error.code === '401') {
    //   dispatch(signOut());
      onUnauthenticated();
    }
    return Promise.reject(error);
  };
  axios.interceptors.request.use(onRequestSuccess);
  axios.interceptors.response.use(onResponseSuccess, onResponseError);
};

export default setupAxiosInterceptors;