import React from 'react';
import cn from "clsx";
import "./Header.scss"
import {Navigation} from "../Navigation/Navigation";

export const Header = ({children}) => {
    return (
        <header className={cn('header')}>
            <div className="header__inner">
                {children}
                <Navigation />
            </div>
        </header>
    );
};