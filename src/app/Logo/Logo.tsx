import React from 'react';
import shoppingCartLogo from '../../assets/shopping-cart.svg';
import s from '../../app/App.module.sass';

const Logo = () => {
  return <img src={shoppingCartLogo} className={s['app__logo']} alt="logo" />;
};

export default Logo;
