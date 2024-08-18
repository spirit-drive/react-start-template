import React from 'react';
import styles from './Header.module.css';
import Logo from 'src/shared/logo/Logo';
import { Container } from 'src/shared/container/Container';
import { ChangeLanguage } from 'src/features/change-language';
import { ThemeToggler } from 'src/features/theme-toggler';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <div>
            <ChangeLanguage />
            <ThemeToggler />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
