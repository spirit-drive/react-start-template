import React, { FC, ReactElement } from "react";
import { useTranslation } from 'react-i18next';
import "./AccountSwitcher.scss";

/**
 * Компонент - переключатель учётной записи пользователя.
 */
export const AccountSwitcher: FC = (): ReactElement => {
    const { t } = useTranslation();
    return(
        <div className="dropdown header-top-account">
            <button
                className="btn btn-sm dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
            >
            {' '}{t('account.title')}{' '}
            </button>
            <ul className="dropdown-menu">
            <li>
                <a className="dropdown-item">{t('account.signIn')}</a>
            </li>
            <li>
                <a className="dropdown-item">{t('account.signUp')}</a>
            </li>
            </ul>
        </div>
    );
};