// import 'babel-polyfill';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";
import App from "./App";
import "./index.scss";

const MOUNT_NODE = document.querySelector("#root") as HTMLElement;

const render = () => {
  ReactDOM.render(
    <Provider store={configureStore.store}>
      <ConnectedRouter history={configureStore.history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE
  );
};

render();
