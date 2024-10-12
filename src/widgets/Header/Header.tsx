import React from 'react';
import Logo from '../../entities/Logo/Logo';
import s from './Header.module.sass';
import { ThemeSwitcher } from 'src/features/ThemeSwitcher';
import { LangSwitcher } from 'src/features/LangSwitcher';

const Header = () => {
  return (
    <header className={s.header}>
      <Logo />
      <h3>Super store</h3>
      <div className={s.headerspace} />
      <div className={s.icons}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </header>
  );
};

export default Header;
