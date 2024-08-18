import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/index.css';
import App from './app/App';
import { Theme } from './app/providers/theme-provider';
import 'src/app/i18n';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
