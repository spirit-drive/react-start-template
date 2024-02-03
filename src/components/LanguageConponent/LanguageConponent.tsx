import React from "react";
import { useTranslation } from 'react-i18next';

export const LanguageConponent = () => {
    const { t, i18n } = useTranslation();
    return (
        <div className="languageSection">
            {/* <h2 className='textField'>Book name: {t('main.title')}</h2> */}
            {/* <span className="textField__author">author: <span>{t('main.author')}</span></span> */}
            <span>Some text from book</span>
                <p>{t('main.text')}</p>
            </div>
    )
}