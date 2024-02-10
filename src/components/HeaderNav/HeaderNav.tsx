import React, { FC } from 'react';
import styles from './HeaderNav.module.scss';

export type HeaderNavProps = {
  navItems: Array<string>;
};

export const HeaderNav: FC<HeaderNavProps> = ({ navItems }) => {
  return (
    <nav className={`${styles.nav}`}>
      {navItems.map((navItem, index) => (
        <span className={`${styles.navItem}`} key={index}>
          {navItem}
        </span>
      ))}
    </nav>
  );
};
