import { toast } from 'react-toastify';
import { all, takeLatest } from 'redux-saga/effects';
import { actionTypes } from '../common/constants';
import { contactUs } from '../services/api/contactUs';
import { callWrapperSaga } from '../utils/saga';

function* createContactUs({ payload }) {
  try {
    yield callWrapperSaga(contactUs.post, payload);
    toast.success('Your query is submitted successfully, out team will reach to you');
  } catch (err) {
    window.console.error(err);
    toast.error('Unable to save your query');
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actionTypes.CREATE_CONTACTUS, createContactUs)]);
}
