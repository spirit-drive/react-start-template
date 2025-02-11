import React, { PropsWithChildren } from 'react';
import './modal.css';
import { Layout } from './Layout/Layout';

interface IModalProps {
  visible: boolean;
  logo: string;
  title: string;
}

export const Modal = ({ visible, logo, title, children }: PropsWithChildren<IModalProps>) => {
  return (
    <div className="modal">
      <div className="modal__content">
        <Layout logo={logo} />
        <div className="modal__header">
          <div className="modal__title">{title}</div>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <button>Закрыть</button>
        </div>
      </div>
    </div>
  );
};
