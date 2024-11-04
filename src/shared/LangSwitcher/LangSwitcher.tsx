import React from "react"
import { useLangContext } from "../LangProvider/LangProvider";
import { CURRENT_LANGUAGE } from "../LangProvider/types";
import s from './LangSwitcher.module.sass';

export const LangSwitcher = () => {
    const { currentLang, setCurrentLang } = useLangContext();

    const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentLang(e.target.value as CURRENT_LANGUAGE);
    }
    return (
        <>
            <select className={s.langSwitcher} onChange={handleOnChange} value={currentLang}>
                <option value={CURRENT_LANGUAGE.RU}>{CURRENT_LANGUAGE.RU}</option>
                <option value={CURRENT_LANGUAGE.EN}>{CURRENT_LANGUAGE.EN}</option>
            </select>
        </>

    );

}