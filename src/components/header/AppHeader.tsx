import React from 'react';
import Logo from './Logo';
import cn from 'clsx';
import './header.css';

const AppHeader: React.FC = () => {
  return (
    <header className={cn('header')}>
      <nav className={cn('nav')}>
        <div>
          <Logo />
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
