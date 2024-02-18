import React, { FC } from 'react';
import * as styles from './styles.module.scss';
import { Logo } from '../Logo/Logo';
import { Button } from '../Button/Button';

interface HeaderProps {
  size?: string;
}


export const Header: FC<HeaderProps> = ({ size, ...props }) => {

  return (
    <header>
      <div className={styles.storybookHeader}>
        <div>
          <Logo/>
          <h1>Antoneus Project</h1>
        </div>
        <div>
          <>
            <span className={styles.welcome}>
              Welcome!
            </span>
            <Button size="small"  label="Log out" />
          </>
        </div>
      </div>
    </header>
  );
};
