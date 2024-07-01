import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default Layout;
