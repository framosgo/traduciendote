export const AppModel = {
  lang: navigator.language
};

export const setInitialState = (initialState = {}) => ({
  ...AppModel,
  ...initialState
});
