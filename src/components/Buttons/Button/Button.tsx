import React, { FC, ReactNode, ButtonHTMLAttributes } from 'react';
import cn from 'classnames';
import './Button.scss';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'info' | 'disabled';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth,
  size,
  className,
  disabled,
  ...anyProps
}) => {
  const buttonClass = cn('button', variant, className, fullWidth && 'w-100', size);

  return (
    <button className={buttonClass} {...anyProps}>
      {children}
    </button>
  );
};
