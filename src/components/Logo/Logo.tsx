import React, { FC } from 'react';
import classNames from './Logo.module.css';
import clsx from 'clsx';
import logo from '../../assets/logo.png';

const Logo: FC = () => {
  return (
    <div className={clsx(classNames.logo)}>
      <img src={logo} />
    </div>
  );
};

export default Logo;
