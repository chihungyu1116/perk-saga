
import React from 'react';
import { render } from 'react-dom';
import GoogleAnalytics from 'react-ga';

import { Root } from 'containers';
import rootSaga from './sagas';
import getRoutes from './routes';
import { history } from './services';
import configureStore from './store/configureStore';
import config from './config';

const dest = document.getElementById('content');
const store = configureStore(history, window.__data); // eslint-disable-line

GoogleAnalytics.initialize(config.app.googleAnalytics.appId);

store.runSaga(rootSaga);

render(
  <Root
    store={store}
    history={history}
    routes={getRoutes(store)}
  />,
  dest
);
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger
}
window.onload = function () {
  // Create a new script node
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.onload = function onLoad() {
    script.onload = null;
  };
  script.innerHTML = `
    api_key: 75lgf19usra83t
    authorize: true
  `;
  script.src = '//platform.linkedin.com/in.js';
  (document.getElementsByTagName('head')[0]).appendChild(script);
};

// need to check if linkedin is loggedin
//
// window.onINLoad = function () {
//   console.log('On LinkedIn Load');
//   window.IN.Event.on(window.IN, 'auth', window.onINGetProfileData);
// };
// window.onINSuccess = function (data) {
//   console.log('success', data);
// };
// window.onINError = function (error) {
//   console.log('error', error);
// };
// window.onINGetProfileData = function () {
//   console.log('get!');
//   window.IN.API.Raw('/people/~').result(window.onINSuccess).error(window.onINError);
// };
