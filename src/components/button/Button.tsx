import React from "react";
import styles from './Button.module.scss';
import { FC } from "react";


export type ButtonProps = {
    type?: 'header' | 'footer',
    children?: string,
    itemClass?: string,
    buttonData?:string
}

export const Button: FC<ButtonProps> = ({ type, children, itemClass, buttonData,  ...props }) => {
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
                    >
            {children}
        </button>
    )
}