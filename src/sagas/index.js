import { all, fork } from 'redux-saga/effects';
import authSaga from './auth';
import userSaga from './user';
import contactusSaga from './contactUs';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(userSaga), fork(contactusSaga)]);
}
