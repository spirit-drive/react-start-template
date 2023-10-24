import React, { Dispatch, ReactNode, SetStateAction, useEffect } from 'react';

import s from './index.module.scss';

interface Props {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

const Modal: React.FC<Props> = ({ visible, setVisible, children }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <div className={s.modal} hidden={!visible}>
      <div className={s.modal__backdrop} />
      <div className={s.modal__card}>
        <div className={s.modal__card__close} onClick={closeModal} />
        {children}
      </div>
    </div>
  );
};

export default Modal;
