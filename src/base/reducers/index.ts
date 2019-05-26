import { combineReducers } from "redux";
import LoginReducer from "containers/Login/reducers";

export const rootReducer = combineReducers({
  login: LoginReducer
});
