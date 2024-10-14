import React from 'react';
import './i18n/config';
import './App.css';
import '../UI/Form/form.css';
import { Context, defaultContext, EThemeVariables, IContext } from './Context';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { Profile } from './pages/Profile';
import { Sign } from './pages/Sign';
import { Btn, Collapse, Layout, Modal, ModalForm, ShortCard, Tooltip } from '../UI';
// Интерфейсы экспортируются отдельно
import { IShortCard } from '../UI/ShortCard/ShortCard';
import { createPortal } from 'react-dom';
import { defaultCards } from './data';
import { randomNumberGenerator, newCardGenerator } from '../features';

export const App = (): React.ReactElement => {
  const [contextValue, setContextValue] = React.useState<IContext>(defaultContext);
  const [isCollapseOpened, setIsCollapseOpened] = React.useState<boolean>(false);

  const { theme, lang } = contextValue;

  const themeSwitchHandler = (): void => {
    if (theme === 'light') {
      setContextValue({ ...contextValue, theme: EThemeVariables.DARK });
    } else setContextValue({ ...contextValue, theme: EThemeVariables.LIGHT });
  };

  return (
    <Context.Provider value={{ theme, lang, themeSwitchHandler }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sign />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
};
