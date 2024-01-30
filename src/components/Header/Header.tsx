import React, { FC } from 'react';
import classNames from './Header.module.css';
import clsx from 'clsx';
import Logo from '../Logo/Logo';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { useTheme } from '../../helper/useTheme';

const Header: FC = () => {
  const { theme } = useTheme();
  const themeClass = `header-${theme}`;
  return (
    <header className={clsx(classNames[themeClass], classNames.headerGeneral)}>
      <Logo />
      <ThemeSwitch />
      <LanguageSwitch />
    </header>
  );
};

export default Header;
