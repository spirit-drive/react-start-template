import React, { FC } from "react";
import * as styles from './styles.module.scss';
import { createPortal } from "react-dom";
import { CloseSharp } from '@mui/icons-material'

export interface IModalPortal {
  onClose: () => void;
  theme : string;
  children?: React.ReactNode;
}

const ModalPortal: FC<IModalPortal> = ({ onClose, theme, children }) => {
  const el = document.querySelector('.sb-main-padded')
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    createPortal(
      <div className={styles.background} onClick={handleOverlayClick}>
        <div className={styles.modalContent} style={theme === 'dark' ? { backgroundColor: 'rgb(177, 189, 230)' } : {}}>
          <CloseSharp className={styles.buttonClose} onClick={onClose} />
          {children}
        </div>
      </div>, el)
  )
}
export default ModalPortal;
