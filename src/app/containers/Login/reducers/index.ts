import { createReducer } from 'base';
import { LoginType, loginState } from '../models';
import { ActionTypes, LoginActionType } from '../actionTypes';

const loginRequest = (state: LoginType): LoginType => state;
const loginError = (state: LoginType): LoginType => state;
const loginSuccess = (state: LoginType, action: LoginActionType): LoginType => {
  // FIXME TYPES
  console.log(111111, state);
  return action.payload;
};
const logoutRequest = (state: LoginType): LoginType => state;
const logoutError = (state: LoginType): LoginType => state;
const logoutSuccess = (state: LoginType): LoginType => state;

const actionHandlers = {
  [ActionTypes.LOGIN_REQUEST]: loginRequest,
  [ActionTypes.LOGIN_ERROR]: loginError,
  [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [ActionTypes.LOGOUT_REQUEST]: logoutRequest,
  [ActionTypes.LOGOUT_ERROR]: logoutError,
  [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess
};

export default createReducer(loginState, actionHandlers);
