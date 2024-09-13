import React from "react";
import { PropsWithChildren } from "react";
import s from './modal.module.sass';


export interface IModal {
    isOpen: boolean;
    onClose: () => void;
}

export const Modal = (props: PropsWithChildren<IModal>) => {
    if (props.isOpen) {
        return (
            <div className={[s.modalOverlay].join(' ')}>
                <div className={[s.modalContent].join(' ')}>
                    <div>
                        <button className={s.button} onClick={props.onClose} type="button">X</button>
                    </div>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        );
    } else {
        return (<></>);
    }

}