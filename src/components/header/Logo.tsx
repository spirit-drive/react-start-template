import React from 'react';
import logo from './logo.svg';
import cn from 'clsx';
import './header.css';

const Logo: React.FC = () => {
  return (
    <div className={cn('logo')}>
      <img src={logo} alt={'logo'} />
    </div>
  );
};

export default Logo;
