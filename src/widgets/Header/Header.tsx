import React from 'react';
import Logo from '../../entities/Logo/Logo';
import s from './Header.module.sass';
import { LocalizationSwitcher } from '../LocalizationSwitcher/LocalizationSwitcher';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  return (
    <header className={s['header']}>
      <Logo />
      <h3>Super store</h3>
      <div className={s['flexgrowdiv']} />
      <ThemeSwitcher />
      <LocalizationSwitcher />
    </header>
  );
};

export default Header;
