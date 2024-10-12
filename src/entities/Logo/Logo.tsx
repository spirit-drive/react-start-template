import React from 'react';
import shoppingCartLogo from '../../assets/shopping-cart.svg';
import s from './Logo.module.sass';

const Logo = () => {
  return <img src={shoppingCartLogo} className={s['logo']} alt="logo" />;
};

export default Logo;
