import React from 'react';
import clsx from 'clsx';
import classNames from './Layout.module.css';

export const Layout = ({children}) => {
  return (   
      <div className={clsx(classNames.layout)}>
      {children}
      </div>   
  );
};
