import React from "react"
import s from './logo.module.sass'
import { Icon } from "./components/Icon"

export const Logo = () => {
    return (
        <div className={s.logo}>
            <Icon />
        </div>
    )
}