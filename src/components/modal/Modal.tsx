import React, {ReactElement} from 'react';
import ModalOverlay from './ModalOverlay';
import cn from 'clsx';
import './modal.css';

interface ModalProps {
    visible: boolean;
    children?: ReactElement;
}

const Modal: React.FC<ModalProps> = ({visible, children}) => {
    return (
        <>
            <ModalOverlay>
                <div className={`${cn('modal')} ${visible ? 'open' : 'close'}`}>
                    <div className={cn('modalBody')}>
                        <div className={cn('modalHeader')}>
                            <p>Заголовок</p>
                            <button>Закрыть</button>
                        </div>
                        {children}
                    </div>
                </div>
            </ModalOverlay>
        </>

    );
};

export default Modal;
