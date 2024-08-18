import React from 'react';

import styles from './Container.module.css';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.main}>{children}</div>;
};
