import React from 'react';
import { LocalizationInitiator } from '../../localization/LocalizationInitiator';
import { Layout } from '../Layout';
import { Header } from '../Header';

/**
 * Основной компонент приложения,
 * который включает в себя все остальные
 */
function App() {
  return (
    <>
      <LocalizationInitiator />
      <Layout>
        <Header />
      </Layout>
    </>
  );
}

export default App;
