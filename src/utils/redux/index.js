export const bindPromiseWithDispatch = (dispatch) => (actionCreator) => (payload) =>
  new Promise((resolve, reject) => dispatch(actionCreator(payload, { resolve, reject })));
