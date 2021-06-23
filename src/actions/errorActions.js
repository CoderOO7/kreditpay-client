import { actionTypes } from '../common/constants';

export const purgeErrors = () => ({ type: actionTypes.PURGE_ERRORS });

export const setErrors = (errors) => ({
  type: actionTypes.SET_ERRORS,
  payload: errors
});
