import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { store } from './controllers/redux/store';

import TheLayout from './components/layout';

import { APPID } from './tools/info';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <TheLayout id={APPID()}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
