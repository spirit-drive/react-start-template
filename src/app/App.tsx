import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../shared/i18n';
import AppRouter from "src/app/routes/AppRouter";
import {Layout} from "src/shared/components/Layout";

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      {/*<ThemeProvider>*/}
        <Layout>
          <AppRouter />
        </Layout>
      {/*</ThemeProvider>*/}
    </I18nextProvider>
  );
}

export default App;
