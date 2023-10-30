import React from 'react';
import { ThemeSwitcher } from './ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from './LangSwitcher/LangSwitcher';

import s from './header.module.scss';

import { Logo } from './Logo/Logo';

export const Header = (): React.ReactElement => {
    return (
        <header className={s.header}>
            <Logo />
            <ThemeSwitcher />
            <LangSwitcher />
        </header>
    );
};
