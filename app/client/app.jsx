import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import { injectGlobal } from 'styled-components';
import WebFont from 'webfontloader';
import webFontConfig from './configs/webfonts';
import Routes from './views/routes';
import configureStore from './state/store';
import colors from './views/constants/colors';

/* eslint-disable no-unused-expressions */
injectGlobal`
  body {
    margin: 0;
    background: ${colors.background};
  }

  * {
    box-sizing: border-box;
  }

  #app {
    height: 100%
  }
`;
/* eslint-enable no-unused-expressions */

const store = configureStore();
const history = createHistory();

WebFont.load(webFontConfig);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
