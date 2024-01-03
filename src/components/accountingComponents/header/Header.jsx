import React from "react";
import { Button } from "../button/Button";
import './header.css'

export const Header = ()=>{

    return(
        <header className="header">
            <div className="container">
                <div className="header__container">
                <div className="header__logo">
                    site-logo
                </div>
                <ul className="header__nav">
                    <li className="header__nav-item">item 1</li>
                    <li className="header__nav-item">item 2</li>
                    <li className="header__nav-item">item 3</li>
                </ul>

                <Button
                position='header-button'>
                    Йа кнопко в шапке
                </Button>
                </div>

            </div>
       </header>
    )
};
