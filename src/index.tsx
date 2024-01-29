import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './components/layout/layout';
import "./i18n/config";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
