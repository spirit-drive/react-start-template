import React, { FC } from 'react';
import classNames from './Header.module.css';
import clsx from 'clsx';
import Logo from 'src/components/Logo/Logo';
import ThemeSwitch from 'src/components/ThemeSwitch/ThemeSwitch';
import LanguageSwitch from 'src/components/LanguageSwitch/LanguageSwitch';
import { useTheme } from 'src/helper/useTheme';

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
