import React, { FC, ReactNode } from 'react';
import styles from './styles.module.css';

export interface IModalProps {
  showModal: boolean;
  handleClose: () => void;
  children: ReactNode;
}

const Modal: FC<IModalProps> = ({ showModal, handleClose, children }) => {
  if (!showModal) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modalContainer}>
        {children}
        <button onClick={handleClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;
