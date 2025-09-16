import React, { FC } from 'react';
import cn from 'clsx';
import './header.css';
import Logo from '../logo/logo';

export interface HeaderProps {

};


/**
 * Header component
 */
const Header: FC<HeaderProps> = () => {
  return (
    <header className={cn('header')}>
      <div>
        <Logo size={25} />
      </div>
    </header>
  );
};

export default Header;