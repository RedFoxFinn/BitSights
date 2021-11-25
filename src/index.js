import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import { getColor, getColorWithAlpha } from './styles/colors';

ReactDOM.render(
  <React.StrictMode>
    <section>
      <h1 style={{color: getColorWithAlpha('info', 0.5)}} >Kvaak kvaak, Bitcoin, kvaak kvaak</h1>
    </section>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
