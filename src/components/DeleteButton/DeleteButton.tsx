import React from 'react';

import s from './deleteButton.module.scss';

export const Delete = (): React.ReactElement => {
    return (
        <div className={s.deleteButton}>
            <button>Удалить</button>
        </div>
    );
};
