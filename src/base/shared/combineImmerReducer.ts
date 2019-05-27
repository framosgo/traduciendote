import produce from 'immer';
import { Action, AppState } from '../../app/types';

export const combineImmerReducers = (reducers = {}) => {
  const keys = Object.keys(reducers);
  const initialState = keys.reduce((acc, k) => {
    acc[k] = reducers[k](undefined, {});
    return acc;
  }, {});

  return produce((draft, action) => {
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      draft[key] = reducers[key](draft[key], action);
    }
    return draft;
  }, initialState);
};
