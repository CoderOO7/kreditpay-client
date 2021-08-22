import { actionTypes } from '../common/constants';

const initialState = {
  appName: 'kreditpay',
  isAppMounted: false,
  redirectUrl: '/',
  errorMessage: ''
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.INIT_APP_MOUNT:
      return {
        ...state,
        isAppMounted: false
      };

    case actionTypes.INIT_APP_MOUNT_SUCCESS:
      return {
        ...state,
        isAppMounted: true
      };

    case actionTypes.INIT_APP_MOUNT_FAILURE:
      return {
        ...state,
        isAppMounted: false,
        errorMessage: payload.errorMessage
      };

    case actionTypes.REDIRECT_URL:
      return {
        ...state,
        redirectUrl: payload.data
      };

    case actionTypes.RESET_APP:
      return initialState;

    default:
      break;
  }
  return state;
}
