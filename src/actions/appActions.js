import { createActions } from 'redux-actions';
import { actionTypes } from '../common/constants';

export const {
  initAppMount,
  initAppMountSuccess,
  initAppMountFailure,
  redirectUrl
} = createActions({
  [actionTypes.INIT_APP_MOUNT]: (payload) => payload,
  [actionTypes.INIT_APP_MOUNT_SUCCESS]: (payload) => payload,
  [actionTypes.INIT_APP_MOUNT_FAILURE]: (payload) => payload,
  [actionTypes.REDIRECT_URL]: (payload) => payload
});
