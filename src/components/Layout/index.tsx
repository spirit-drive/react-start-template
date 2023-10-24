import React, { ReactNode } from 'react';
import Header from './Header';

import s from './index.module.scss';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={s.layout}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
