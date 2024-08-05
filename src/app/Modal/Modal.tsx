import React from 'react';
import s from './Modal.module.sass';

interface ModalProps {
  visible: boolean;
  children: React.ReactNode;
}

const Modal = ({ visible, children }: ModalProps) => {
  if (!visible) return null;

  return (
    <div className={s['modal']}>
      <div className={s['modal__content']}>
        <button className={s['modal__close-button']} aria-label="Close">
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
