import React from 'react';
import './header.css';
import { Logo } from '../logo';
import { Menu } from '../menu';

import imageFile from './../logo/logo.svg';

interface headerProps {
  /** Список пунктов меню в хедере */
  menuList?: Array<{ name: string }>;
}

/**
 * Компонент Header
 */
export const Header = ({ menuList }: headerProps) => (
  <header className="header header-pos-fixed">
    <Logo pathImage={imageFile} />
    <Menu menuList={menuList} />
  </header>
);
