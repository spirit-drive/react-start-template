import React from 'react';
import clsx from 'clsx';

import './layout.css';
import { Header } from '../Header/Header';
import { Context } from '../../app/Context';

interface LayoutProps {
  children: React.ReactFragment | React.ReactElement;
}

/**
 * Компонент "Лейаут"
 */
export const Layout = ({ children }: LayoutProps): React.ReactElement => {
  const { theme } = React.useContext(Context);

  return (
    <main className={clsx('layout', theme === 'dark' && 'layout_dark')}>
      <Header isDark={theme === 'dark'} />
      <div className="layout__content">{children}</div>
    </main>
  );
};
