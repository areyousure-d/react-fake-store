import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import { ProvideAuth } from './hooks';
import App from './components/app';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProvideAuth>
        <Router basename="/">
          <App />
        </Router>
      </ProvideAuth>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

