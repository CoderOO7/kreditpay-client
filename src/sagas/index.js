import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import userSaga from './user';
import appSaga from './app';
import loanSaga from './loan';
import contactusSaga from './contactUs';

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(userSaga),
    fork(appSaga),
    fork(loanSaga),
    fork(contactusSaga)
  ]);
}
