import React from "react"
import { Layout } from "../../shared/Layout"
import s from './AccessDeniedPage.module.sass'

export const AccessDeniedPage = () => {
    return (
        <Layout>
            <div className={s.containerColumn}>
                <div className={s.colorRed}>
                    У вас недостататочно прав для доступа к данному функционалу
                </div>
            </div>
        </Layout>
    )
}