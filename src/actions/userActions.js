import { createActions } from 'redux-actions';
import { actionTypes } from '../common/constants';

export const {
  fetchUsers,
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  updateUser,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  createUser,
  createUserRequest,
  createUserSuccess,
  createUserFailure,
  deleteUser,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure
} = createActions({
  [actionTypes.FETCH_USERS]: (payload) => payload,
  [actionTypes.FETCH_USERS_REQUEST]: (payload) => payload,
  [actionTypes.FETCH_USERS_SUCCESS]: (payload) => payload,
  [actionTypes.FETCH_USERS_FAILURE]: (payload) => payload,
  [actionTypes.UPDATE_USER]: (payload) => payload,
  [actionTypes.UPDATE_USER_REQUEST]: (payload) => payload,
  [actionTypes.UPDATE_USER_SUCCESS]: (payload) => payload,
  [actionTypes.UPDATE_USER_FAILURE]: (payload) => payload,
  [actionTypes.CREATE_USER]: (payload) => payload,
  [actionTypes.CREATE_USER_REQUEST]: (payload) => payload,
  [actionTypes.CREATE_USER_SUCCESS]: (payload) => payload,
  [actionTypes.CREATE_USER_FAILURE]: (payload) => payload,
  [actionTypes.DELETE_USER]: (payload) => payload,
  [actionTypes.DELETE_USER_REQUEST]: (payload) => payload,
  [actionTypes.DELETE_USER_SUCCESS]: (payload) => payload,
  [actionTypes.DELETE_USER_FAILURE]: (payload) => payload
});
