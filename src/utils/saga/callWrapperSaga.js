import { call } from 'redux-saga/effects';

function* callWrapperSaga(fn, ...arg) {
  let response = {};
  try {
    response = yield call(fn, ...arg);
  } catch (err) {
    const { errors } = err.response.data;
    throw errors;
  }
  return response;
}

export { callWrapperSaga };
