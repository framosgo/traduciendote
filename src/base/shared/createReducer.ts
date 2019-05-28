import { Action } from 'redux';

export function createReducer<T, ActionHandler>(initialState: T, actionHandler: ActionHandler) {
  return (state = initialState, action: Action): T => {
    const { type } = action;
    // FIXME actionHandler[type];
    const handler = actionHandler[type];

    if (!handler) return state;

    state = handler(state, action);

    return state;
  };
}
