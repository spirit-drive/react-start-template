import React from 'react';
import ReactDOM from 'react-dom/client';
import './js/bootstrap.bundle.min.js';
import './index.scss';
import App from './app/App';
import { store } from './app/redux/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
