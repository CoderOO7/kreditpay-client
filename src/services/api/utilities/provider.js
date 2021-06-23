import axios from 'axios';
import { handleResponse, handleError } from './response';

axios.defaults.headers['Content-Type'] = 'application/json';
axios.defaults.headers.language = 'en';
axios.defaults.baseURL = process.env.API_LOCATION;

const getSingle = (resource, id) =>
  axios({
    method: 'get',
    url: `${resource}/${id}`
  })
    .then(handleResponse)
    .catch(handleError);

const getAll = (resource) =>
  axios({
    method: 'get',
    url: `${resource}`
  })
    .then(handleResponse)
    .catch(handleError);

const post = (resource, model) =>
  axios({
    method: 'post',
    url: resource,
    data: model
  })
    .then(handleResponse)
    .catch(handleError);

const put = (resource, id, model) =>
  axios({
    method: 'put',
    url: `${resource}/${id}`,
    data: model
  })
    .then(handleResponse)
    .catch(handleError);

const patch = (resource, model) =>
  axios({
    method: 'patch',
    url: `${resource}`,
    data: model
  })
    .then(handleResponse)
    .catch(handleError);

const remove = (resource, id) =>
  axios({
    method: 'delete',
    url: `${resource}/${id}`
  })
    .then(handleResponse)
    .catch(handleError);

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove
};
