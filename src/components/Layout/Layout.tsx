import React from 'react';

import { Header } from './Header/Header';

import './layout.scss';

export const Layout = (): React.ReactElement => {
    return (
        <div className="container">
            <Header />
        </div>
    );
};
