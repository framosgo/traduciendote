import produce from 'immer';
import { Action, RootReducer, RootState } from 'base/types';

type Reducer = (drafState: RootState, action: Action) => RootState;

export const combineImmerReducers = (reducers: RootReducer): Reducer => {
  const keys = Object.keys(reducers);

  const initialState = keys.reduce((acc: RootState, key: string): RootState => {
    // @ts-ignore noIndexSignature on RootState
    acc[key] = reducers[key](undefined, { type: '' });
    return acc;
  }, {});

  return produce((draftState: RootState, action: Action): RootState => {
    const newState = {};

    for (const i in keys) {
      if (i) {
        const key = keys[i];
        // @ts-ignore noIndexSignature on RootState
        newState[key] = reducers[key](draftState[key], action);
      }
    }

    return newState as RootState;
  }, initialState);
};
