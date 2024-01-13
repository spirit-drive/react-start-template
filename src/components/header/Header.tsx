import React from "react";
import { FC } from "react";
import styles from './Header.module.scss';
import { Button } from "../button/Button";
import { Logo } from "../logo/Logo";
import { HeaderNav } from "../HeaderNav/HeaderNav";


export const Header = () => {
    const navItems = [
        'navItem 1',
        'navItem 2',
        'navItem 3',
        'navItem 4'
    ]

    return (
        <div className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Logo
                    type="header"
                />
                <HeaderNav
                    navItems = {navItems}
                />
                <Button
                    type="header"
                >
                       headerButton
                </Button>
            </div>

        </div>
    )
}