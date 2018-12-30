import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import * as rootReducers from './reducers';

declare global {
  interface Window {
    devToolsExtension: any;
  }
}

export default (history, initialState: object = {}) => {
  const imSt = require('redux-immutable-state-invariant').default();
  let middlewares = [thunkMiddleware, routerMiddleware(history)];
  let enchancers: any[] = [];

  if (process.env.NODE_ENV === 'development') {
    const reduxImmutableStateInvariant = imSt;
    const logger = createLogger({ collapsed: true });

    middlewares = [...middlewares, reduxImmutableStateInvariant, logger];

    const { devToolsExtension } = window;
    if (typeof devToolsExtension === 'function') {
      enchancers.push(devToolsExtension());
    }
  }

  const reducers = combineReducers({
      router: connectRouter(history),
      ...rootReducers
  });

  const store = createStore(reducers, initialState, compose(applyMiddleware(...middlewares), ...enchancers));

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducers());
    });
  }

  return store;
};
