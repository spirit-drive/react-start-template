import React, {FC} from "react";
import cn from "clsx";
import './Modal.scss';

interface IModal {
    isOpen: boolean,
    onClose: (open: boolean) => void,
    children: React.ReactNode,
}

export const Modal:FC<IModal> = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;
    const handleCloseModal = (e: React.MouseEvent):void => {
        if (e.target !== e.currentTarget) return;
        onClose(false);
    }

    return (
        <div className={cn('modal')} onClick={handleCloseModal}>
            <div className={cn('modal__inner')}>
                <div className={cn('modal__header')}>
                    <button onClick={handleCloseModal} className={cn('modal__close-btn')}>×</button>
                </div>
                <div className={cn('modal__content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}