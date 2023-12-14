import React from 'react';
import { ThemeProvider } from '../../theming/ThemeProvider';
import { LocalizationInitiator } from '../../localization/LocalizationInitiator';
import { Layout } from '../Layout';
import { Header } from '../Header';

/**
 * Основной компонент приложения,
 * который включает в себя все остальные
 */
function App() {
  return (
    <ThemeProvider>
      <LocalizationInitiator />
      <Layout>
        <Header />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
