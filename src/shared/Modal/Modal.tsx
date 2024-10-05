import React from "react";
import { PropsWithChildren } from "react";
import s from './modal.module.sass';
import { createPortal } from "react-dom";


export interface IModal {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: PropsWithChildren<IModal>) => {
    if (props.isOpen) {
        return (
            createPortal(
                <div className={[s.modalOverlay].join(' ')}>
                    <div className={[s.modalContent].join(' ')}>
                        <div>
                            <button className={s.button} onClick={props.onClose} type="button">X</button>
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </div>
                </div>,
                document.body
            )
        );
    } else {
        return (<></>);
    }

}