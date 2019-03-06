import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { createBrowserHistory } from "history";
import rootReducer from "./reducers";

const initialState: {} = {};
const history = createBrowserHistory();

let middlewares = [thunkMiddleware, routerMiddleware(history)];
const enchancers: any[] = [];

if (process.env.NODE_ENV === "development") {
  const reduxImmutableStateInvariant = require("redux-immutable-state-invariant").default();
  const logger = createLogger({
    collapsed: true
  });

  enchancers.push(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  middlewares = [...middlewares, reduxImmutableStateInvariant, logger];
}

const reducers = combineReducers({
  router: connectRouter(history),
  ...rootReducer
} as any);

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middlewares),
    ...enchancers
  )
);

if (module.hot) {
  module.hot.accept(
    "./reducers",
    (): void => {
      store.replaceReducer(require("./reducers"));
    }
  );
}

export default {
  store,
  history
};
