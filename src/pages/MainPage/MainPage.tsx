import React from "react"
import { Layout } from "../../shared/Layout"
import { t } from "i18next"
import { NavLink } from "react-router-dom"
import s from './MainPage.module.sass';

export const MainPage = () => {

    return (
        <Layout>
            <div className={s.containerColumn}>
                <NavLink style={({ isActive }) => { return isActive ? { color: "blue" } : {} }} to="/register_func">
                    {t('shared.header.registerFuncPage')}
                </NavLink >
                <NavLink style={({ isActive }) => { return isActive ? { color: "blue" } : {} }} to="/register_saga">
                    {t('shared.header.registerSagaPage')}
                </NavLink >
            </div>
        </Layout>
    )
}