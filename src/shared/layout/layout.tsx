import React, { FC } from 'react';
import cn from 'clsx';
import './layout.css';
import Header from '../header/header';

export interface LayoutProps {

};


/**
 * Layout component
 */
const Layout: FC<LayoutProps> = () => {
  return (
    <div className={cn('layout')}>
        <Header />
        <div className={cn('content')}>
          <div className={cn('content', 'left-side')}></div>
          <div className={cn('content', 'center')}></div>
        </div>

        <div className={cn('footer')}></div>
    </div>
  );
};

export default Layout;