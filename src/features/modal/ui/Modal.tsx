import React from 'react';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';

export interface IModal {
  visible: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}

const Modal = ({ visible, children, onClose }: IModal) => {
  return (
    <>
      {visible &&
        createPortal(
          <div
            style={{ display: 'flex' }}
            className={styles.main_block}
            onClick={(e) => {
              if (e.target !== e.currentTarget) return;
              onClose();
            }}
          >
            <div className={styles.modal}>
              <div className={styles.modal_header}>
                <div></div>
                <button onClick={() => onClose()} className={styles.close_button}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="20"
                    height="20"
                    viewBox="0 0 50 50"
                    color="black"
                    stroke="black"
                  >
                    <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                  </svg>
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
