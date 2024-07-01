import React from 'react';
import s from './Header.module.sass';
import Logo from '@/shared/ui/logo/Logo';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <Logo />
    </header>
  );
};

export default Header;
