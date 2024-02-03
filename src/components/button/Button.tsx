import React from "react";
import styles from './Button.module.scss';
import { FC } from "react";
import { Dispatch } from "../context/ThemeContext";


export type ButtonProps = {
    type?: 'header' | 'footer',
    children?: string,
    itemClass?: string,
    buttonData?: string,
    handler?: Dispatch,
    onClick?:(event:any)=>void
}

export const Button: FC<ButtonProps> = ({ type, children, itemClass, buttonData, onClick, ...props }) => {
    function buttonStyles() {
        if(type == 'header') {
            return styles.header
        } else if (type == 'footer') {
            return styles.footer
        } else {
            return styles.base
        }
    }
    return (
        <button
            className={`${styles.button}
                        ${buttonStyles()}
                        ${itemClass}`}
            data-type={buttonData}
            onClick={onClick}
                    >
            {children}
        </button>
    )
}