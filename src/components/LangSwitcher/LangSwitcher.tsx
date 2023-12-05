import React, { FC, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { Locale } from "../../localization";

export const LangSwitcher: FC = (): ReactElement => {
    const { i18n } = useTranslation();
    const lang = (i18n.language as Locale) === Locale.Ru ? Locale.En : Locale.Ru;
    return (
        <>
            <button className="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"> {i18n.language} </button>
            <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage(lang)}>Ru</a></li>
                <li><a className="dropdown-item" href="#" onClick={() => i18n.changeLanguage(lang)}>En</a></li>
            </ul>
        </>
    );
};

