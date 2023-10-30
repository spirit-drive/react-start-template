import React from 'react';
import { useTranslation } from 'react-i18next';

import s from './deleteButton.module.scss';

export const Delete = (): React.ReactElement => {
    const { t } = useTranslation();
    return (
        <div className={s.deleteButton}>
            <button>{t(`buttons.delete`)}</button>
        </div>
    );
};
