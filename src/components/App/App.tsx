import React, { ReactElement } from 'react';
import { LocalizationInitiator } from '../../localization/LocalizationInitiator';
import { Layout } from '../Layout';
import { Header } from '../Header';

/**
 * Основной компонент приложения,
 * который включает в себя все остальные
 */
function App(): ReactElement {
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
