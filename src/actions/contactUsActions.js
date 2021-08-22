import { createActions } from 'redux-actions';
import { actionTypes } from '../common/constants';

export const {
  createContactus,
  createContactusRequest,
  createContactusSuccess,
  createContactusFailure
} = createActions({
  [actionTypes.CREATE_CONTACTUS]: (payload) => payload,
  [actionTypes.CREATE_CONTACTUS_REQUEST]: (payload) => payload,
  [actionTypes.CREATE_CONTACTUS_SUCCESS]: (payload) => payload,
  [actionTypes.CREATE_CONTACTUS_FAILURE]: (payload) => payload
});
