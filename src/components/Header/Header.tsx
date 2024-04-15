import clsx from 'clsx';
import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import { useLogin } from '../../helper/useLogin';
import { useTheme } from '../../helper/useTheme';
import { removeToken } from '../../store/tokenSlice';
import DefaultButton from '../Buttons/DefaultButton';
import LanguageSwitch from '../LanguageSwitch/LanguageSwitch';
import Logo from '../Logo/Logo';
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch';
import classNames from './Header.module.css';

const Header: FC = () => {
  const { theme } = useTheme();
  const { isLogin, toggleIsLogin } = useLogin();
  const themeClass = `header-${theme}`;
  const dispatch = useDispatch();

  const signOut = () => {
    toggleIsLogin();
    dispatch(removeToken());
  };

  return (
    <header className={clsx(classNames[themeClass], classNames.headerGeneral)}>
      <Logo />
      <Navbar />
      <ThemeSwitch />
      <LanguageSwitch />
      {isLogin ? <DefaultButton callback={signOut}>Выйти</DefaultButton> : null}
    </header>
  );
};

export default Header;
