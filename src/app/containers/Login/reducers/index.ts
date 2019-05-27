// FIXME
import { createReducer } from 'base';
import { Action, AppState } from 'types';
import { LoginState, LoginModel } from '../models';
import { ActionTypes, LoginActionType } from '../actionTypes';

const loginRequest = (state: LoginState): LoginState => state;
const loginError = (state: LoginState): LoginState => state;
const loginSuccess = (state: LoginState, action: LoginActionType): LoginState => {
  // FIXME TYPES
  console.log(111111, state);
  return action.payload;
};
const logoutRequest = (state: LoginState): LoginState => state;
const logoutError = (state: LoginState): LoginState => state;
const logoutSuccess = (state: LoginState): LoginState => state;

const actionHandlers = {
  [ActionTypes.LOGIN_REQUEST]: loginRequest,
  [ActionTypes.LOGIN_ERROR]: loginError,
  [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [ActionTypes.LOGOUT_REQUEST]: logoutRequest,
  [ActionTypes.LOGOUT_ERROR]: logoutError,
  [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess
};

export default createReducer(LoginModel, actionHandlers);
