import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { LanguageProvider } from './helper/useLanguage';
import { LoginProvider } from './helper/useLogin';
import { StoreProvider } from './helper/useStore';
import { ThemeProvider } from './helper/useTheme';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <StoreProvider>
    <LanguageProvider>
      <ThemeProvider>
        <LoginProvider>
          <App />
        </LoginProvider>
      </ThemeProvider>
    </LanguageProvider>
  </StoreProvider>
);
