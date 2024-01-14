import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeContext } from 'src/helper/contexts';
import { ThemeProvider } from 'src/helper/useTheme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
