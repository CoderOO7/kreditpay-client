import { combineReducers } from 'redux';
import appReducer from './appReducer';
import authReducer from './authReducer';
import loanReducer from './loanReducer';
import userReducer from './userReducer';

export default combineReducers({
  app: appReducer,
  auth: authReducer,
  user: userReducer,
  loan: loanReducer
});
