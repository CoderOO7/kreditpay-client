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
