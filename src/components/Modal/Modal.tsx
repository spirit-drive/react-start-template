import React, {FC} from "react";
import cn from "clsx";
import './Modal.scss';

interface IModal {
    visible: boolean,
    children: React.ReactNode
}

export const Modal:FC<IModal> = ({visible, children}) => {
    const visibleModal = visible && 'modal--opened';
    return (
        <div className={cn('modal', visibleModal)}>
            <div className={cn('modal__inner')}>
                <div className={cn('modal__header')}>
                    <a href='#' className={cn('modal__close-btn')}>×</a>
                </div>
                <div className={cn('modal__content')}>
                    {children}
                </div>
            </div>
        </div>
    )
}