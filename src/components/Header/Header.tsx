import React from 'react';
import clsx from 'clsx';
import classNames from './Header.module.css';
import Logo from '../Logo/Logo';

window.addEventListener("scroll", function () {
    document.getElementById("header-nav").classList.toggle("header-scroll", window.scrollY > 135);
    console.log('scroll', this.window.scrollY)
});

const Header = () => {
  return (
    <header  id="header-nav" className={clsx(classNames.header)}>
      <Logo />      
    </header>
  );
};

export default Header;
