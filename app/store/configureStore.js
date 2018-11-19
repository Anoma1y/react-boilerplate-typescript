import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers';

export default (history, initialState) => {
  const imSt = require('redux-immutable-state-invariant').default();
  let middlewares = [thunkMiddleware, routerMiddleware(history)];
  let enchancers = [];

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
  store.injectedReducers = {};

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(rootReducers(store.injectedReducers));
    });
  }

  return store;
};
