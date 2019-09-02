import * as api from '../api';
import { ActionTypes, LoginActionType } from '../actionTypes';

export const loginRequest = (): LoginActionType => ({
  type: ActionTypes.LOGIN_REQUEST,
  request: api.postRequest()
});

export const logoutRequest = (): LoginActionType => ({
  type: ActionTypes.LOGOUT_REQUEST
});
