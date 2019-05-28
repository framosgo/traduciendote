import { createReducer } from 'base';
import { LoginModel, loginInitialState } from '../models';
import { ActionTypes, LoginActionType } from '../actionTypes';

const loginRequest = (state: LoginModel): LoginModel => state;
const loginError = (state: LoginModel): LoginModel => state;
const loginSuccess = (state: LoginModel, action: LoginActionType): LoginModel => {
  // FIXME TYPES
  console.log(111111, state);
  return action.payload;
};
const logoutRequest = (state: LoginModel): LoginModel => state;
const logoutError = (state: LoginModel): LoginModel => state;
const logoutSuccess = (state: LoginModel): LoginModel => state;

const actionHandlers = {
  [ActionTypes.LOGIN_REQUEST]: loginRequest,
  [ActionTypes.LOGIN_ERROR]: loginError,
  [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [ActionTypes.LOGOUT_REQUEST]: logoutRequest,
  [ActionTypes.LOGOUT_ERROR]: logoutError,
  [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess
};

export default createReducer(loginInitialState, actionHandlers);
