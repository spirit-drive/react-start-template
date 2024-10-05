import React from "react"
import { Layout } from "../../shared/Layout"
import { useAppSelector } from "../../store/hooks"
import s from './ProfilePage.module.sass'

export const ProfilePage = () => {
    const profile = useAppSelector(state => state.authAndProfile.profile)

    return (
        <Layout>
            <div className={s.containerColumn}>
                <div>
                    Профиль пользователя
                </div>

                <div className={s.containerRow}>
                    <div>Логин:</div>
                    {profile.userName}
                </div>

                <div className={s.containerRow}>
                    <div>Адрес:</div>
                    {profile.address}
                </div>

                <div className={s.containerRow}>
                    <div>Телефон:</div>
                    {profile.phone}
                </div>

                <div className={s.containerRow}>
                    <div>Роль в системе:</div>
                    {profile.role}
                </div>

            </div>
        </Layout>
    )
}