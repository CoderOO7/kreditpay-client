import { createActions } from 'redux-actions';
import { actionTypes } from '../common/constants';

export const {
  setCurrentUser,
  unsetCurrentUser,
  signupUser,
  signupUserRequest,
  signupUserSuccess,
  signupUserFailure,
  loginUser,
  loginUserRequest,
  loginUserSuccess,
  loginUserFailure,
  logoutUser
} = createActions({
  [actionTypes.SET_CURRENT_USER]: (payload) => payload,
  [actionTypes.UNSET_CURRENT_USER]: (payload) => payload,
  [actionTypes.SIGNUP_USER]: (payload) => payload,
  [actionTypes.SIGNUP_USER_REQUEST]: (payload) => payload,
  [actionTypes.SIGNUP_USER_SUCCESS]: (payload) => payload,
  [actionTypes.SIGNUP_USER_FAILURE]: (payload) => payload,
  [actionTypes.LOGIN_USER]: (payload) => payload,
  [actionTypes.LOGIN_USER_REQUEST]: (payload) => payload,
  [actionTypes.LOGIN_USER_SUCCESS]: (payload) => payload,
  [actionTypes.LOGIN_USER_FAILURE]: (payload) => payload,
  [actionTypes.LOGOUT_USER]: (payload) => payload
});
