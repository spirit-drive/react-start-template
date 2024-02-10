import React from "react";
import { useTranslation } from 'react-i18next';
import '../../App.css'

export type langThemeType = {
    theme?: string
}
export const LanguageConponent = ({theme}:langThemeType) => {
    const { t, i18n } = useTranslation();
    console.log(theme)
    return (
        <div className={theme}>
            <span>Some text from book</span>
                <p>{t('main.text')}</p>
            </div>
    )
}