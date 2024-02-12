import React, { FC } from 'react';
import * as styles from './styles.module.scss';

interface ButtonProps {

  size?: string;
  label: string;
}

export const Button: FC<ButtonProps> = ({ size, label, ...props }) => {

  const onClick = () => {
    alert('Прощай!!!')
  };

  return (
    <div>
      <button
        type="button"
        className={styles.story}
        onClick={onClick}
        {...props}
      >
        {label}
      </button>
    </div>
  );
};
