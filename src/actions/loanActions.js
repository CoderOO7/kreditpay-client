import { createActions } from 'redux-actions';
import { actionTypes } from '../common/constants';

export const {
  createLoan,
  createLoanRequest,
  createLoanSuccess,
  createLoanFailure
} = createActions({
  [actionTypes.CREATE_LOAN]: [(payload) => payload, (payload, meta) => meta],
  [actionTypes.CREATE_LOAN_REQUEST]: (payload) => payload,
  [actionTypes.CREATE_LOAN_SUCCESS]: (payload) => payload,
  [actionTypes.CREATE_LOAN_FAILURE]: (payload) => payload
});
