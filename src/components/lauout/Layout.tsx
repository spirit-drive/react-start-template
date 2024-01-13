import styles from './Layout.module.scss';
import React from "react";
import { FC } from 'react';

export type LayoutProps = {
    children?:React.ReactNode
}


export const Layout:FC<LayoutProps> = ({children, ...props}) => {
    return (
        <div className={`${styles.container} container`}>
            {children}

            </div>
    )
}