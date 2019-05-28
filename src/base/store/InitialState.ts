import { AppState } from 'types';
import * as models from '../models';
import setGlobalState from './globalState';

declare global {
  interface Window {
    $REACTBASE_STATE: AppState;
  }
}

export const initialState = window.$REACTBASE_STATE || {};

setGlobalState(initialState, models);
