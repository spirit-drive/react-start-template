import React from 'react';
import './Header.module.scss';
import { Logo } from '../Logo';

export const Header: React.FC = (): React.ReactElement => {
  return (
    <div className="header">
      <Logo />
    </div>
  );
};
