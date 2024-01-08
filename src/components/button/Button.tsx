import React, { FC } from 'react';
import cn from 'clsx';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: string;
  label: string;
  func: Function;
}

export const Button: FC<ButtonProps> = ({ primary, backgroundColor, size, label, func, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  const onClick = () => {
    func();
  };

  return (
    <button
      type="button"
      className={cn('storybook-button', `storybook-button--${size}`, mode)}
      style={{ backgroundColor: backgroundColor || 'green' }}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
