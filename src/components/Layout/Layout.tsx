import React, { FC, ReactElement } from 'react';
import './Layout.scss';

interface ILayout {
  children?: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children }): ReactElement => {
  return <div className="layout">{children}</div>;
};
