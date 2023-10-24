import React from 'react';

import { Header } from './Header/Header';

import s from './layout.module.scss';

export const Layout = (): React.ReactElement => {
    return (
        <div className={s.container}>
            <Header />
        </div>
    );
};
