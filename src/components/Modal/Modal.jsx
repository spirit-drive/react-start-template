// import React from "react";
import cn from "clsx";
import './Modal.scss';

export const Modal = ({visible, children}) => {
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