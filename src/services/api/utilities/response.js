import { filterErrors } from './error';

export function handleResponse(response) {
  if (response.results) {
    return response.results;
  }

  if (response.data) {
    return response.data;
  }

  return response;
}

export function handleError(error) {
  if (error.response && error.response.status === 422) {
    const { errors } = error.response.data;
    if (errors) {
      error.response.data.errors = filterErrors(errors);
    }
  }
  throw error;
}
