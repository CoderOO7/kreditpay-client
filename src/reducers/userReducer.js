import { actionTypes } from '../common/constants';

const initialState = {
  users: [],
  loading: false,
  errors: []
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.FETCH_USERS_REQUEST:
    case actionTypes.DELETE_USER_REQUEST:
    case actionTypes.UPDATE_USER_REQUEST:
    case actionTypes.CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        errors: []
      };

    case actionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
        users: payload.data
      };

    case actionTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
        users: state.users.map((user) => (user._id === payload.id ? payload.data : user))
      };

    case actionTypes.CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
        users: [...state.users, payload.data]
      };

    case actionTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: [],
        users: state.users.filter((user) => user._id !== payload.id)
      };

    case actionTypes.FETCH_USERS_FAILURE:
    case actionTypes.CREATE_USER_FAILURE:
    case actionTypes.UPDATE_USER_FAILURE:
    case actionTypes.DELETE_USER_FAILURE:
      return {
        ...state,
        loading: false,
        errors: payload.errors
      };

    default: {
      break;
    }
  }
  return state;
}
