import React from 'react';
import styles from './styles.module.css';

export interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ size = 'md' }) => {
  return <div className={`${styles.logo} ${styles[size]}`} />;
};

export default Logo;
