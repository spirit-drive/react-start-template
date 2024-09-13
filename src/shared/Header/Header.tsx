import React from "react"
import { Icon } from "../Logo/components/Icon"
import s from './Header.module.sass'

export const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.iconContainer}>
                <Icon />
            </div>
        </div>
    )
}