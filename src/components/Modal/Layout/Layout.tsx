import React from 'react';
import { Header } from '../Header/Header';

interface LayoutProps {
  logo: string;
}

export const Layout = ({ logo }: LayoutProps) => {
  return (
    <div className="layout">
      <Header logo={logo} />
    </div>
  );
};
