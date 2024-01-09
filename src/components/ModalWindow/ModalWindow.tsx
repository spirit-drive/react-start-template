import React, {FC} from "react";
import clsx from "clsx";
import classNames from './modalWindow.module.css'
import {ModalWindowProps} from "src/types";
const ModalWindow: FC<ModalWindowProps> = ({visible, children}) => {
    if (!visible) return null;

    return (
        <div className={clsx(classNames.wrapper)}>
            <div className={clsx(classNames.box)}>
                <span className={clsx(classNames.closeModal)}>&#10006;</span>
                <h2>{children}</h2>
            </div>
        </div>
    )
}

export default ModalWindow
