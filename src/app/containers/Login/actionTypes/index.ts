import { Action } from '../../../types';

export enum ActionTypes {
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_ERROR = 'LOGIN_ERROR',
  LOGOUT_REQUEST = 'LOGOUT_REQUEST',
  LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
  LOGOUT_ERROR = 'LOGOUT_ERROR'
}

type LoginRequest = Action<ActionTypes.LOGIN_REQUEST>;
type LoginError = Action<ActionTypes.LOGIN_ERROR>;

export type LoginActionType = LoginRequest | LoginError;
