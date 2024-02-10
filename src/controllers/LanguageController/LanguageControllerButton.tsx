import React from 'react';

import type { DispatchLang, StateLang } from 'src/components/context/LanguageContext';
import { Button } from '../../components/button/Button';
import i18n from '../../i18n';

export const LanguageControllerButton = ({ handler, Language }: { handler: DispatchLang, Language: StateLang }) => {
    function changeLang(data:string) {
        i18n.changeLanguage(data)
        switch (data) {
            case 'ru' :
                i18n.changeLanguage('ru')
                handler('ru')
                break;

            case 'en':
                i18n.changeLanguage('en')
                handler('en')
                break;
        }
    }
    if (Language.lang == 'en') {
        return (
            <Button
                type="header"
                onClick={()=>changeLang('ru')}
            >
                RUS
            </Button>
        )
    } if (Language.lang == 'ru') {
        return (
            <Button
                type="header"
                onClick={()=>changeLang('en')}
            >
                ENG
            </Button>
        )
    }
}