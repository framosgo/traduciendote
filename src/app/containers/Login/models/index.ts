import { Record } from "immutable";
import produce from "immer";

import { AppState } from "../../../types";

export interface LoginState {
  id: number;
  name: string;
}

export const LoginModel = Record<LoginState>({
  id: -1,
  name: "Pepe"
});

export const setInitialState = (initialState: AppState): AppState => {
  initialState.login = new LoginModel();
  return initialState;
};
