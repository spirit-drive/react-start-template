import React, { FC, ReactElement, useState } from 'react';
import { ModalWindowPortal } from '../../ModalWindowPortal';
import { Button } from 'antd';
import { AuthComponent } from '../../Forms/AuthComponent/AuthComponent';

export const ButtonWithModalAuth: FC = (): ReactElement => {
  const [visible, setVisible] = useState<boolean>(false);
  const openModal = (visible: boolean): void => {
    setVisible(visible);
  };

  return (
    <>
      <Button type="primary" onClick={() => openModal(true)}>
        Вход/регистрация
      </Button>
      <ModalWindowPortal visible={visible} onCloseModalWindow={openModal}>
        <AuthComponent />
      </ModalWindowPortal>
    </>
  );
};
