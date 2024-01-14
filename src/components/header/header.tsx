import React, {FC} from 'react';
import { Logo } from '../logo/logo';
import './header.css';

export interface headerProps {
  prop?: string;
}

export const Header: FC = ({prop = 'Учет доходов-расходов'}: headerProps) => {
  return <div className = "header">
    <Logo />
    {prop}
    </div>;
}
