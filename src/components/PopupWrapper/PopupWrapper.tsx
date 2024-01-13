import React from "react";
import styles from './PopupWrapper.module.scss';
import { FC } from "react";

export type PopupWrapperProps = {
    visible : boolean,
    children: React.ReactNode
}


export const PopupWrapper: FC<PopupWrapperProps> = ({ visible, children, ...props }) => {
    if (visible) {
        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <button className={styles.closeButton}>close</button>
                    <div className={styles.content}>
                    {children}
                    </div>

                </div>
            </div>
        )
    } else {
        return null
    }

}