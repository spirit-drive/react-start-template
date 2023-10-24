import React from 'react';
import Layout from './components/Layout';
import OperationSummary from './components/OperationSummary';
import OperationView from './components/OperationView';
import { Category } from './types';
import { ThemeProvider } from './theming';
import { LocalizationProvider } from './localization';
import ModalWithControls from './components/ModalWithControls';

function App() {
  return (
    <ThemeProvider>
      <LocalizationProvider>
        <Layout>
          <ModalWithControls />
          <OperationSummary
            amount={50.0}
            category={Category.sales}
            title="Покупка продуктов"
            description="Покупка продуктов в местном супермаркете."
          />
          <OperationView
            amount={100.0}
            category={Category.marketing}
            title="Покупка продуктов"
            description="Покупка продуктов в местном супермаркете."
            date={new Date(2023, 8, 30)}
          />
          <OperationView
            amount={100.0}
            category={Category.marketing}
            title="Покупка продуктов"
            description="Покупка продуктов в местном супермаркете."
            date={new Date(2023, 8, 30)}
          />
          <OperationView
            amount={100.0}
            category={Category.marketing}
            title="Покупка продуктов"
            description="Покупка продуктов в местном супермаркете."
            date={new Date(2023, 8, 30)}
          />
          <OperationView
            amount={100.0}
            category={Category.marketing}
            title="Покупка продуктов"
            description="Покупка продуктов в местном супермаркете."
            date={new Date(2023, 8, 30)}
          />
          <OperationView
            amount={100.0}
            category={Category.marketing}
            title="Покупка продуктов"
            description="Покупка продуктов в местном супермаркете."
            date={new Date(2023, 8, 30)}
          />
        </Layout>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
