import React from 'react';
import Logo from './Logo';
import cn from 'clsx';
import './header.css';

const AppHeader: React.FC = () => {
  return (
    <header className={cn('header')}>
      <div>
        <div>
          <nav className={cn('nav')}>
            <div>
              <Logo />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
