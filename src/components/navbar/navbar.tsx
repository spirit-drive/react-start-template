import React, {FC} from 'react';
import { Logo } from '../logo/logo';
import './navbar.css';

export interface navbarProps {
  prop?: string;
}

export const Navbar: FC = ({prop = 'Учет доходов-расходов'}: navbarProps) => {
  return <div className = "navbar">
    <Logo />
    {prop}
    </div>;
}
