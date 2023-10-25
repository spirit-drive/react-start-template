import React from 'react';
import './layout.css';

interface LayoutProps {
  /** Контент */
  children: React.ReactElement;
}

/**
 * Компонент Layout
 */
export const Layout = ({ children }: LayoutProps) => <main className="storybook-layout">{children}</main>;
