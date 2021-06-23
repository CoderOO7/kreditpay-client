import isEmpty from 'is-empty';
import { actionTypes } from '../common/constants';

const initialState = {
  isAuthenticated: false,
  user: {},
  loading: false,
  errors: []
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.SIGNUP_USER_REQUEST:
    case actionTypes.LOGIN_USER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: []
      };

    case actionTypes.SIGNUP_USER_SUCCESS:
    case actionTypes.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: []
      };

    case actionTypes.SIGNUP_USER_FAILURE:
    case actionTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        errors: payload.errors,
        loading: false
      };

    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(payload),
        user: payload.data
      };

    case actionTypes.UNSET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: {}
      };

    default: {
      break;
    }
  }
  return state;
}
