import React from 'react';
import * as styles from './SimpleButton.module.scss';

export const SimpleButton: React.FC = ({ text = 'Simple Button' }: { text?: string }) => {
  return <div className={styles.simpleButton}>{text}</div>;
};
