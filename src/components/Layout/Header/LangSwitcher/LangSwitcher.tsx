import React from 'react';
import { useLangContext } from '../../../../localization/LocalizationProvider';
import s from './LangSwitcher.module.scss';

export const LangSwitcher = (): React.ReactElement => {
    const { lang, toggleLang } = useLangContext();

    return (
        <button type="button" className={s.root} onClick={toggleLang}>
            {lang}
        </button>
    );
};
