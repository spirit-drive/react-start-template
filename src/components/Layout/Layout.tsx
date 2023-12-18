import React, { FC, ReactElement } from 'react';
import './Layout.scss';

interface ILayout {
  /**
   * Внутреннее содержимое макета
   */
  children?: React.ReactNode;
}

/**
 * Компонент Layout. Это презентационный компонент, будет использован в навигации и содержит компонент Header
 */
export const Layout: FC<ILayout> = ({ children }): ReactElement => {
  return <div id="layout" className="layout">{children}</div>;
};
