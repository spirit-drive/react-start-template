import React, { Dispatch } from 'react';
import './App.css';
import { Header } from './components/header';
import { Layout } from './components/layout';
import { Budgets } from './components/budget';
import { useTranslation } from 'react-i18next';

export enum Themes {
  dark = 'dark',
  light = 'light',
}

type ThemeContext = {
  setThemeState: Dispatch<React.SetStateAction<Themes>>;
  themesName: string;
};

export const Context = React.createContext<ThemeContext>({
  setThemeState: () => Themes,
  themesName: 'light',
});

const data = [
  { id: 1, name: ['Зарплата', 'Основное', 'Аванс на работе', '2000$'] },
  { id: 2, name: ['Подработка', 'Временное', 'Продал колёса', '300$'] },
];

const App = () => {
  const [themesName, setThemeState] = React.useState<Themes>(Themes.light);
  const { t } = useTranslation();

  return (
    <Context.Provider value={{ setThemeState, themesName }}>
      <Header menuList={[{ name: t('menu_item_income') }, { name: t('menu_item_coast') }]} />

      <Layout className="mt-24">
        <Budgets type="Income" data={data} />
      </Layout>
    </Context.Provider>
  );
};

export default App;
