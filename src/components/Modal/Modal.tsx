import React from 'react';
import './Modal.scss';

type ModalProps = {
  visible?: boolean;
  children?: JSX.Element;
};

export const Modal: React.FC<ModalProps> = ({ visible = false }) => {
  return <div className="modal"></div>;
};
