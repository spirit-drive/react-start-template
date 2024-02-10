import React from 'react';
import styles from './Header.module.scss';
import { Logo } from '../logo/Logo';
import { HeaderNav } from '../HeaderNav/HeaderNav';
import { useTheme } from '../context/ThemeContext';
import { ThemeControlsButton } from '../ThemeControlsButton/ThemeControlsButton';
import { useLanguage } from '../context/LanguageContext';
import { LanguageConponent } from '../LanguageConponent/LanguageConponent';
import { LanguageControllerButton } from '../../controllers/LanguageController/LanguageControllerButton';

export const Header = () => {
  const { state, dispatch } = useTheme();

  const { stateLang, dispatchLang } = useLanguage();
  const navItems = ['navItem 1', 'navItem 2', 'navItem 3', 'navItem 4'];
  return (
    <div className={`${styles.header} ${state.theme == 'light' ? '' : styles.darck}`}>
      <div className={`container ${styles.container} `}>
        <Logo type="header" />
        <HeaderNav navItems={navItems} />
        <LanguageControllerButton handler={dispatchLang} Language={stateLang} />

        <ThemeControlsButton handler={dispatch} themeType={state} />
      </div>
      <LanguageConponent theme={state.theme} />
    </div>
  );
};
