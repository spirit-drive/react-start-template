import React, { FC } from 'react';
import styles from './Button.module.scss';
import { Dispatch } from "../context/ThemeContext";
import cn from "classnames"


export type ButtonProps = {
    type?: 'header' | 'footer',
    children?: string,
    itemClass?: string,
    buttonData?: string,
    handler?: Dispatch,
    onClick?: (event: any) => void,
    theme?:string
}

export const Button: FC<ButtonProps> = ({ type, children, itemClass, buttonData, onClick,theme, ...props }) => {
    function buttonStyles() {
        if(type == 'header') {
            return styles.header
        } else if (type == 'footer') {
            return styles.footer
        } else {
            return styles.base
        }
    }
    console.log(theme)
    return (
        <button
            // className={`${styles.button}
            //             ${buttonStyles()}
            //             ${itemClass}
            //             ${theme}`}
            className={cn(styles.button, buttonStyles(), itemClass, theme)}
            data-type={buttonData}
            onClick={onClick}
                    >
            {children}
        </button>
    )
}