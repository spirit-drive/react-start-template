import React, { FC, ReactElement } from 'react';
import './Logo.scss';

interface ILogo {
  /**
   * Текстовый заголовок логотипа
   */
  title: string;
}

/**
 * Компонент Logo. Презентационный компонент, сделайте любой на свой вкус, можно использовать и просто круг, главное обозначить его место в хедере.
 */
export const Logo: FC<ILogo> = ({ title = 'E-Shop' }): ReactElement => {
  return <a className="header-logo h1">{title}</a>;
};
