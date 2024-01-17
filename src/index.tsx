import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './helper/useTheme';
import { LanguageProvider } from './helper/useLanguage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <LanguageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LanguageProvider>
);
