import React, { ReactElement, ReactNode } from 'react';
import style from './App.module.sass';
import cn from 'clsx';

type AppProps = {
  children?: ReactNode;
  className?: string;
};

export function App({ children, className }: AppProps): ReactElement {
  return <div className={cn(style.root, className)}>{children}</div>;
}
