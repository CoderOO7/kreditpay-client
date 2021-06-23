import { put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import {
  fetchUsersRequest,
  fetchUsersSuccess,
  fetchUsersFailure,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
  createUserRequest,
  createUserSuccess,
  createUserFailure
} from '../actions';
import { apiUsers } from '../services/api';
import { callWrapperSaga } from '../utils/saga';
import { actionTypes } from '../common/constants';

export function* fetchUsers() {
  yield put(fetchUsersRequest());
  try {
    const response = yield callWrapperSaga(apiUsers.getAll);
    const users = response.data;

    yield put(fetchUsersSuccess({ data: users }));
  } catch (errors) {
    console.error(errors);
    yield put(fetchUsersFailure({ errors }));
    toast.error('Unable to fetch the users');
  }
}

export function* createUser({ payload: { data } }) {
  yield put(createUserRequest());
  try {
    const response = yield callWrapperSaga(apiUsers.post, data);
    const user = response.data[0];

    yield put(createUserSuccess({ data: user }));
    toast.success('User successfully created');
  } catch (errors) {
    console.error(errors);
    yield put(createUserFailure({ errors }));
    toast.error('Unable to create the user');
  }
}

export function* updateUser({ payload: { id, data } }) {
  yield put(updateUserRequest());
  try {
    const response = yield callWrapperSaga(apiUsers.put, id, data);
    const user = response.data[0];

    yield put(updateUserSuccess({ id, data: user }));
    toast.success('User successfully updated');
  } catch (errors) {
    console.error(errors);
    yield put(updateUserFailure({ errors }));
    toast.error('Unable to update the user');
  }
}

export function* deleteUser({ payload: { id } = {} }) {
  yield put(deleteUserRequest());
  try {
    yield callWrapperSaga(apiUsers.delete, id);
    yield put(deleteUserSuccess({ id }));
    toast.success('User successfully deleted');
  } catch (errors) {
    console.error(errors);
    yield put(deleteUserFailure({ errors }));
    toast.error('Unable to delete the user');
  }
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.FETCH_USERS, fetchUsers),
    takeLatest(actionTypes.UPDATE_USER, updateUser),
    takeLatest(actionTypes.DELETE_USER, deleteUser),
    takeLatest(actionTypes.CREATE_USER, createUser)
  ]);
}
