import React from 'react';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo_block}>
      <div className={styles.logo} />
      <div>My Site</div>
    </div>
  );
};

export default Logo;
