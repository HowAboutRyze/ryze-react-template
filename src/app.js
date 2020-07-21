import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Index from './index.jsx';

ReactDOM.render(
  EASY_ENV_IS_DEV ? <AppContainer><Index /></AppContainer> : <Index />,
  document.getElementById('app')
);
if (EASY_ENV_IS_DEV && module.hot) {
  module.hot.accept();
}
