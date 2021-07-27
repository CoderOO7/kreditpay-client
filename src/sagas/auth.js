/* eslint-disable camelcase */
import { toast } from 'react-toastify';
import { put, all, takeLatest } from 'redux-saga/effects';
import { callWrapperSaga } from '../utils/saga';
import { authLogin, authSignUp } from '../services/api';
import {
  loginUserRequest,
  loginUserFailure,
  loginUserSuccess,
  signupUserRequest,
  signupUserFailure,
  signupUserSuccess,
  setCurrentUser,
  unsetCurrentUser
} from '../actions/authActions';
import { actionTypes, USER_ROLES } from '../common/constants';
import { removeAuthToken, setAuthToken } from '../utils/auth';
import history from '../utils/history';

export function* signupUser({ payload }) {
  yield put(signupUserRequest());
  try {
    yield callWrapperSaga(authSignUp.post, payload);
    yield put(signupUserSuccess());

    toast.success('User successfully registered');
    history.push('/');
  } catch (err) {
    window.console.error(err);
    yield put(signupUserFailure({ errors: err }));
    toast.error('Unable to register the user');
  }
}

export function* loginUser({ payload }) {
  yield put(loginUserRequest());
  try {
    const response = yield callWrapperSaga(authLogin.post, payload);
    const data = response.data[0];
    const { access_token, role } = data;

    yield setAuthToken(access_token);
    yield put(setCurrentUser({ data }));
    yield put(loginUserSuccess());

    toast.success('User successfully loged in');
    if (role === USER_ROLES.ADMIN || role === USER_ROLES.AGENT) {
      history.push('/admin');
    } else if (role === USER_ROLES.CUSTOMER) {
      history.push('/customer');
    }
  } catch (err) {
    window.console.error(err);
    yield put(loginUserFailure({ errors: err }));
    toast.error('Unable to loged in');
  }
}

export function* logoutUser() {
  yield put(unsetCurrentUser());
  yield removeAuthToken();

  toast.success('Log out successfully');
  history.push('/');
}

export default function* rootSaga() {
  yield all([
    takeLatest(actionTypes.LOGIN_USER, loginUser),
    takeLatest(actionTypes.SIGNUP_USER, signupUser),
    takeLatest(actionTypes.LOGOUT_USER, logoutUser)
  ]);
}
