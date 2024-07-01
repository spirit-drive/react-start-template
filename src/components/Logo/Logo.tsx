import React from 'react';
import clsx from 'clsx';
import classNames from './Logo.module.css';
import logo from '../../assets/logo.svg';

export const Logo = ({ title = 'store' }) => {
  return (
    <a href="/" className={clsx(classNames.logo)}>
      <img src={logo} />
      <h1>{title}</h1>
    </a>
  );
};

export default Logo;
