import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from "./navbar.module.css"
import clsx from 'clsx';
import { useTheme } from '../../helper/useTheme';

const Navbar = () => {
  const { theme } = useTheme();
  const themeClass = `nav-${theme}`;

  return (
    <nav className={clsx(classNames.navGeneral)}>
      <NavLink className={clsx(classNames[themeClass])} to="/">Главная</NavLink>
      <NavLink className={clsx(classNames[themeClass])} to="/profile">Профиль</NavLink>
      <NavLink className={clsx(classNames[themeClass])} to="/basket">Корзина</NavLink>
    </nav>
  )
}

export default Navbar