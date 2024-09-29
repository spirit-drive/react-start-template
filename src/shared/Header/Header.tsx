import React from "react"
import { Icon } from "../Logo/components/Icon"
import s from './Header.module.sass'
import { ThemeSwitcher } from "../ThemeSwitcher"
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from "../LangSwitcher";
import { NavLink } from "react-router-dom";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <div className={s.header}>

            <NavLink style={({isActive}) => {return isActive ? {color: "blue"} : {}}}  to="/">
                {t('shared.header.mainPage')}
            </NavLink >

            <NavLink style={({isActive}) => {return isActive ? {color: "blue"} : {}}}  to="/product">
                {t('shared.header.productPage')}
            </NavLink >

            <NavLink style={({isActive}) => {return isActive ? {color: "blue"} : {}}}  to="/cart">
                {t('shared.header.cartPage')}
            </NavLink >

            <NavLink style={({isActive}) => {return isActive ? {color: "blue"} : {}}}  to="/profile">
                {t('shared.header.profilePage')}
            </NavLink >

            <LangSwitcher />
            <div>
                <ThemeSwitcher className={s.switcher} />
            </div>
            <div>
                <Icon />
            </div>
        </div>
    )
}