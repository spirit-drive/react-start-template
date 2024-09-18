import React from "react"
import { Icon } from "../Logo/components/Icon"
import s from './Header.module.sass'
import { ThemeSwitcher } from "../ThemeSwitcher"
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from "../LangSwitcher";

export const Header = () => {
    const { t } = useTranslation();

    return (
        <div className={s.header}>
            {t('shared.header.mainPage')}
            <LangSwitcher/>
            <div>
                <ThemeSwitcher className={s.switcher} />
            </div>
            <div>
                <Icon />
            </div>
        </div>
    )
}