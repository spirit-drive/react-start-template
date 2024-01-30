import React, {FC, useContext} from 'react'
import "./ThemeSwitcher.scss"
import {ThemeContext} from "../../providers/ThemeProvider";
import IconSun from "./sun.svg"
import IconMoon from "./moon.svg"

export const ThemeSwitcher: FC = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div className="theme-switch">
            <input className="theme-switch__checkbox" type="checkbox" checked={theme !== 'light'} readOnly/>
            <div className="theme-switch__container" onClick={toggleTheme}>
                <div className="theme-switch__slider"><span>{theme === 'light' ? <IconSun/> : <IconMoon/>}</span></div>
            </div>
        </div>
    );
};