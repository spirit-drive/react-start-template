import React, { FC } from 'react';
import cn from 'clsx';
import './button.css';

interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string | null;
  size?: string;
  label: string;
  onClick: () => void;
}
/**
 * Primary UI component for user interaction
 */

export const Button: FC<ButtonProps> = ({ primary, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

  return (
    <button type="button" className={cn('storybook-button', `storybook-button--${size}`, mode)} {...props}>
      {label}
    </button>
  );
};
