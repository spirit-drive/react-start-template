import React, { ReactElement } from 'react';
import cn from 'clsx';
import './modal.css';
import ModalOverlay from "../../components/modal/ModalOverlay";

interface ModalProps {
  visible: boolean;
  children?: ReactElement;
}

const Modal: React.FC<ModalProps> = ({ visible, children }) => {
  return (
    <>
      <div className={`${cn('modal')} ${visible ? 'open active-modal' : 'close'}`}>
        <ModalOverlay/>
        <div className={cn('modalBody')}>
          <div className={cn('modalHeader')}>
            <p>Заголовок</p>
            <button>Закрыть</button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
