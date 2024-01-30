import React, {FC} from 'react';
import "./Header.scss"
import {Navigation} from "../Navigation/Navigation";
import {Logo} from "../Logo/Logo";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {LangSwitcher} from "../LangSwitcher/LangSwitcher";

export const Header:FC = () => {
    return (
        <header className='header'>
            <div className="header__inner">
                <Logo />
                <Navigation />
                <div>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>

            </div>
        </header>
    );
};