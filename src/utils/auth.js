import axios from 'axios';
import { ACCESS_TOKEN } from '../common/constants';
import { appLocalStorage } from './storage';

export const setAuthToken = (token) => {
  if (token) {
    appLocalStorage.setItem(ACCESS_TOKEN, token);
    // Apply authorization token to every request if logged in
    axios.defaults.headers.common.Authorization = `Token ${token}`;
  }
};

export const getAuthToken = () => appLocalStorage.getItem(ACCESS_TOKEN);

export const removeAuthToken = () => {
  appLocalStorage.clear(ACCESS_TOKEN);
  // Delete auth header
  delete axios.defaults.headers.common.Authorization;
};

export const setApiInterceptor = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        if (window.location.pathname !== '/signin') {
          window.location.assign('/signin');
        }
        removeAuthToken();
      }
      throw error;
    }
  );
};
