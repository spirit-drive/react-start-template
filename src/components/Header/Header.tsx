import React, {FC} from 'react';
import cn from "clsx";
import "./Header.scss"
import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";

export const Header:FC = () => {

    return (
        <header className={cn('header')}>
            <div className="header__inner">
                <Logo />
                <Navigation />
            </div>
        </header>
    );
};