import React, { ReactElement } from 'react';
import style from './Footer.module.sass';
import cn from 'clsx';

type FooterProps = {
  className?: string;
};

export function Footer({ className }: FooterProps): ReactElement {
  return (
    <div className={cn(style.root, className)}>
      <div>rostixman</div>
      <div>2023</div>
    </div>
  );
}
