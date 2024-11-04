import React from "react"
import { Icon } from "../Logo/components/Icon"
import s from './Header.module.sass'
import { ThemeSwitcher } from "../ThemeSwitcher"
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from "../LangSwitcher";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/slices/authAndProfile";
import { logOutAction } from "../../store/slices/saga/logOutSaga";
import { cleanCart } from "../../store/slices/productInCartSlice";

export const Header = () => {
    const dispatch = useDispatch();
    const email = useAppSelector(state => state.authAndProfile.profile.email);
    const token = useAppSelector(state => state.authAndProfile.auth.token);
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className={s.header}>
            <div className={s.headerLoginInfoContainer} >
                {email ?
                    <div className={s.containerDivRow}>
                        {`Добро пожаловать: ${email}`}
                        <button type="button"
                            onClick={() => {
                                dispatch(cleanCart());
                                dispatch(logOutAction());
                                navigate('/');
                            }}
                        >{'Выйти'}</button>
                    </div>
                    :
                    <div className={s.containerDivRow}>
                        {'Добро пожаловать: Гость'}
                        <button type="button" onClick={() => navigate('/profile')} >{'Войти'}</button>
                    </div>
                }
            </div>

            <NavLink style={({ isActive }) => { return isActive ? { color: "blue" } : {} }} to="/">
                {t('shared.header.productPage')}
            </NavLink >

            <NavLink style={({ isActive }) => { return isActive ? { color: "blue" } : {} }} to="/cart">
                {t('shared.header.cartPage')}
            </NavLink >

            <NavLink style={({ isActive }) => { return isActive ? { color: "blue" } : {} }} to="/profile">
                {t('shared.header.profilePage')}
            </NavLink >

            <NavLink style={({ isActive }) => { return isActive ? { color: "blue" } : {} }} to="/product_edit_admin">
                {t('shared.header.editProduct')}
            </NavLink >

            {token == '' &&
                <NavLink style={({ isActive }) => { return isActive ? { color: "blue" } : {} }} to="/register_saga">
                    {t('shared.header.registerSagaPage')}
                </NavLink >
            }

            <LangSwitcher />
            <div>
                <ThemeSwitcher className={s.switcher} />
            </div>
            <div>
                <Icon />
            </div>
        </div >

    )
}