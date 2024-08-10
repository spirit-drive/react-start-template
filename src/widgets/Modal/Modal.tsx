import React, { FC } from 'react';
import s from './Modal.module.sass';

export interface ModalProps {
  visible: boolean;
  header: string;
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

export const Modal: FC<ModalProps> = ({ visible, header, children, onClose }) => {
  return (
    <div className={s.container} style={{ display: !visible ? 'none' : 'block' }}>
      <div className={s.modal}>
        <div className={s.modal__header}>
          <h5 className={s.modal__title}>{header}</h5>
          <button type="button" className={s.modal__close} onClick={onClose}>
            <span>&times;</span>
          </button>
        </div>
        <div className={s.modal__body}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
