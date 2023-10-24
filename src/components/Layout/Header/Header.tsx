import React from 'react';

import s from './header.module.scss';

import { Logo } from './Logo/Logo';

export const Header = (): React.ReactElement => {
    return (
        <header className={s.header}>
            <Logo />
        </header>
    );
};
