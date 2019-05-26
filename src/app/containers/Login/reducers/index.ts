// FIXME
import { Record } from "immutable";

import { createReducer } from "../../../../base";
import { LoginModel, LoginState } from "../models";
import { ActionTypes, LoginActionType } from "../actionTypes";
import { Action, AppState } from "../../../types";

const loginRequest = (
  state: Record<LoginState>,
  action: LoginActionType
): LoginState => state;
const loginError = (
  state: Record<LoginState>,
  action: LoginActionType
): LoginState => state;
const loginSuccess = (
  state: Record<LoginState>,
  action: LoginActionType
): LoginState => state;

const logoutRequest = (
  state: Record<LoginState>,
  action: LoginActionType
): LoginState => state;
const logoutError = (
  state: Record<LoginState>,
  action: LoginActionType
): LoginState => state;
const logoutSuccess = (
  state: Record<LoginState>,
  action: LoginActionType
): LoginState => state.set("name", "").set("id");

const actionHandlers = {
  [ActionTypes.LOGIN_REQUEST]: loginRequest,
  [ActionTypes.LOGIN_ERROR]: loginError,
  [ActionTypes.LOGIN_SUCCESS]: loginSuccess,
  [ActionTypes.LOGOUT_REQUEST]: logoutRequest,
  [ActionTypes.LOGOUT_ERROR]: logoutError,
  [ActionTypes.LOGOUT_SUCCESS]: logoutSuccess
};

export default createReducer(new LoginModel(), actionHandlers);
