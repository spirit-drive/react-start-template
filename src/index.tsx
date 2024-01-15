import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from 'src/helper/useTheme';
import { LanguageProvider } from 'src/helper/useLanguage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <LanguageProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </LanguageProvider>
);
