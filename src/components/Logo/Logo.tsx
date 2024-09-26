import React, { FC, ReactElement } from 'react';
import './Logo.scss';
import logo from '../../assets/logo.svg';

interface ILogo {
  title: string;
}

export const Logo: FC<ILogo> = ({ title = 'store' }): ReactElement => {
  return (
    <a href="/" className="logo">
      <img src={logo} />
      <h2>{title}</h2>
    </a>
  );
};
