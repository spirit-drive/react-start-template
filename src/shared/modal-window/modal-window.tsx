import React, { FC } from 'react'
import cn from 'clsx'
import './modal-window.css'

export interface ModalWindowProps {
    children: React.ReactNode
}

/**
 * Modal Window component
 */
const ModalWindow: FC<ModalWindowProps> = ({ children }) => {
    return (
        <div className={cn('modalwindow-background')}>
            <div className={cn('modalwindow-container')}>
                <div className={cn('body')}>
                    {children}
                </div>
            </div>
            <div className='footer'>

            </div>
        </div>
    );
};

export default ModalWindow;