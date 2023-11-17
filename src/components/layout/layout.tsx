import React from 'react';
import cn from 'clsx';
import './layout.css';
import { Context } from './../../App';

interface LayoutProps {
  /** Контент */
  children: React.ReactElement;
  className?: string;
}

/**
 * Компонент Layout
 */
export const Layout = ({ children, className }: LayoutProps): React.ReactElement => {
  const { themesName } = React.useContext(Context);

  return <main className={cn('storybook-layout', className, themesName)}>{children}</main>;
};
