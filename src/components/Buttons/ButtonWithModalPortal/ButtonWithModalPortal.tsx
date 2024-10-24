import React, { FC, ReactElement, useState } from 'react';
import { ModalWindowPortal } from '../../ModalWindowPortal';

export const ButtonWithModalPortal: FC = (): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const openModal = (visible: boolean): void => {
    setVisible(visible);
  };

  return (
    <>
      <button onClick={() => openModal(true)}>Нажми меня</button>
      <ModalWindowPortal visible={visible} onCloseModalWindow={openModal}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab temporibus nulla est praesentium quos beatae.
          Quod, id consectetur nostrum provident recusandae quasi laboriosam hic, similique iusto aliquid animi enim
          eum.
        </p>
      </ModalWindowPortal>
    </>
  );
};
