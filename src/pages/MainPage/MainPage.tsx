import React from "react"
import { Layout } from "../../shared/Layout"
import { t } from "i18next"
import s from './MainPage.module.sass';

export const MainPage = () => {

    return (
        <Layout>
            <div className={s.containerColumn}>
                Основная страница
            </div>
        </Layout>
    )
}