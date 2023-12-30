import React, { ReactNode } from 'react';
import style from './Modal.module.sass';
import cn from 'clsx';

type ModalProps = {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
};

export const Modal = ({ open, children, onClose }: ModalProps) => {
  const handleClose = () => {
    onClose && onClose();
  };

  return (
    <div className={cn(style.root, { [style.open]: open })}>
      <div className={style.container}>
        <button className={style.close} onClick={handleClose}>
          x
        </button>

        {children}
      </div>
    </div>
  );
};
