import React, { HtmlHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import s from './index.module.scss';

export enum ButtonVariant {
  'primary' = 'primary',
}

interface Props extends HtmlHTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant.primary;
  children: ReactNode;
}

export const Button: React.FC<Props> = ({ variant, children, className, ...props }) => {
  if (children === 'ru') {
    console.log(variant, s);
  }

  return (
    <button className={clsx(className, s.button, s[`button-${variant}`])} {...props}>
      {children}
    </button>
  );
};
