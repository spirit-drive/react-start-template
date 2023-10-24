import React from 'react';
import Logo from '../../Logo';
import ThemeToggle from './ThemeToggle';

import s from './index.module.scss';
import LocalizationToggle from './LocalizationToggle';

const Header = () => {
  return (
    <div className={s.header}>
      <Logo />
      <div className={s.header__controls}>
        <LocalizationToggle />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
