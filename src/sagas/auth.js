/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { put, all, takeLatest } from 'redux-saga/effects';
import { callWrapperSaga } from '../utils/saga';
import { authLogin, authSignUp, authUserMe } from '../services/api';
import {
  loginUserRequest,
  loginUserFailure,
  loginUserSuccess,
  signupUserRequest,
  signupUserFailure,
  signupUserSuccess,
  setCurrentUser,
  unsetCurrentUser,
  fetchUserMeRequest,
  fetchUserMeSuccess,
  fetchUserMeFailure,
  resetApp
} from '../actions';
import { actionTypes } from '../common/constants';
import { removeAuthToken, setAuthToken } from '../utils/auth';
import history from '../utils/history';

export function* signupUser({ payload }) {
  yield put(signupUserRequest());
  try {
    yield callWrapperSaga(authSignUp.post, payload);
    yield put(signupUserSuccess());

    toast.success('User successfully registered');
    history.push('/signIn');
  } catch (err) {
    window.console.error(err);
    yield put(signupUserFailure({ errors: err }));
    toast.error('Unable to register the user');
  }
}

export function* fetchUserMe() {
  yield put(fetchUserMeRequest());
  let response = null;
  try {
    response = yield callWrapperSaga(authUserMe.getSingle, '');
    const { data } = response;
    yield put(fetchUserMeSuccess());
    yield put(setCurrentUser({ data }));
  } catch (errors) {
    window.console.error(errors);
    yield put(fetchUserMeFailure({ errors }));
  }
  return response;
}

export function* loginUser({ payload }) {
  yield put(loginUserRequest());
  try {
    const response = yield callWrapperSaga(authLogin.post, payload);
    const data = response.data[0];
    const { access_token } = data;
    yield setAuthToken(access_token);

    yield put(loginUserSuccess());
    history.push('/app');
  } catch (err) {
    window.console.error(err);
    yield put(loginUserFailure({ errors: err }));
    toast.error('Unable to loged in');
  }
}

export function* logoutUser() {
  yield put(unsetCurrentUser());
  yield removeAuthToken();
  yield put(resetApp());

  toast.success('Log out successfully');
  history.push('/');
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN_USER, loginUser),
    takeLatest(actionTypes.SIGNUP_USER, signupUser),
    takeLatest(actionTypes.LOGOUT_USER, logoutUser),
    takeLatest(actionTypes.FETCH_USER_ME, fetchUserMe)
  ]);
}
