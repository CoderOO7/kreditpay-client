import { actionTypes } from '../common/constants';

const initialState = {
  errors: [],
  loading: false
};

export default function (state = initialState, { type, payload }) {
  switch (type) {
    case actionTypes.CREATE_LOAN_REQUEST:
      return {
        ...state,
        loading: true
      };

    case actionTypes.CREATE_LOAN_SUCCESS:
    case actionTypes.CREATE_LOAN_FAILURE:
      return {
        ...state,
        loading: false
      };

    default:
      break;
  }
  return state;
}
