import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const MOUNT_NODE = document.querySelector('#root');

const render = () => {
  ReactDOM.render(
    <div>
      Hello World!
    </div>,
    MOUNT_NODE
  );
};

render();

