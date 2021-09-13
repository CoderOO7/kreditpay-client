import { toast } from 'react-toastify';
import { all, put, takeLatest } from 'redux-saga/effects';
import { createLoanFailure, createLoanRequest, createLoanSuccess } from '../actions';
import { actionTypes } from '../common/constants';
import { callWrapperSaga } from '../utils/saga';
import { apiLoan } from '../services/api/loan';

function* createLoan({ payload: { data } }) {
  try {
    yield put(createLoanRequest());
    yield callWrapperSaga(apiLoan.post, data);
    yield put(createLoanSuccess());
    toast.success('Loan created successfully');
  } catch (err) {
    window.console.error(err);
    toast.error('Unable to create loan');
    yield put(createLoanFailure());
  }
}

export default function* rootSaga() {
  yield all([takeLatest(actionTypes.CREATE_LOAN, createLoan)]);
}
