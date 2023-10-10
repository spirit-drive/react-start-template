import React from 'react';
import './menu.css';

interface menuProps {
  /** Список пунктов меню */
  menuList?: Array<{ name: string }>;
}

/**
 * Компонент menu
 */
export const Menu = ({ menuList }: menuProps) => (
  <ul className="header-menu">
    {!!menuList &&
      menuList.map((item) => (
        <li className="header-menu-item" key={item.name}>
          <a href="#">{item.name}</a>
        </li>
      ))}
  </ul>
);
