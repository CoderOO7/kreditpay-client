import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index';
import rootSagas from './sagas/index';

const saga = createSagaMiddleware();
const middleWares = [saga, thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
  middleWares.push(logger);
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleWares)
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

saga.run(rootSagas);

export default store;
