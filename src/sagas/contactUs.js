import { toast } from 'react-toastify';
import { all, put, takeLatest } from 'redux-saga/effects';
import {
  createContactusFailure,
  createContactusRequest,
  createContactusSuccess
} from '../actions';
import { actionTypes } from '../common/constants';
import { contactUs } from '../services/api/contactUs';
import { callWrapperSaga } from '../utils/saga';

function* createContactUs({ payload, meta }) {
  const { resolve } = meta;
  try {
    yield put(createContactusRequest());
    const response = yield callWrapperSaga(contactUs.post, payload);
    if (response && resolve) {
      resolve({ response, success: true });
    }
    yield put(createContactusSuccess());
  } catch (err) {
    if (resolve) {
      resolve({ success: false });
    }
    window.console.error(err);
    toast.error('Unable to save your query');
    yield put(createContactusFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actionTypes.CREATE_CONTACTUS, createContactUs)]);
}
