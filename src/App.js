import React from 'react'
import ReactDOM from 'react-dom';
import Main from './main.jsx'
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <Main />,
  document.getElementById('App')
);
serviceWorker.unregister();



