import React from 'react';
import Logo from '../Logo/Logo';
import s from '../../app/App.module.sass';

const Header = () => {
  return (
    <header className={s['app__header']}>
      <Logo />
      <h3>Super store</h3>
    </header>
  );
};

export default Header;
