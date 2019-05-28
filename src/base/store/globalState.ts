const setGlobalState = (initialState: any, models: any): any =>
  models.default.modelIndex.map((model: any): any => model.setInitialState(initialState));

export default setGlobalState;
