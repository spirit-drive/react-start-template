import React from 'react';
import * as styles from './Modal.module.scss';

type ModalProps = {
  visible?: boolean;
  children?: JSX.Element;
};

export const Modal: React.FC<ModalProps> = ({ visible = false }) => {
  return <div className={styles.modal}></div>;
};
