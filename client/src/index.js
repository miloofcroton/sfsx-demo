import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './views/app';
import store from './data/store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
