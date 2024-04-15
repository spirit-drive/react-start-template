import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { LanguageProvider } from './helper/useLanguage';
import { LoginProvider } from './helper/useLogin';
import { StoreProvider } from './helper/useStore';
import { ThemeProvider } from './helper/useTheme';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { ModalProvider } from './helper/useModalCreateProduct';
import { store } from './store/store'
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <Provider store={store}>
    <BrowserRouter>
        <ModalProvider>
          <StoreProvider>
            <LanguageProvider>
              <ThemeProvider>
                <LoginProvider>
                  <App />
                </LoginProvider>
              </ThemeProvider>
            </LanguageProvider>
          </StoreProvider>
        </ModalProvider>
      </BrowserRouter>
  </Provider>
  
);
