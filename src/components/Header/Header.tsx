import React, { FC } from 'react';
import classNames from './Header.module.css';
import clsx from 'clsx';
import Logo from '../Logo/Logo';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import { useTheme } from '../../helper/useTheme';
import DefaultButton from '../Buttons/DefaultButton';
import { useLogin } from '../../helper/useLogin';

const Header: FC = () => {
  const { theme } = useTheme();
  const { isLogin, toggleIsLogin } = useLogin();
  const themeClass = `header-${theme}`;

  return (
    <header className={clsx(classNames[themeClass], classNames.headerGeneral)}>
      <Logo />
      <ThemeSwitch />
      <LanguageSwitch />
      {isLogin ? <DefaultButton callback={toggleIsLogin}>SignOut</DefaultButton> : null}
    </header>
  );
};

export default Header;
