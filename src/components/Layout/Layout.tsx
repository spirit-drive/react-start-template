import React, { ReactElement, ReactNode } from 'react';
import style from './Layout.module.sass';
import cn from 'clsx';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

type LayoutProps = {
  children?: ReactNode;
  className?: string;
};

export function Layout({ className, children }: LayoutProps): ReactElement {
  return (
    <div className={cn(style.root, className)}>
      <Header />
      <main className={style.content}>{children}</main>
      <Footer className={style.footer} />
    </div>
  );
}
