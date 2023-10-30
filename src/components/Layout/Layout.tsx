import React, { PropsWithChildren } from 'react';

import { Header } from './Header/Header';

import s from './layout.module.scss';

export const Layout = ({ children }: React.PropsWithChildren): React.ReactElement => {
    return (
        <div className={s.layout}>
            <Header />
            {children}
        </div>
    );
};
