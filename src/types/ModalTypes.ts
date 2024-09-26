import React from 'react';

export interface ModalBaseProps {
  visible: boolean;
  header: string;
  children: React.ReactNode;
  onClose: React.MouseEventHandler<HTMLButtonElement>;
}

export interface ModalProps extends ModalBaseProps {
  container?: Element | DocumentFragment;
}
