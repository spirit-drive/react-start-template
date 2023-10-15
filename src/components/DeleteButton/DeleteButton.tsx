import React from 'react';

import './deleteButton.scss';

export const Delete = (): React.ReactElement => {
    return (
        <div className="deleteButton">
            <button>Удалить</button>
        </div>
    );
};
