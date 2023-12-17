import React, { ReactElement } from 'react';
import style from './Header.module.sass';
import cn from 'clsx';
import { Logo } from '@/components/Logo';

type HeaderProps = {
  className?: string;
};

export function Header({ className }: HeaderProps): ReactElement {
  return (
    <div className={cn(style.root, className)}>
      <Logo width={230} />
    </div>
  );
}
