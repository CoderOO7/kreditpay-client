import { toast } from 'react-toastify';
import { all, put, takeLatest } from 'redux-saga/effects';
import { initAppMountFailure, initAppMountSuccess } from '../actions';
import { actionTypes } from '../common/constants';
import { getAuthToken } from '../utils/auth';
import { callWrapperSaga } from '../utils/saga';
import { fetchUserMe } from './auth';

function* initAppMount() {
  const token = getAuthToken();
  try {
    if (token) {
      yield callWrapperSaga(fetchUserMe);
      yield put(initAppMountSuccess());
    }
  } catch (err) {
    window.console.error(err);
    yield put(
      initAppMountFailure({
        errorMessage: 'Due to technical error unable to mount the app'
      })
    );
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actionTypes.INIT_APP_MOUNT, initAppMount)]);
}
