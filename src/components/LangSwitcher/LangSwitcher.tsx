import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import "./LangSwitcher.scss"

export const LangSwitcher: FC = () => {
    const {i18n} = useTranslation();
    const lang = i18n.language;

    const handleChangeLanguage = () => {
        i18n.changeLanguage(lang === 'ru' ? 'en' : 'ru');
    }

    return (
        <div className="lang-switch">
            <input type="checkbox" checked={lang === 'ru'} readOnly/>
            <div className="lang-switch__container" onClick={handleChangeLanguage}>
                <div className="lang-switch__slider"><span>{lang}</span></div>
            </div>
        </div>
    );
};