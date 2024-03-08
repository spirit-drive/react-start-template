import React from 'react';
import * as styles from './Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
      LOGO
      <div className={styles.logoVector} />
    </div>
  );
};
