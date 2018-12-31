import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import configureStore from './store/configureStore';
import App from './App';
import './index.scss';

const MOUNT_NODE = document.querySelector('#root');

const store = configureStore.store;
const history = configureStore.history;

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    MOUNT_NODE,
  );
};

render();
