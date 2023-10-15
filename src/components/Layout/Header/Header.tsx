import React from 'react';

import './header.scss';

import { Logo } from './Logo/Logo';

export const Header = (): React.ReactElement => {
    return (
        <header className="header">
            <Logo />
        </header>
    );
};
