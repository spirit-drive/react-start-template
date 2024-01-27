import React from 'react';
import styles from './styles.module.css';
import Logo from '../Logo/Logo';

const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <Logo />
    </div>
  );
};

export default Header;
