import React, { FC, ReactElement } from 'react';
import { ModalWindow } from '../ModalWindow';
import { Portal } from '../Portal';

export type TypeModalPortal = {
  visible: boolean;
  children?: React.ReactNode;
  onCloseModalWindow?: (visible: boolean) => void;
};

export const ModalWindowPortal: FC<TypeModalPortal> = ({
  visible = false,
  onCloseModalWindow,
  children,
}): ReactElement => {
  return (
    visible && (
      <Portal>
        <ModalWindow visible={visible} onCloseModalWindow={onCloseModalWindow}>
          {children}
        </ModalWindow>
      </Portal>
    )
  );
};
